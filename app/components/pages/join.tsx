"use client";

import { motion } from "framer-motion";

export default function JoinTheMission() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 font-[Inter] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row justify-between gap-16"
      >
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-5xl font-bold tracking-tight leading-tight relative inline-block pb-2">
  Join the Mission
  <motion.span
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="absolute left-0 bottom-0 h-1 bg-white rounded"
  />
</h2>

          <p className="text-lg text-gray-300 max-w-xl">
            We’re building the future of Indian entrepreneurship. <br />
            Looking for driven minds who think like founders.
          </p>
        </motion.div>

        {/* Roles Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 bg-neutral-900 border border-white/10 rounded-2xl shadow-lg p-8 space-y-6"
        >
          <h3 className="text-2xl font-semibold mb-4">Open Roles</h3>
          <ul className="space-y-4 text-gray-200">
            <li className="border-b border-white/10 pb-2">
              <span className="font-medium">● Investment Analyst</span>{" "}
              <span className="text-sm text-gray-400">(Full-time)</span>
            </li>
            <li className="border-b border-white/10 pb-2">
              <span className="font-medium">
                ● Marketing & Operations Associate
              </span>{" "}
              <span className="text-sm text-gray-400">(Full-time)</span>
            </li>
          </ul>
          <p className="text-sm text-gray-400">
            Work directly with partners. Meet category-defining founders. Shape
            India’s startup ecosystem.
          </p>
          <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
            Apply Now
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
