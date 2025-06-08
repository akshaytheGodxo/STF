'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 text-white font-[Inter]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#ffffff] relative inline-block pb-2">
  Get in Touch
  <motion.span
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="absolute left-0 bottom-0 h-1 bg-white rounded"
  />
</h2>


        <p className="text-lg text-neutral-300">
          Questions? Partnerships? Press?
        </p>

        <div className="flex items-center space-x-3 text-lg">
          <Mail className="text-[#ffffff]" size={20} />
          <a
            href="mailto:stanleyteam@smallticketfunding.vc"
            className="hover:underline text-neutral-200"
          >
            stanleyteam@smallticketfunding.vc
          </a>
        </div>

        <div className="flex space-x-6 pt-6">
          <a
            href="https://www.linkedin.com/in/stanley-stephen-20946984/"
            target="_blank"
            className="flex items-center space-x-2 text-neutral-200 hover:text-[#39FF14] transition"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="flex items-center space-x-2 text-neutral-200 hover:text-[#39FF14] transition"
          >
            <Twitter size={20} />
            <span>Twitter</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-neutral-200 hover:text-[#39FF14] transition"
          >
            <span className="w-3 h-3 bg-[#ffffff] rounded-full" />
            <span>Newsletter</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
