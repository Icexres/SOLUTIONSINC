"use client";
import { motion } from "motion/react";
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function Team() {
  return (
    <section className="min-h-screen px-5 pb-20 pt-28 md:px-8 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <motion.h1
          {...fadeUp}
          className="text-center font-anton text-[clamp(3.5rem,16vw,9rem)] uppercase leading-none text-[#C2FF66]"
        >
          Our Team
        </motion.h1>

        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-16 md:gap-10">

          <motion.div
            {...fadeUp}
            className="relative mt-14 rounded-2xl bg-[#3A3A3A] px-3 pb-6 pt-[4.5rem] text-center md:mt-20 md:px-6 md:pb-10 md:pt-[6.5rem]"
          >
            <img
              src="/team1.jpg"
              alt="Adrian Smith"
              loading="lazy"
              className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#8A8A8A] object-cover md:h-40 md:w-40 md:border-[10px]"
            />
            <h2 className="font-anton text-lg uppercase text-white md:text-3xl">
              Adrian Smith
            </h2>
            <p className="mt-2 font-mono text-[11px] font-bold leading-snug text-[#A8A8A8] md:text-base">
              Full-stack Developer | Project Manager
            </p>
          </motion.div>
          
          <motion.div
            {...fadeUp}
            className="relative mt-14 rounded-2xl bg-[#3A3A3A] px-3 pb-6 pt-[4.5rem] text-center md:mt-20 md:px-6 md:pb-10 md:pt-[6.5rem]"
          >
            <img
              src="/team2.jpg"
              alt="Jarred Lecter"
              loading="lazy"
              className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#8A8A8A] object-cover md:h-40 md:w-40 md:border-[10px]"
            />
            <h2 className="font-anton text-lg uppercase text-white md:text-3xl">
              Jarred Lecter
            </h2>
            <p className="mt-2 font-mono text-[11px] font-bold leading-snug text-[#A8A8A8] md:text-base">
              Marketing Lead | Data Analytics Head
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}