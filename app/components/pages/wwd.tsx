'use client';

import { motion } from 'framer-motion';

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
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">What We Do</h2>
        <div className="bg-neutral-900 rounded-xl p-8 space-y-6 border border-neutral-700">
          <h3 className="text-2xl font-bold text-yellow-400">Pre-Seed & Seed Capital</h3>
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
        </div>
      </motion.div>

      {/* WHY CHOOSE US */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">Why Choose Small Ticket</h2>
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
