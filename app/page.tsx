"use client";
import Hero from "./components/pages/hero";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import About from "./components/pages/about";
import WhatWeDo from "./components/pages/wwd";
import Apply from "./components/pages/apply";
import JoinTheMission from "./components/pages/join";
import Contact from "./components/pages/contacts";
import MediaAndAIF from "./components/pages/media";
import Portfolio from "./components/pages/portfolio";
import Navbar from "./components/pages/nav";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/pages/footer";
import { cn } from "./lib/utils";

import { useTheme} from "next-themes";

const IntroLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    // Trigger collapse *after* underline finishes (600ms + 500ms delay)
    const timer = setTimeout(() => {
      setCollapse(true);
    }, 1100); // underline anim duration + delay

    const finishTimer = setTimeout(() => {
      onComplete();
    }, 2100); // wait for collapse to finish

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen dark:bg-[#ffffff] bg-black dark:text-black text-white z-50 flex items-center justify-center overflow-hidden"
      initial={{ height: "100%" }}
      animate={{ height: collapse ? "0%" : "100%" }}
      exit={{ height: "0%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col items-center "
        initial={{ y: 0 }}
        animate={{ y: collapse ? -100 : 0 }} // moves text upward with screen
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.h2
          className="font-[Playfair_Display] text-5xl text-center leading-snug"
        >
          SMALL <br />
          TICKET<br />
          FUNDING
        </motion.h2>

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
          className="dark:bg-black bg-white h-[1px] w-48 mt-4 origin-center"
        />

        <motion.h4
          className="font-[Playfair_Display] text-base mt-2"
        >
          Founder Friendly Capital
        </motion.h4>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({});
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main className="space-y-32">
            <div className="mt-38">
              <Hero />
            </div>
            <WhatWeDo />
            <div id="about">
              <About />
            </div>
            
            <Apply />
            <JoinTheMission />
            <div id="contacts">
              <Contact />
            </div>
            <div id="portfolio">
              <Portfolio />
            </div>
            <MediaAndAIF />
            <Footer />
          </main>
        </motion.div>
      )}
    </div>
  );
}
