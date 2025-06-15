"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "../ui/card-hover-effect";

const whatWeDoPoints = [
  "Sector-agnostic focus across Fintech, Healthtech, Cleantech, Consumer Tech, D2C, and SaaS.",
  "Hands-on support across hiring, go-to-market strategy, and follow-on funding.",
];

const whyChoosePoints = [
  "Fast decisions, faster capital deployment.",
  "A decade of co-investor relationships and access.",
  "Founder-first, GP-led team with unique market insights.",
  "Sharp focus on niche markets and founder-market fit.",
];

const cardsDescriptions = [
  {
    title: "/plant.png",
    description: "Pre-Seed",
    link: "/",
  },
  {
    title: "/early.png",
    description: "Early",
    link: "/",
  },
  {
    title: "/tree.png",
    description: "Seed",
    link: "/",
  },
];

export default function WhatWeDo() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-40 font-['IBM Plex Sans'] space-y-20">
      {/* WHAT WE DO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold tracking-normal text-center pb-2 mb-6"
        >
          <span className="border-b-2 border-black dark:border-white">
            What We Do
          </span>
        </motion.h2>

        <div className="bg-neutral-100 dark:bg-neutral-900  p-8 space-y-6 border border-neutral-200 dark:border-neutral-800">
          <h3 className="text-2xl font-semibold text-black dark:text-white">
            Pre-Seed & Seed Capital
          </h3>
          <ul className="list-disc list-inside space-y-3 text-base text-neutral-700 dark:text-neutral-300">
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

        <HoverEffect items={cardsDescriptions} className="mt-12 " />
      </motion.div>

      {/* WHY CHOOSE US */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold tracking-normal text-center pb-2 mb-6"
        >
          <span className="border-b-2 border-black dark:border-white">
            Why Choose Small Ticket Funding
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {whyChoosePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-none border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-base font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
