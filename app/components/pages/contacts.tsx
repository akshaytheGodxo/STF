"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 font-['IBM Plex Sans'] dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-10 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          <span className="border-b-2 dark:border-white border-black pb-1">Get in Touch</span>
        </h2>

        <p className="text-base dark:text-neutral-400">
          Questions, partnerships, or press inquiries? Reach out below.
        </p>

        <div className="flex items-center justify-center space-x-3 text-base dark:text-white">
          <Mail size={20} />
          <a
            href="mailto:stanley@smallticketfunding.vc"
            className="hover:underline font-medium"
          >
            stanley@smallticketfunding.vc
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <a
            href="https://www.linkedin.com/in/stanley-stephen-20946984/"
            target="_blank"
            className="flex items-center gap-2 dark:text-neutral-300 dark:hover:text-white hover:text-black/20 transition"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            className="flex items-center gap-2 dark:text-neutral-300 dark:hover:text-white hover:text-black/20 transition"
          >
            <Twitter size={20} />
            <span>Twitter</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 dark:text-neutral-300 dark:hover:text-white hover:text-black/20 transition"
          >
            <span className="w-3 h-3 bg-white rounded-full" />
            <span>Newsletter</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
