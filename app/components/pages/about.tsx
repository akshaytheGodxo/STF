import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="flex flex-col max-w-[1200px] mx-auto px-6 mt-40 space-y-20">
      <div className="font-[Playfair_Display] text-white text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
        About Us
      </div>

      <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
        {/* Stanley */}
        <div className="flex flex-col justify-start font-[Inter] text-white w-full max-w-[600px]">
          <div className="text-left mb-6 w-fit">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Stanley Stephen
            </h3>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6 }}
              className="h-[1px] bg-white mt-1"
            />
            <h4 className="text-base">Managing Director</h4>
          </div>

          <div className="relative border-l-[2px] border-white pl-6 space-y-6 mt-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-[-14px] top-1 w-3 h-3 bg-white rounded-full" />
                <p className="text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <Image
          src="/stanley.jpg"
          alt="Stanley's photo"
          width={400}
          height={400}
          className="w-full max-w-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 justify-between items-center">
        {/* Sandro */}
        <div className="flex flex-col justify-start font-[Inter] text-white w-full max-w-[600px]">
          <div className="text-left mb-6 w-fit">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Sandro Stephen
            </h3>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6 }}
              className="h-[1px] bg-white mt-1"
            />
            <h4 className="text-base">Managing Director</h4>
          </div>

          <div className="relative border-l-[2px] border-white pl-6 space-y-6 mt-6">
            {achievements2.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-[-14px] top-1 w-3 h-3 bg-white rounded-full" />
                <p className="text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <Image
          src="/sandro.jpg"
          alt="Sandro's photo"
          width={400}
          height={400}
          className="w-full max-w-[400px] object-cover"
        />
      </div>
    </section>
  );
}
