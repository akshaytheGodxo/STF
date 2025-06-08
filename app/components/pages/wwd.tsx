'use client';

import { motion } from 'framer-motion';
import { Sparkles, Rocket, TreeDeciduous } from 'lucide-react';

const whatWeDoPoints = [
  'Sector-agnostic (core: Fintech, Healthtech, Cleantech, Consumer Tech, D2C, SaaS)',
  'Active support: Hiring, GTM strategy, follow-on fundraising',
];

const whyChoosePoints = [
  'Speed: Fast decisions, faster deployment',
  'Network: Decade-long co-investor relationships',
  'Experience: GP-led with unique market insights',
  'Focus: Niche markets, strong founder-market fit',
];

export default function WhatWeDo() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-40 text-white font-[Inter] space-y-20">
      {/* WHAT WE DO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 relative inline-block pb-2">
  What We Do
  <motion.span
    layoutId="underline"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="absolute left-0 bottom-0 h-1 bg-white rounded"
  />
</h2>

        <div className="bg-neutral-900 rounded-xl p-8 space-y-6 border border-neutral-700">
          <h3 className="text-2xl font-bold text-white">Pre-Seed & Seed Capital</h3>
          <ul className="list-disc list-inside space-y-3 text-sm sm:text-base text-neutral-300">
            {whatWeDoPoints.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {point}
              </motion.li>
            ))}
          </ul>

          {/* Flow Chart */}
          <div className="flex items-center justify-center mt-10 space-x-4">
            {/* Pre-Seed */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <Sparkles size={32} className="text-yellow-400" />
              <span className="text-sm mt-1 text-neutral-400">Pre-Seed</span>
            </motion.div>

            {/* Arrow */}
            <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
              <path
                d="M0 10 H25 M25 10 L20 5 M25 10 L20 15"
                stroke="#facc15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Early */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <TreeDeciduous  size={32} className="text-yellow-400" />
              <span className="text-sm mt-1 text-neutral-400">Early</span>
            </motion.div>

            {/* Arrow */}
            <svg width="30" height="20" viewBox="0 0 30 20" fill="none">
              <path
                d="M0 10 H25 M25 10 L20 5 M25 10 L20 15"
                stroke="#facc15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Seed */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <Rocket size={32} className="text-yellow-400" />
              <span className="text-sm mt-1 text-neutral-400">Seed</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* WHY CHOOSE US */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6 relative inline-block pb-2">
  Why Choose Small Ticket
  <motion.span
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="absolute left-0 bottom-0 h-1 bg-white rounded"
  />
</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {whyChoosePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-lg font-medium text-neutral-200">{point}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
