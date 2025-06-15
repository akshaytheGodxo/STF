"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MoveRight } from "lucide-react";

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-32 flex flex-col items-center justify-center text-center space-y-8 text-black dark:text-white">
      <div className="font-['IBM Plex Sans'] w-full lg:w-[70%] space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal leading-tight">
          We back bold founders
        </h2>

        <h4 className="text-base md:text-xl font-medium text-neutral-600 dark:text-neutral-400">
          Early Stage Investor. Sector-agnostic. Founder-obsessed.
        </h4>

        <motion.button
          className="bg-transparent border-2 border-black dark:border-white rounded-none w-full sm:w-60 h-12 font-medium cursor-pointer relative overflow-hidden flex items-center justify-center mx-auto text-black dark:text-white"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="relative h-full w-full flex items-center justify-center">
            <AnimatePresence initial={false} mode="wait">
              {!hovered ? (
                <motion.span
                  key="text"
                  initial={{ y: -10, opacity: 0, position: "absolute" }}
                  animate={{ y: 0, opacity: 1, position: "absolute" }}
                  exit={{ y: -10, opacity: 0, position: "absolute" }}
                  transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
                  className="w-full text-center"
                >
                  Pitch to us
                </motion.span>
              ) : (
                <motion.span
                  key="icon"
                  initial={{ y: 10, opacity: 0, position: "absolute" }}
                  animate={{ y: 0, opacity: 1, position: "absolute" }}
                  exit={{ y: 10, opacity: 0, position: "absolute" }}
                  transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
                  className="w-full flex justify-center"
                >
                  <MoveRight size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </div>
    </section>
  );
}
