"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger} from "@/app/components/gsap/gsap";
import IntroTitle from "@/app/components/IntroTitle";

export default function Home() {
  const comp = useRef(null);
  const title = useRef(null);

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
      <IntroTitle bgColour="bg-gray-950" />
      <div className="h-screen flex bg-gray-50 justify-center place-items-center">
        <h1 id="welcome" reg={title} className="text-9xl font-black text-gray-950 font-poppins italic opacity-0">
          Welcome.
        </h1>
      </div>
    </div>
  );
}
