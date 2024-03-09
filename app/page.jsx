"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/app/components/gsap/gsap";
import IntroTitle from "./components/IntroTitle";

export default function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.to("#welcome", {
        opacity: 1,
        duration: 0.5,
        delay: 5,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <IntroTitle bgColour="white" />
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1 id="welcome" className="text-9xl font-black text-gray-100 font-poppins italic opacity-0">
          Welcome.
        </h1>
      </div>
    </div>
  );
}
