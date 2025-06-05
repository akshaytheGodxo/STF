'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="font-['Roboto_Mono'] space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
          We back <br />
          bold founders <br />
          <span className="relative inline-block">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-0 left-0 h-[3px] bg-yellow-400"
            />
            <span className="relative z-10">Fast.</span>
          </span>
        </h2>

        <h4 className="text-xl md:text-2xl font-semibold text-neutral-400">
          Pre-seed to seed. Sector-agnostic. Founder-obsessed.
        </h4>

        <Link
          href="/apply"
          className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded hover:scale-105 transition-transform"
        >
          Pitch to Us
        </Link>
      </div>
    </section>
  );
}
