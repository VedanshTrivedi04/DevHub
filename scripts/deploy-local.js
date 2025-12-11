import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { spawn } from 'node:child_process';

function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', ...opts });
    p.on('close', (code) => code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(' ')} exited ${code}`)));
    p.on('error', (err) => reject(err));
  });
}

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  for (const entry of await fs.readdir(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function rmrf(dir) {
  try {
    await fs.rm(dir, { recursive: true, force: true });
  } catch (e) {}
}

async function main() {
  let repo;
  try {
    // Use execSync to read remote URL synchronously
    const { execSync } = await import('node:child_process');
    repo = execSync('git config --get remote.origin.url').toString().trim();
  } catch (e) {
    throw new Error('Unable to read git remote origin URL. Ensure this is a git repo with an origin remote.');
  }

  const distDir = path.resolve(process.cwd(), 'dist');
  try {
    const st = await fs.stat(distDir);
    if (!st.isDirectory()) throw new Error('dist is not a directory');
  } catch (e) {
    throw new Error('Build output `dist/` not found. Run `npm run build` first.');
  }

  const tmp = path.join(os.tmpdir(), `gh-pages-deploy-${Date.now()}`);
  await rmrf(tmp);
  await fs.mkdir(tmp, { recursive: true });

  console.log('Cloning repository...');
  try {
    // Try to clone gh-pages branch if it exists
    await run('git', ['clone', '--depth', '1', '--branch', 'gh-pages', repo, tmp]);
  } catch (e) {
    console.log('gh-pages branch not found; cloning default branch and creating gh-pages');
    await run('git', ['clone', '--depth', '1', repo, tmp]);
    // create orphan gh-pages branch
    await run('git', ['-C', tmp, 'checkout', '--orphan', 'gh-pages']);
    // remove all files from index and working tree
    // Using rmrf to clear working dir except .git
    for (const f of await fs.readdir(tmp)) {
      if (f === '.git') continue;
      await rmrf(path.join(tmp, f));
    }
    // create an initial empty commit so branch exists
    await run('git', ['-C', tmp, 'add', '--all']);
    try { await run('git', ['-C', tmp, 'commit', '-m', 'chore: init gh-pages']); } catch (e) { /* maybe nothing to commit */ }
  }

  // preserve CNAME from current repo root or from the cloned gh-pages (if present)
  let cnameContent = null;
  try {
    const mainCnamePath = path.join(process.cwd(), 'CNAME');
    const clonedCnamePath = path.join(tmp, 'CNAME');
    try {
      cnameContent = await fs.readFile(mainCnamePath, 'utf8');
      console.log('Preserving CNAME from project root');
    } catch (e) {
      try {
        cnameContent = await fs.readFile(clonedCnamePath, 'utf8');
        console.log('Preserving CNAME from existing gh-pages branch');
      } catch (e2) {
        // no CNAME found
      }
    }
  } catch (e) {}

  console.log('Clearing old files in gh-pages working tree...');
  for (const f of await fs.readdir(tmp)) {
    if (f === '.git') continue;
    await rmrf(path.join(tmp, f));
  }

  console.log('Copying new files...');
  await copyDir(distDir, tmp);

  // ensure .nojekyll exists to avoid GitHub Jekyll processing
  try { await fs.writeFile(path.join(tmp, '.nojekyll'), ''); } catch (e) {}

  console.log('Committing and pushing to gh-pages...');
  // write CNAME if we preserved one
  if (cnameContent) {
    try { await fs.writeFile(path.join(tmp, 'CNAME'), cnameContent, 'utf8'); } catch (e) {}
  }
  await run('git', ['-C', tmp, 'add', '--all']);
  try { await run('git', ['-C', tmp, 'commit', '-m', `chore: deploy (${new Date().toISOString()})`]); } catch (e) { console.log('Nothing to commit'); }

  // Default to non-forced push. To force, set env FORCE_DEPLOY=true
  const useForce = process.env.FORCE_DEPLOY === 'true';
  const pushArgs = ['-C', tmp, 'push', '--set-upstream', 'origin', 'gh-pages'];
  if (useForce) pushArgs.push('--force');
  try {
    await run('git', pushArgs);
  } catch (err) {
    console.error('Push failed. If you must overwrite the remote gh-pages branch, re-run with FORCE_DEPLOY=true.');
    throw err;
  }

  console.log('Deployment complete. Cleaning up...');
  await rmrf(tmp);
}

main().catch((err) => {
  console.error(err && err.message ? err.message : err);
  process.exit(1);
});
