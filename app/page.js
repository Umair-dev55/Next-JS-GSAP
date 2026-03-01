"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const Page = () => {
  const parent = useRef(null);
  const [y, setY] = useState(250);

  const mouseMove = (e) => {
    setY(e.nativeEvent.clientY);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(parent.current, {
        opacity: 0,
        y: 100,
        duration: 2,
        ease: "power3.out",
      });
    }, parent);

    return () => ctx.revert(); // cleanup (important in Next.js)
  }, []);

  return (
    <div
      ref={parent}
      className="w-screen h-[400px] bg-black relative overflow-hidden"
    >
      <div
        id="string"
        className="absolute left-1/2 -translate-x-1/2"
        onMouseMove={mouseMove}
      >
        <svg width="1000" height="600">
          <path
            d={`M 10 250 Q 500 ${y} 990 250`}
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};

export default Page;
