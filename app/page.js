"use client";
import { useEffect } from "react";
import gsap from "gsap";
const page = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".card1", {
      x: 1200,
      duration: 1,
    });
    tl.from(".card2", {
      duration: 1,
      x: 1200,
    });

    tl.from(".card3", {
      duration: 1,
      x: 1200,
    });

    // gsap.to("h1", {
    //   y: -20,
    //   color: "gray",
    //   stagger: 1,
    //   duration: 0.2,
    // });
    // gsap.from(".card", {
    //   y: 40,
    //   repeat: -1,
    //   duration: 0.4,
    //   yoyo: true,
    // });
  });
  return (
    <div className="h-full p-10">
      <section className="">
        {/* Timeline  */}
        <div className=" p-10  ">
          <div className="card1 p-2 bg-gray-800 size-30">One</div>
          <div className="card2 p-2 bg-gray-700 size-30">Two</div>
          <div className="card3 p-2 bg-gray-700 size-30">Three</div>
        </div>
        {/* To & From  */}
        <div
          id="box"
          className="w-100 border -2 border-gray-700  text-center"
        ></div>
        <div>
          <div id="para" className="text-2xl py-20 ">
            <h1>lorem lorem lorem lorem lorem lorem</h1>
            <h1>lorem lorem lorem lorem lorem lorem</h1>
            <h1>lorem lorem lorem lorem lorem lorem</h1>
            <h1>lorem lorem lorem lorem lorem lorem</h1>
            <h1>lorem lorem lorem lorem lorem lorem</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
