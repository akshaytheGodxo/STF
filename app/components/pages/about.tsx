'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const achievements = [
  "15+ years of startup ecosystem experience",
  "Ex-Director, TiE Delhi-NCR, Head Investment Pillar",
  "Ex-Associate Partner, Rukam Capital (SEBI registered)",
  "Portfolio: Burger Singh, Sleepy Owl, Pilgrim, Beco",
  "Indian Angel Network Incubator member",
];

const achievements2 = [
  "10+ years of capital raising experience",
  "Add only logos in the work ex",
  "267+ Crores raised across 107+ companies",
  "Track record: 1 Unicorn, 2 Soonicorns",
  "Portfolio highlights: Spinny, Zypp, Yaantra.",
  "Ex-VP Indian Angel Network",
];

export default function About() {
  return (
    <section className="flex flex-col max-w-[1200px] mx-auto px-6 mt-40 space-y-20 text-white font-[Inter]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-[Inter] text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
      >
        About Us
      </motion.h2>

      {[{
        name: "Stanley Stephen",
        role: "Managing Director",
        img: "/stanley.jpg",
        list: achievements
      }, {
        name: "Sandro Stephen",
        role: "Managing Director",
        img: "/sandro.jpg",
        list: achievements2
      }].map((person, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="group w-full bg-neutral-900 rounded-2xl border border-neutral-700 p-8 flex flex-col lg:flex-row gap-12 items-center hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
        >
          {/* Left text */}
          <div className="flex flex-col w-full max-w-[600px]">
            <div className="mb-6">
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">{person.name}</h3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.6 }}
                className="h-[1px] bg-white mt-1"
              />
              <h4 className="text-base mt-1">{person.role}</h4>
            </div>

            <div className="relative  pl-6 space-y-6 mt-6">
              {person.list.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute left-[-14px] top-1 w-1 h-1 bg-white rounded-full" />
                  <p className="text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src={person.img}
              alt={`${person.name}'s photo`}
              width={400}
              height={400}
              className="w-full max-w-[400px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
