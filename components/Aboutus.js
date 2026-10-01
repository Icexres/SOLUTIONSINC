"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-6 md:px-8 md:py-40">

      {/* Decorative SVG (desktop only) */}
      <motion.img src="/sidething.svg" alt="Decorative element"
        aria-hidden="true"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-5 -right-45 z-0 hidden h-[850px] w-[80%] max-w-[1010px] md:block"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-[#C2FF66]">
          About Us
        </p>

        <h2 className="mt-4 font-anton text-[clamp(3.5rem,16vw,10rem)] leading-[0.9] text-white md:mt-6">
          WE BUILD
          <br />
          WHAT&apos;S
          <br />
          <span className="text-[#C2FF66]">NEXT.</span>
        </h2>

        <p className="mt-8 max-w-2xl font-mono text-sm leading-7 text-white/60 md:mt-12 md:text-base">
          A Startup studio based in Kathmandu, Nepal. We turn ambitious ideas
          into bold digital experiences. From strategy to design and
          development, we build things that move brands forward.
        </p>
      </motion.div>
    </section>
  );
}