"use client";

import { motion } from "motion/react";

const arrows = Array.from({ length: 15});

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28">
      {/* Brand + expand icon */}
      <div className="w-full px-4 sm:px-6 md:h-120 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="font-anton text-[#C2FF66] leading-none text-[clamp(2.5rem,12.5vw,12rem)] md:leading-normal">
            SOLUTIONS.INC
          </h1>
          <img src="/expand.svg" alt="expand" className="mt-3 h-14 w-14 sm:h-24 sm:w-24 md:mt-0 md:h-40 md:w-40"/>
        </motion.div>
      </div>

      {/* Border strip */}
      <motion.div className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/border.svg" alt="border" className="mt-4 block h-4 max-w-none md:h-6"/>
      </motion.div>

      {/* YOUR IDEAS. */}
      <h1 className="mt-10 text-center font-anton leading-none text-white text-[clamp(2.5rem,12.5vw,12rem)] md:mt-28 md:leading-normal">
        YOUR IDEAS.
      </h1>

      {/* Marquee */}
      <div className="mt-6 h-24 max-w-full overflow-hidden bg-[#D9D9D9] sm:h-32 md:-mt-8 md:h-48">
        <motion.div
          className="flex h-full w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          <span className="shrink-0 whitespace-nowrap font-anton text-5xl leading-none text-black sm:text-7xl md:text-[12em]">
            WE BUILD WE BUILD WE BUILD&nbsp;
          </span>
          <span aria-hidden="true" className="shrink-0 whitespace-nowrap font-anton text-5xl leading-none text-black sm:text-7xl md:text-[12em]">
            WE BUILD WE BUILD WE BUILD&nbsp;
          </span>
        </motion.div>
      </div>

      {/* Arrow row: fewer arrows on small screens */}
      <div className="mt-4 w-full overflow-hidden bg-black">
        <div className="flex w-full items-center justify-between">
          {arrows.map((_, index) => (
            <motion.img key={index} src="/arrowunit.svg" alt="arrowunit"
              className={`h-16 w-auto shrink-0 sm:h-24 md:h-40 ${
                index >= 13 ? "hidden sm:block" : ""}`}
              animate={{ opacity: [0.1, 1, 0.1] }}
              transition={{duration: 1.2, repeat: Infinity,delay: index * 0.08,ease: "linear"}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}