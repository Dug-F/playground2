import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger and other GSAP plugins you might use
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger }; // Export them for use in your components
