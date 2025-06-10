"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Portfolio() {
  return (
    <section className="max-w-[1200px] flex flex-col  mx-auto px-6 py-20 font-[Inter] text-white space-y-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-semibold tracking-tight text-left relative flex pb-2 justify-center"
      >
        <span className="border-b-2 border-white">
          Portfolio{" "}
          
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center "
      >
        <a
          href="https://www.rzolut.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mx-auto"
        >
          <Image
            src="/rzolut.png"
            alt="Rzolut Company Logo"
            className=" mx-auto"
            width={500}
            height={500}
          />
        </a>
      </motion.div>
    </section>
  );
}
