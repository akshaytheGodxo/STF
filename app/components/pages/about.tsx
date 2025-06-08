'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const achievements = [
  "15+ years of startup ecosystem experience",
  "Ex-Director, TiE Delhi-NCR, Head Investment Pillar",
  "Ex-Associate Partner, Rukam Capital (SEBI registered)",
  "Portfolio: Burger Singh, Sleepy Owl, Pilgrim, Beco",
  "Indian Angel Network Incubator member",
]

const achievements2 = [
  "10+ years of capital raising experience",
  "Add only logos in the work ex",
  "267+ Crores raised across 107+ companies",
  "Track record: 1 Unicorn, 2 Soonicorns",
  "Portfolio highlights: Spinny, Zypp, Yaantra.",
  "Ex-VP Indian Angel Network",
]

const team = [
  {
    name: "Stanley Stephen",
    role: "Managing Director",
    img: "/stanley.jpg",
    list: achievements,
  },
  {
    name: "Sandro Stephen",
    role: "Managing Director",
    img: "/sandro.jpg",
    list: achievements2,
  },
]

export default function About() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 mt-40 space-y-32 text-white font-[Inter]">
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-5xl md:text-6xl font-semibold tracking-tight text-left relative inline-block pb-2"
>
  About Us
  <motion.span
    layoutId="underline"
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="absolute left-0 bottom-0 h-1 bg-white rounded"
  />
</motion.h2>


      {team.map((person, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className={`flex flex-col-reverse lg:flex-row items-center gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Text Section */}
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl md:text-4xl font-semibold">{person.name}</h3>
            <p className="text-neutral-400 text-base mb-4">{person.role}</p>

            <div className="space-y-5 border-l-2 border-white/20 pl-6">
              {person.list.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className='flex flex-row space-x-2'>
                    <span className=" w-1 h-1 my-auto rounded-full bg-white/80" />
                    <p className="text-sm text-neutral-300 leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-[400px] overflow-hidden rounded-2xl">
            <Image
              src={person.img}
              alt={person.name}
              width={500}
              height={500}
              className="rounded-2xl object-cover grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-2xl" />
          </div>
        </motion.div>
      ))}
    </section>
  )
}
