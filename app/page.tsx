"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.to("#intro-slider", {
        opacity: 1, // Ensure the intro-slider is visible before starting animation
        duration: 0.1,
      })
        .from("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
          delay: 0.3,
        })
        .from(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title1", "#title2", "#title3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div id="intro-slider" className="opacity-0 h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk \-10 w-full flex flex-col gap-10 tracking-tight">
        <h1 id="title1" className="text-9xl">
          Software Engineer
        </h1>
        <h1 id="title2" className="text-9xl">
          Designer
        </h1>
        <h1 id="title3" className="text-9xl">
          Freelancer
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1 id="welcome" className="text-9xl font-black text-gray-100 font-poppins italic">
          Welcome.
        </h1>
      </div>
    </div>
  );
}
