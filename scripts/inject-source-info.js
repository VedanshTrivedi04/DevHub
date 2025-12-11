// Stub implementations for build compatibility

export function reactNodeTransform() {
  return {
    name: 'react-node-transform',
    visitor: {}
  };
}

export function astroSourceIntegration() {
  return {
    name: 'astro-source-integration',
    hooks: {
      'astro:build:done': async () => {}
    }
  };
}
