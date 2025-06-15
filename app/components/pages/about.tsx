"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const achievements = [
  "15+ years in startup ecosystems",
  "Former Director, TiE Delhi-NCR (Investments)",
  "Ex-Associate Partner, Rukam Capital (SEBI Registered)",
  
  "Member, Indian Angel Network Incubator",
];

const achievements2 = [
  "10+ years in capital raising",
  "₹267 Cr+ raised across 107+ companies",
  "Track record includes 1 Unicorn & 2 Soonicorns",
  "Portfolio: Spinny, Zypp, Yaantra",
  "Ex-VP, Indian Angel Network",
];

const team = [
  {
    name: "Stanley Stephen",
    role: "Managing Partner",
    img: "/stanley.jpg",
    list: achievements,
  },
  {
    name: "Sandro Stephen",
    role: "Managing Director",
    img: "/sandro.jpg",
    list: achievements2,
  },
];

export default function About() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-40 space-y-32 font-['IBM Plex Sans'] text-black dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-semibold tracking-normal text-center"
      >
        <span className="border-b-2 border-black dark:border-white pb-1">
          About Us
        </span>
      </motion.h2>

      {team.map((person, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className={`flex flex-col-reverse lg:flex-row items-center gap-14 ${
            i % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div className="flex-1 space-y-3">
            <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white">
              {person.name}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {person.role}
            </p>

            <div className="space-y-4 border-l-2 pl-5 border-neutral-400 dark:border-neutral-600">
              {person.list.map((item, index) => {
                if (item.startsWith("Portfolio") && person.name === "Sandro Stephen") {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex flex-wrap gap-4 pl-2 items-center">
                        <Image src="/spinny.svg" alt="Spinny" width={60} height={30} className="object-contain" />
                        <Image src="/zypp.svg" alt="Zypp" width={60} height={30} className="object-contain" />
                        <Image src="/yaantra.jpg" alt="Yaantra" width={60} height={30} className="object-contain" />
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex space-x-2 items-start"
                  >
                    <span className="w-1 h-1 mt-2 rounded-full bg-neutral-500 dark:bg-white/80" />
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {item}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="w-full max-w-[360px] overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <div className="relative aspect-[4/5]">
              <Image
                src={person.img}
                alt={person.name}
                fill
                className="object-cover  transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
