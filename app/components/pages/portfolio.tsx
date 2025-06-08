'use client';

import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 font-[Inter] text-white space-y-10">
<motion.h2
  className="text-4xl sm:text-5xl font-semibold tracking-tight relative inline-block pb-2"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Portfolio
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="absolute left-0 bottom-0 h-1 bg-white rounded"
  />
</motion.h2>


      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center"
      >
        <a href="https://www.rzolut.com/" target="_blank" rel="noopener noreferrer" className="inline-block">
          <img
            src="/rzolut-logo-white.png"
            alt="Rzolut Company Logo"
            className="h-16 object-contain"
          />
        </a>
      </motion.div>
    </section>
  );
}
