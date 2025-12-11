import { c as createComponent, b as createAstro, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate } from "./astro/server.B5n5wocT.js";
import "piccolore";
import "html-escaper";
import { clsx } from "clsx";
/* empty css                           */
import { twMerge } from "tailwind-merge";
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro = $$result.createAstro($$Astro, $$props, $$slots);
  Astro.self = $$BaseLayout;
  const { title = "Project", description = "Built with Astro" } = Astro.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"${addAttribute(description, "content")}>
    <title>${title}</title>
  ${renderHead()}</head>
  <body>
    ${renderSlot($$result, $$slots.default)}
  </body></html>`;
}, "D:/devhub/devhook/src/layouts/BaseLayout.astro", void 0);
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export {
  $$BaseLayout as $,
  cn as c
};
