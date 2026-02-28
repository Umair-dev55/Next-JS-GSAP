"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const page = () => {
  useEffect(() => {
    gsap.from(".page1 .box", {
      x: -500,
      y: -200,
      duration: 1,
      rotate: 360,
      scale: 0,
    });

    gsap.from(".page2 .box", {
      x: -500,
      rotate: 360,
      scale: 0,
      scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        scrub: 5,
        // markers: true,
        start: "top 90%",
        end: "top 50%",
      },
    });
  });
  return (
    <div>
      <div className="page1 h-screen flex-center bg-cyan-800">
        <div className="box flex-center">box</div>
      </div>
      <div className="page2 h-screen flex-center bg-cyan-950">
        <div className="sm:flex sm:justify-center sm:items-center gap-20 *:m-10">
          <div className="box flex-center">Flex 1</div>
          <div className="box flex-center">Flex 2</div>
          <div className="box flex-center">Flex 3</div>
        </div>
      </div>
      <div className="page3 h-screen flex-center bg-cyan-500"></div>
    </div>
  );
};

export default page;
