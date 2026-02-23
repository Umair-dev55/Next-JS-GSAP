"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const page = () => {
  useEffect(() => {
    gsap.from(".page1 .box", {
      scale: 0,
      rotate: 720,
      duration: 2,
    });
    gsap.from(".page2 > .box", {
      scale: 0,
      rotate: 720,
      duration: 2,
      scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        markers: true,
        start: "top 60%",
      },
    });
    gsap.from(".page3 > .box", {
      scale: 0,
      rotate: 720,
      duration: 2,
      scrollTrigger: {
        trigger: ".page3 .box",
        scroller: "body",
      },
    });
  });
  return (
    <div>
      <div className="page1 h-screen flex-center bg-cyan-800">
        <div className="box flex-center">box</div>
      </div>
      <div className="page2 h-screen flex-center bg-cyan-950">
        <div className="box flex-center">box</div>
      </div>
      <div className="page3 h-screen flex-center bg-cyan-900">
        <div className="box flex-center">box</div>
      </div>
    </div>
  );
};

export default page;
