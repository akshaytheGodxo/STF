"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useState } from "react";

export default function Apply() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 font-[Inter]">
      <div className="flex flex-col items-center gap-16 text-center">
        {/* Heading */}
        <motion.div
          className="flex flex-col space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Build?
          </motion.h2>
          <motion.h4
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We move fast. You should, too.
          </motion.h4>

          <motion.button
            type="button"
            className="border-2 rounded-3xl w-44 h-12 font-[Inter] cursor-pointer relative overflow-hidden flex items-center justify-center mx-auto"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="relative h-full w-full flex items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                {!hovered ? (
                  <motion.span
                    key="text"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                    }}
                    className="absolute w-full text-center"
                  >
                    Pitch to us
                  </motion.span>
                ) : (
                  <motion.span
                    key="icon"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      type: "spring",
                    }}
                    className="absolute w-full flex justify-center"
                  >
                    <MoveRight size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
