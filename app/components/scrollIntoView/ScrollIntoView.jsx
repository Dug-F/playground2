"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/app/components/gsap/gsap";

export default function ScrollIntoView({children}) {
  const comp = useRef(null);

  useEffect(() => {
    gsap.set(comp.current, { opacity: 0, y: 100 });

    let animation = gsap.to(comp.current, {
      scrollTrigger: {
        trigger: comp.current,
        start: "top bottom",
        end: "top center",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.out",
    });

    // Return a cleanup function
    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div ref={comp}>
        {children}
    </div>
  );
}
