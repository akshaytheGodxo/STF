"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20  font-[Inter]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-4xl sm:text-5xl w-full text-center font-semibold tracking-tight mb-6 relative  justify-center flex pb-2">
          <span className="border-b-2 border-white">Get in Touch</span>
        </h2>

        <p className="text-lg text-center text-neutral-300/[2]">
          Questions? Partnerships? Press?
        </p>

        <div className="flex items-center justify-center space-x-3 text-lg">
          <Mail className="" size={20} />
          <a
            href="mailto:stanleyteam@smallticketfunding.vc"
            className="hover:underline text-neutral-200/[2]"
          >
            stanley@smallticketfunding.vc
          </a>
        </div>

        <div className="flex space-x-6 pt-6 justify-center">
          <a
            href="https://www.linkedin.com/in/stanley-stephen-20946984/"
            target="_blank"
            className="flex items-center space-x-2 text-neutral-200/[2] hover:text-[#b3b8b2] transition"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="flex items-center space-x-2 text-neutral-200/[2] hover:text-[#b3b8b2] transition"
          >
            <Twitter size={20} />
            <span>Twitter</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-neutral-200/[2] hover:text-[#b3b8b2] transition"
          >
            <span className="w-3 h-3 bg-[#ffffff] rounded-full" />
            <span>Newsletter</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
