"use client";
import Hero from "./components/pages/hero";
import Lenis from "lenis";
import { useEffect } from "react";
import About from "./components/pages/about";
import WhatWeDo from "./components/pages/wwd";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({});
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="">
     <Hero /> 
     <About />
     <WhatWeDo />
     {/* <ApplySection /> */}
    </main>
  );
}
