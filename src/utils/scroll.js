import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (target) => {
  gsap.to(window, {
    duration: 0.4,           // smoothness
    scrollTo: target,      // e.g. "#section2"
    ease: "power2.out",    // easing curve
  });
};
