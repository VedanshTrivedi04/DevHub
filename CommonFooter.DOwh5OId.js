import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { lazy, Suspense, createElement, useState, useEffect } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { X, Circle } from "lucide-react";
import { c as cn } from "./utils.C7mHLQk5.js";
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
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdvdMdV5srWrqC-cxfupmaJZcaJkoG5k6-BmXF7PRLVGhJI8g/viewform?usp=dialog";
const CLUB_GENERAL_INFO = {
  name: "DEVHUB",
  tagline: "Coding Club PIEMR",
  fullDescription: "Founded on August 17, 2025, Devhub - Coding Club PIEMR is a dynamic community committed to fostering excellence in web development among its members. Through collaborative learning, hands-on workshops, expert talks, and hackathons, we equip individuals with the knowledge and skills needed to build innovative web applications and thrive in a technology-driven world. By promoting collaboration, creativity, and ethical development practices, we empower students to become confident contributors in the digital ecosystem.",
  foundingDate: "August 17, 2025",
  logoUrl: "/logo.svg",
  heroImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/e5056109-1102-4ec8-ac09-4f8def71fafc.png"
};
const CLUB_MISSION = [{
  id: 1,
  title: "Web Development Excellence",
  description: "To empower our members to excel in Web Development by fostering a dynamic community of learning, collaboration, and innovation.",
  iconName: "Zap"
}, {
  id: 2,
  title: "Technical Skill Mastery",
  description: "To equip members with essential skills in HTML, CSS, JavaScript, React.js, Next.js, Django, FastAPI, MongoDB, Express.js, Git, and GitHub.",
  iconName: "Code"
}, {
  id: 3,
  title: "Creativity & Ethics",
  description: "To foster a culture of creative problem-solving and ethical development, ensuring our members build applications with positive impact on society.",
  iconName: "Handshake"
}, {
  id: 4,
  title: "Collaborative Projects",
  description: "To organize Events, Hackathons, and Expert Talks, and facilitate collaborative Projects where students work together to create impactful solutions.",
  iconName: "Users"
}];
const MISSION_VISION_IMAGES = {
  visionVisual: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/f7a90e45-19ae-41ab-b33d-1dac6134c498.png"
};
const CLUB_VISION = "To be an active and leading group for education, collaboration, and web development innovation, fostering a dynamic community of technology enthusiasts passionate about building modern applications. Devhub aims to empower students by providing hands-on experience through workshops, hackathons, expert sessions, and collaborative projects, while promoting teamwork, creativity, and ethical coding practices. We strive to shape future-ready developers who contribute positively to society and inspire others in the technology ecosystem.";
const CORE_TECHNOLOGIES_GROUPS = [{
  title: "Frontend Development",
  description: "Focus on interactive user interfaces using modern frameworks.",
  techs: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  iconName: "Code",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/0a6cf4f0-8d6f-4b0e-8499-3d5759944de4.png"
}, {
  title: "Backend & Frameworks",
  description: "Building robust and scalable server-side logic.",
  techs: ["Django", "FastAPI", "Express.js"],
  iconName: "Server",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/0a118ef9-a938-4b5f-9e83-7efc1b1fc986.png"
}, {
  title: "Database & Tooling",
  description: "Data management and collaboration through essential development tools.",
  techs: ["MongoDB", "Git", "GitHub"],
  iconName: "Database",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/80357195-b002-40fc-ae8c-ab4aa8556061.png"
}];
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
      /* @__PURE__ */ jsx("img", { src: CLUB_GENERAL_INFO.logoUrl, alt: "DevHub Logo", className: "w-10 h-10 object-contain group-hover:drop-shadow-glow transition-shadow" }),
      /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gradient hidden sm:inline", children: "DevHub" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-6", children: navLinks.map((link) => /* @__PURE__ */ jsxs("a", { href: link.href, className: "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group", children: [
      link.name,
      /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" })
    ] }, link.name)) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-4", children: /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-shadow", children: /* @__PURE__ */ jsxs("a", { href: GOOGLE_FORM_URL, target: "_blank", rel: "noopener noreferrer", children: [
      /* @__PURE__ */ jsx(SafeIcon, { name: "UserPlus", size: 16, className: "mr-2" }),
      "Register Now"
    ] }) }) }),
    /* @__PURE__ */ jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, className: "md:hidden", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(SafeIcon, { name: "Menu", size: 24 }) }) }),
      /* @__PURE__ */ jsx(SheetContent, { side: "right", className: "glass w-[300px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 mt-8", children: [
        /* @__PURE__ */ jsxs("a", { href: "./index.html", className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx("img", { src: CLUB_GENERAL_INFO.logoUrl, alt: "DevHub Logo", className: "w-10 h-10 object-contain" }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gradient", children: "DevHub" })
        ] }),
        navLinks.map((link) => /* @__PURE__ */ jsx("a", { href: link.href, className: "text-lg font-medium text-foreground/80 hover:text-foreground transition-colors", onClick: () => setIsOpen(false), children: link.name }, link.name)),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-gradient-to-r from-primary to-secondary mt-4", children: /* @__PURE__ */ jsxs("a", { href: GOOGLE_FORM_URL, target: "_blank", rel: "noopener noreferrer", children: [
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
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center", children: /* @__PURE__ */ jsx("img", { src: CLUB_GENERAL_INFO.logoUrl, alt: "DevHub Logo", className: "w-10 h-10 object-contain group-hover:drop-shadow-glow transition-shadow" }) }),
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
            /* @__PURE__ */ jsx("a", { href: "mailto:devhub.piemr@gmail.com", className: "hover:text-primary transition-colors", children: "devhub.piemr@gmail.com" })
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
  CLUB_GENERAL_INFO as C,
  GOOGLE_FORM_URL as G,
  MISSION_VISION_IMAGES as M,
  SafeIcon as S,
  CLUB_MISSION as a,
  CLUB_VISION as b,
  CORE_TECHNOLOGIES_GROUPS as c,
  CommonHeader as d,
  CommonFooter as e
};
