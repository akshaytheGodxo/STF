"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Apply() {
  const [hovered, setHovered] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const second = time.getSeconds();
  const minute = time.getMinutes();
  const hour = time.getHours();

  const secondAngle = second * 6;
  const minuteAngle = minute * 6 + second * 0.1;
  const hourAngle = (hour % 12) * 30 + minute * 0.5;

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-20 text-white font-[Inter]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          className="flex flex-col space-y-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h4
            className="text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            We move fast. You should, too.
          </motion.h4>

          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Build?
          </motion.h2>

          <motion.button
            type="button"
            className="text-black border-white bg-white border-2 rounded-3xl w-44 h-12 font-[Inter] cursor-pointer relative overflow-hidden flex items-center justify-center"
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

        {/* Right Side - Clock */}
        <motion.div
          className="flex justify-center lg:justify-end mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Clock face */}
            <div className="w-80 h-80 rounded-full border-4 border-white bg-neutral-950 shadow-xl relative overflow-hidden">
              {/* Hour markers */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white"
                  style={{
                    width: i % 3 === 0 ? "3px" : "1.5px",
                    height: i % 3 === 0 ? "16px" : "8px",
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 30}deg) translateY(-130px)`,
                    transformOrigin: "bottom center",
                  }}
                />
              ))}

              {/* Hour numbers */}
              {[...Array(12)].map((_, i) => {
                const angle = (i + 1) * 30;
                const radius = 95;
                const x = radius * Math.sin((angle * Math.PI) / 180);
                const y = -radius * Math.cos((angle * Math.PI) / 180);

                return (
                  <div
                    key={i}
                    className="absolute text-white font-bold text-lg select-none"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                      userSelect: "none",
                    }}
                  >
                    {i + 1}
                  </div>
                );
              })}

              {/* Hour hand */}
              <div
                className="absolute bg-white origin-bottom rounded-full"
                style={{
                  width: "6px",
                  height: "60px",
                  bottom: "50%",
                  left: "calc(50% - 3px)",
                  transform: `rotate(${hourAngle}deg)`,
                  transformOrigin: "bottom center",
                  zIndex: 10,
                }}
              />
              {/* Minute hand */}
              <div
                className="absolute bg-white origin-bottom rounded-full"
                style={{
                  width: "4px",
                  height: "90px",
                  bottom: "50%",
                  left: "calc(50% - 2px)",
                  transform: `rotate(${minuteAngle}deg)`,
                  transformOrigin: "bottom center",
                  zIndex: 10,
                }}
              />
              {/* Second hand */}
              <div
                className="absolute bg-red-500 origin-bottom rounded-full animate-pulse"
                style={{
                  width: "2px",
                  height: "110px",
                  bottom: "50%",
                  left: "calc(50% - 1px)",
                  transform: `rotate(${secondAngle}deg)`,
                  transformOrigin: "bottom center",
                  zIndex: 10,
                }}
              />

              {/* Center Dot */}
              <div
                className="absolute w-4 h-4 bg-white rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
