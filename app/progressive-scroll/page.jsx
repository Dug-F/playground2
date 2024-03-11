"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/components/gsap/gsap";

export default function ContinuousAnimationComponent() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    // const isInViewAtLoad = () => {
    //   const triggerStart = window.innerHeight * 0.75; // Equivalent to "top 75%"
    //   const triggerEnd = window.innerHeight * 0.25; // Equivalent to "bottom 25%"
    //   const elementTop = element.getBoundingClientRect().top + window.scrollY;
    //   const viewportTop = window.scrollY;
    //   const viewportBottom = viewportTop + window.innerHeight;

    //   console.log("elementTop: ", elementTop, " viewportTop: ", viewportTop, " triggerStart: ", triggerStart, " viewPortBottom: ", viewportBottom, " triggerEnd: ", triggerEnd);
    //   // Return true if the element's top is below "top 75%" line and above "bottom 25%" line at load
    //   return elementTop > viewportTop + triggerStart && elementTop < viewportBottom - triggerEnd;
    // };

    // isInViewAtLoad();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 75%",
        end: "bottom 25%",
        scrub: true,
        // markers: true, // For debugging
        onUpdate: (self) => {
          const progress = self.progress;
          const colorValue = Math.floor(255 * progress);
          gsap.to(element, { x: progress * 500, color: `rgb(${255 * progress}, 0, ${255 - colorValue})` });
        },
      },
    });

    return () => {
      // Cleanup
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <div>
      <div style={{ height: "150vh", background: "#ccc" }}>Scroll to see the animation</div>
      <div ref={ref} style={{ background: "#ddd", padding: "20px", color: "#0000ff" }}>
        I animate on scroll!
      </div>
      <div style={{ height: "150vh", background: "#eee" }}>More content below</div>
    </div>
  );
}
