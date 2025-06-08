"use client";
import Hero from "./components/pages/hero";
import Lenis from "lenis";
import { useEffect } from "react";
import About from "./components/pages/about";
import WhatWeDo from "./components/pages/wwd";
import Apply from "./components/pages/apply";
import JoinTheMission from "./components/pages/join";
import Contact from "./components/pages/contacts";
import MediaAndAIF from "./components/pages/media";
import Portfolio from "./components/pages/portfolio";
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
    <main className="space-y-32">
     <Hero /> 
     <About />
     <WhatWeDo />
    <Apply />
    <JoinTheMission />
    <Contact />
    <Portfolio />
    <MediaAndAIF />
    </main>
  );
}
