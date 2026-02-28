"use client";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

const Nav = () => {
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
    timeline.from(".nav-link", {
      opacity: 0,
      y: -40,
      duration: 0.5,
    });
    timeline.from("#hero", {
      opacity: 0,
      x: -400,
      duration: 0.5,
    });
  });
  return (
    <div>
      <nav className="justify-between bg-black p-10 text-[16px] capitalize">
        <h3 className="logo">Umair</h3>
        <div className=" flex gap-10">
          <Link className="nav-link" href="/">
            home
          </Link>
          <Link className="nav-link" href="/scrolltrigger">
            scrolltrigger
          </Link>
          <Link className="nav-link" href="/textTrigger">
            textTrigger
          </Link>
          <Link className="nav-link" href="/about">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
