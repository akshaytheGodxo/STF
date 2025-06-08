'use client';

import { motion } from 'framer-motion';

export default function MediaAndAIF() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 font-[Inter] text-white space-y-20">
      {/* Media & Mentions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
  className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 relative inline-block pb-2"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Media & Mentions
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="absolute left-0 bottom-0 h-1 bg-white rounded"
  />
</motion.h2>

      </motion.div>

      {/* AIF Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-neutral-900 rounded-xl p-6 border border-neutral-700 space-y-4"
      >
        <h3 className="text-2xl font-semibold mb-2">AIF Details</h3>
        <ul className="text-neutral-300 text-base space-y-2 list-disc list-inside">
          <li>
            <span className="text-white">AIF’s Name:</span> Small Ticket Funding Ventures Trust Fund I
          </li>
          <li>
            <span className="text-white">Manager:</span> Founder Friendly Ventures Private Limited
          </li>
          <li>
            <span className="text-white">SEBI Registration Number:</span> IN/AIF2/24-25/1690
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
