import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useState, useEffect } from "react";
const ScrollReveal = forwardRef(({
  children,
  variant = "fade",
  delay = 0,
  className = ""
}, ref) => {
  const internalRef = useRef(null);
  const divRef = ref || internalRef;
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
      }
    }, {
      threshold: 0.1
    });
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, [delay]);
  const variants = {
    fade: {
      initial: "opacity-0",
      animate: "opacity-100"
    },
    "slide-up": {
      initial: "opacity-0 translate-y-8",
      animate: "opacity-100 translate-y-0"
    },
    "slide-left": {
      initial: "opacity-0 translate-x-8",
      animate: "opacity-100 translate-x-0"
    },
    "slide-right": {
      initial: "opacity-0 -translate-x-8",
      animate: "opacity-100 translate-x-0"
    }
  };
  const variantClasses = variants[variant];
  return /* @__PURE__ */ jsx("div", { ref: divRef, className: `transition-all duration-700 ease-out ${isVisible ? variantClasses.animate : variantClasses.initial} ${className}`, children });
});
ScrollReveal.displayName = "ScrollReveal";
export {
  ScrollReveal as S
};
