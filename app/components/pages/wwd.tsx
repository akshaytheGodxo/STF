"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, TreeDeciduous } from "lucide-react";
import { HoverEffect } from "../ui/card-hover-effect";

const whatWeDoPoints = [
  "Sector-agnostic (core: Fintech, Healthtech, Cleantech, Consumer Tech, D2C, SaaS)",
  "Active support: Hiring, GTM strategy, follow-on fundraising",
];

const whyChoosePoints = [
  "Speed: Fast decisions, faster deployment",
  "Network: Decade-long co-investor relationships",
  "Experience: GP-led with unique market insights",
  "Focus: Niche markets, strong founder-market fit",
];

const cardsDescriptions = [
  {
    title: <Sparkles size={100} className="mx-auto" />,
    description: "Pre-Seed",
    link: "/",
  },
  {
    title: <Rocket size={100} className="mx-auto" />,
    description: "Early",
    link: "/",
  },
  {
    title: <TreeDeciduous size={100} className="mx-auto" />,
    description: "Seed",
    link: "/",
  },
];

export default function WhatWeDo() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-40 font-[Inter] space-y-20">
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
          className="text-5xl md:text-6xl font-semibold tracking-tight text-center pb-2 mb-6"
        >
          <span className="border-b-2 border-black dark:border-white">
            What We Do
          </span>
        </motion.h2>

        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-8 space-y-6 border border-neutral-300 dark:border-neutral-700">
          <h3 className="text-2xl font-bold text-black dark:text-white">
            Pre-Seed & Seed Capital
          </h3>
          <ul className="list-disc list-inside space-y-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
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

        <HoverEffect items={cardsDescriptions} className="" />
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
          className="text-5xl md:text-6xl font-semibold tracking-tight text-center pb-2 mb-6"
        >
          <span className="border-b-2 border-black dark:border-white">
            Why Choose Small Ticket
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
              className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
