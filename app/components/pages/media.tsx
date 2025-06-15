"use client";

import { motion } from "framer-motion";

export default function MediaAndAIF() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 font-['IBM Plex Sans'] space-y-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-normal text-center pb-2">
          <span className="border-b-2 border-white">Fund Compliance Information</span>
        </h2>
      </motion.div>

      {/* AIF Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-neutral-900 border border-neutral-700 p-8 space-y-4 text-sm md:text-base text-neutral-300"
      >
        <ul className="list-inside space-y-4">
          <li>
            <span className="text-white font-medium">AIF Name:</span>{" "}
            Small Ticket Funding Ventures Trust Fund I
          </li>
          <li>
            <span className="text-white font-medium">Investment Manager:</span>{" "}
            Founder Friendly Ventures Private Limited
          </li>
          <li>
            <span className="text-white font-medium">SEBI Registration Number:</span>{" "}
            IN/AIF2/24-25/1690
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
