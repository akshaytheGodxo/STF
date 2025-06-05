"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef} from "react";
import { MoveRight } from 'lucide-react';

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);



  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 flex flex-row">
      <div className="font-[Playfair_Display] text-8xl ">
        <div className="block">
          SMALL<br></br>
          TICKET<br></br>
          FUNDING
        </div>
        <motion.div
        
        initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6 }}
        className="h-[1px] bg-white w-full block"></motion.div>

        <span
        
        
        className="text-base block">Founder Friendly Capital</span>
      </div>


      <div className="font-['Inter'] space-y-6 ml-auto mt-40">
        <h2 className="text-3xl text-right md:text-5xl font-semibold tracking-tighter leading-tight ">
          We back <br />
          bold founders <br />
          <span className="relative inline-block">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-0 right-0 h-[3px] bg-gray-500"
            />
            <span className="relative z-10">Fast.</span>
          </span>
        </h2>

        <h4 className="text-xl md:text-xl font-semibold text-neutral-400">
          Pre-seed to seed. Sector-agnostic. Founder-obsessed.
        </h4>


    <motion.button
      className="bg-transparent border-white border-2 rounded-3xl w-full h-10 font-[Inter] cursor-pointer relative overflow-hidden flex items-center justify-center"
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
              transition={{ duration: 0.3, ease: "easeInOut" , type: "spring"}}
              className="flex items-center justify-center w-full"
            >
              Pitch to us
            </motion.span>
          ) : (
            <motion.span
              key="icon"
              initial={{ y: 10, opacity: 0, position: "absolute" }}
              animate={{ y: 0, opacity: 1, position: "absolute" }}
              exit={{ y: 10, opacity: 0, position: "absolute" }}
              transition={{ duration: 0.3, ease: "easeInOut" , type: "spring"}}
              className="flex items-center justify-center w-full"
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
