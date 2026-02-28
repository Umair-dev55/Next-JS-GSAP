"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  useEffect(() => {
    gsap.to("#parent #child", {
      transform: "translateX(-80%)",
      scrollTrigger: {
        trigger: "#parent ",
        scroller: "body",
        markers: true,
        scrub: 1,
        pin: true,
        start: "top 0%",
        end: "top -100%",
      },
    });
  });
  return (
    <div>
      <div className="h-screen">1</div>
      <div
        id="parent"
        className="p-5 sm:h-screen w-screen bg-amber-700 flex items-center"
      >
        <h1 id="child" className="p-20 text-[50vw] font-extrabold">
          EXPERIENCE
        </h1>
      </div>
      <div className="h-screen">3</div>
    </div>
  );
};

export default page;
