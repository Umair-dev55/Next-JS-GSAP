"use client";
import { useEffect } from "react";
import gsap from "gsap";
const page = () => {
  useEffect(() => {
    gsap.from("#box", {
      x: 350,
      opacity: 1,
      duration: 1,
      delay: 2,
    });
    gsap.to("#box1", {
      x: 350,
      opacity: 1,
      duration: 1,
      delay: 2,
    });
  });
  return (
    <div className="h-screen">
      <section className="p-10">
        <div
          id="box"
          className="size-10 rounded-full bg-cyan-700  text-center "
        ></div>
        <div
          id="box1"
          className="size-10 bg-cyan-700 rounded-full text-center "
        ></div>
        <div
          id="box2"
          className="size-10 bg-cyan-700 rounded-full text-center "
        ></div>
        <div
          id="box3"
          className="size-10 bg-cyan-700 rounded-full text-center "
        ></div>
        <div
          id="box4"
          className="size-10 bg-cyan-700 rounded-full text-center "
        ></div>
        <div
          id="box5"
          className="size-10 bg-cyan-700 rounded-full text-center "
        ></div>
      </section>
    </div>
  );
};

export default page;
