"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/app/lib/utils";

export default function JoinTheMission() {
  const { theme } = useTheme();

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 font-['IBM Plex Sans']">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row justify-between gap-16"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="border-b-2 border-black dark:border-white pb-1">
              Work With Us
            </span>
          </h2>

          <p
            className={cn(
              "text-base leading-relaxed max-w-xl",
              theme === "dark" ? "text-neutral-300" : "text-neutral-600"
            )}
          >
            Help us build the future of Indian entrepreneurship. <br />
            We’re looking for thinkers, doers, and founder-minded talent.
          </p>
        </motion.div>

        {/* Roles Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={cn(
            "flex-1 p-8 space-y-6 border dark:bg-neutral-900 dark:text-white dark:border-white/10 bg-neutral-100 text-black border-neutral-300",
            theme === "dark"
              ? ""
              : ""
          )}
        >
          <h3 className="text-xl font-semibold">Open Roles</h3>
          <ul className="space-y-3">
            <li className="border-b border-white/10 dark:border-neutral-700 pb-2">
              <span className="font-medium">● Investment Analyst</span>{" "}
              <span className="text-sm text-gray-400">(Full-time)</span>
            </li>
            <li className="border-b border-white/10 dark:border-neutral-700 pb-2">
              <span className="font-medium">● Marketing & Ops Associate</span>{" "}
              <span className="text-sm text-gray-400">(Full-time)</span>
            </li>
          </ul>

          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Work directly with partners. Shape India’s startup ecosystem. Meet
            category-defining founders.
          </p>

          <button className="w-full bg-black dark:bg-white text-white dark:text-black px-5 py-2 font-semibold hover:opacity-90 transition duration-200">
            Apply Now
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
