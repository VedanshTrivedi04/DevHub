import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { lazy, Suspense, createElement, useState, useEffect } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { X, Circle } from "lucide-react";
import { c as cn } from "./utils.CrEs14aD.js";
import { Slot } from "@radix-ui/react-slot";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = React.forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({
    variant,
    size,
    className
  })), ref, ...props });
});
Button.displayName = "Button";
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Overlay, { className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref }));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
    }
  },
  defaultVariants: {
    side: "right"
  }
});
const SheetContent = React.forwardRef(({
  side = "right",
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({
    side
  }), className), ...props, children: [
    /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Title, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props }));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({
  className,
  ...props
}, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
const iconCache = /* @__PURE__ */ new Map();
function SafeIcon({
  name,
  ...props
}) {
  if (!iconCache.has(name)) {
    try {
      const IconComponent2 = lazy(() => import("lucide-react").then((module) => {
        const icon = module[name];
        if (!icon) {
          console.warn(`Icon "${name}" not found in lucide-react, using fallback`);
          return {
            default: Circle
          };
        }
        return {
          default: icon
        };
      }).catch(() => {
        console.warn(`Failed to load icon "${name}", using fallback`);
        return {
          default: Circle
        };
      }));
      iconCache.set(name, IconComponent2);
    } catch {
      iconCache.set(name, Circle);
    }
  }
  const IconComponent = iconCache.get(name) || Circle;
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Circle, { ...props }), children: createElement(IconComponent, props) });
}
function CommonHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    href: "./index.html"
  }, {
    name: "About",
    href: "./about-us.html"
  }, {
    name: "Contact",
    href: "./contact-us.html"
  }];
  return /* @__PURE__ */ jsx("header", { className: `sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "glass shadow-lg" : "bg-transparent"}`, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex h-16 items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "./index.html", className: "flex items-center gap-2 group", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-glow transition-shadow", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Code2", size: 24, color: "white", strokeWidth: 2.5 }) }),
      /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gradient hidden sm:inline", children: "DevHub" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-6", children: navLinks.map((link) => /* @__PURE__ */ jsxs("a", { href: link.href, className: "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group", children: [
      link.name,
      /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" })
    ] }, link.name)) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-4", children: /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-shadow", children: /* @__PURE__ */ jsxs("a", { href: "./registration-form.html", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "UserPlus", size: 16, className: "mr-2" }),
      "Register Now"
    ] }) }) }),
    /* @__PURE__ */ jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, className: "md:hidden", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Menu", size: 24 }) }) }),
      /* @__PURE__ */ jsx(SheetContent, { side: "right", className: "glass w-[300px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 mt-8", children: [
        /* @__PURE__ */ jsxs("a", { href: "./index.html", className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Code2", size: 24, color: "white", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gradient", children: "DevHub" })
        ] }),
        navLinks.map((link) => /* @__PURE__ */ jsx("a", { href: link.href, className: "text-lg font-medium text-foreground/80 hover:text-foreground transition-colors", onClick: () => setIsOpen(false), children: link.name }, link.name)),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-gradient-to-r from-primary to-secondary mt-4", children: /* @__PURE__ */ jsxs("a", { href: "./registration-form.html", children: [
          /* @__PURE__ */ jsx(SafeIcon, { name: "UserPlus", size: 16, className: "mr-2" }),
          "Register Now"
        ] }) })
      ] }) })
    ] })
  ] }) }) });
}
const Separator = React.forwardRef(({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}, ref) => /* @__PURE__ */ jsx(SeparatorPrimitive.Root, { ref, decorative, orientation, className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props }));
Separator.displayName = SeparatorPrimitive.Root.displayName;
function CommonFooter({
  variant = "complex"
}) {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = [{
    name: "Home",
    href: "./index.html"
  }, {
    name: "About Us",
    href: "./about-us.html"
  }, {
    name: "Bylaws",
    href: "./bylaws.html"
  }, {
    name: "Core Committee",
    href: "./core-committee.html"
  }, {
    name: "Contact",
    href: "./contact-us.html"
  }];
  const socialLinks = [{
    icon: "Github",
    href: "#",
    label: "GitHub"
  }, {
    icon: "Twitter",
    href: "#",
    label: "Twitter"
  }, {
    icon: "Linkedin",
    href: "#",
    label: "LinkedIn"
  }, {
    icon: "Instagram",
    href: "#",
    label: "Instagram"
  }];
  if (variant === "simple") {
    return /* @__PURE__ */ jsx("footer", { className: "bg-card/50 border-t border-border mt-auto", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "© ",
        currentYear,
        " DevHub - Coding Club PIEMR. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: socialLinks.map((social) => /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, className: "hover:text-primary transition-colors", children: /* @__PURE__ */ jsx("a", { href: social.href, target: "_blank", rel: "noopener noreferrer", "aria-label": social.label, children: /* @__PURE__ */ jsx(SafeIcon, { name: social.icon, size: 18 }) }) }, social.label)) })
    ] }) }) });
  }
  return /* @__PURE__ */ jsx("footer", { className: "bg-gradient-to-b from-background to-card/50 border-t border-border mt-auto", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
        /* @__PURE__ */ jsxs("a", { href: "./index.html", className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Code2", size: 28, color: "white", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-gradient", children: "DevHub" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-md mb-4", children: "Empowering students through web development education, collaboration, and innovation at PIEMR." }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: socialLinks.map((social) => /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", asChild: true, className: "hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all", children: /* @__PURE__ */ jsx("a", { href: social.href, target: "_blank", rel: "noopener noreferrer", "aria-label": social.label, children: /* @__PURE__ */ jsx(SafeIcon, { name: social.icon, size: 18 }) }) }, social.label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: footerLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link.href, className: "text-sm text-muted-foreground hover:text-primary transition-colors", children: link.name }) }, link.name)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "MapPin", size: 16, className: "mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "PIEMR, Indore" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(SafeIcon, { name: "Mail", size: 16, className: "mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:devhub@piemr.edu", className: "hover:text-primary transition-colors", children: "devhub@piemr.edu" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "mb-6" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        currentYear,
        " DevHub - Coding Club PIEMR. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Founded on August 17, 2025" })
    ] })
  ] }) });
}
export {
  Button as B,
  CommonHeader as C,
  SafeIcon as S,
  CommonFooter as a
};
