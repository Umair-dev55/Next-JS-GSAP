"use client";
import { useEffect } from "react";
import gsap from "gsap";
const page = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from("#card1", {
      x: 1200,
      duration: 1,
    });
    tl.from("#card2", {
      duration: 1,
      x: 1200,
    });

    tl.from("#card3", {
      duration: 1,
      x: 1200,
    });
    var timeline = gsap.timeline();
    timeline.from(".logo", {
      y: -40,
      delay: 0.5,
      duration: 0.2,
      opacity: 0,
    });
    timeline.from("#nav", {
      opacity: 0,
      y: -40,
      duration: 0.5,
    });
    timeline.from("#hero", {
      opacity: 0,
      x: -40,
      duration: 0.5,
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
    <div className="">
      {/* Nav Here  */}
      <nav className="justify-between bg-black/40 p-10 text-[16px]">
        <h3 className="logo">Umair</h3>
        <div className=" flex gap-10">
          <a id="nav" href="#">
            Home
          </a>
          <a id="nav" href="#">
            Products
          </a>
          <a id="nav" href="#">
            Services
          </a>
          <a id="nav" href="#">
            About
          </a>
          <a id="nav" href="#">
            Contact
          </a>
        </div>
      </nav>
      <div className="h-screen">
        <h1 id="hero" className="text-2xl abs-center">
          Coding ERA
        </h1>
      </div>
      <div className="relative p-10  ">
        <div className="*:m-5 sm:flex sm:justify-center">
          <div id="card1" className="bg-black size-70 rounded-2xl ">
            Card
          </div>
          <div id="card2" className="bg-black size-70 rounded-2xl ">
            Card
          </div>
          <div id="card3" className="bg-black size-70 rounded-2xl ">
            Card
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
