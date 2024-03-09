"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/app/components/gsap/gsap";

export default function IntroTitle(props) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.to("#intro-slider", {
        opacity: 1, // Ensure the intro-slider is visible before starting animation
        duration: 1,
      })
        .from("#title1", {
          opacity: 0,
          y: "+=30",
        })
        .to("#title1", {
          opacity: 0,
          y: "-=30",
          delay: 2,
        })
        .to("#intro-slider", {
          opacity: 0, // Ensure the intro-slider is visible before starting animation
          duration: 1,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
    <div id="intro-slider" className={`opacity-0 h-screen p-10 ${props.bgColour} absolute top-0 left-0 font-poppins w-full flex items-center justify-center gap-10 tracking-tight`}>
      <h1 id="title1" className="text-9xl clipped-text">
        ATEDO.
      </h1>
    </div>
    </div>
  );
}
