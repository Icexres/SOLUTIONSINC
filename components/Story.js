"use client";
import { motion } from "motion/react";
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeOut" },
};

function Chevron({ delay }) {
  return (
    <motion.svg
      viewBox="0 0 100 38"
      fill="#C2FF66"
      className="w-16 sm:w-20 md:w-32 lg:w-40"
      animate={{ opacity: [0.15, 1, 0.15] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay }}
    >
      <polygon points="0,0 30,0 50,18 70,0 100,0 50,38" />
    </motion.svg>
  );
}

export default function Story() {
  return (
    <section className="overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-32 md:pt-40">
      <div className="mx-auto max-w-7xl space-y-10 md:space-y-20 lg:space-y-28">

        <motion.div {...fadeUp} className="flex items-center justify-center gap-3 md:gap-6">
          <img
            src="/asterisks.svg"
            alt=""
            aria-hidden="true"
            className="h-12 w-auto sm:h-16 md:h-28 lg:h-40"
          />
          <h1 className="font-anton text-[clamp(2.5rem,12vw,11rem)] uppercase leading-none text-[#C2FF66]">
            Our Story
          </h1>
        </motion.div>

        <motion.div {...fadeUp} className="flex items-center justify-center gap-4 md:gap-10 lg:gap-16">
          <img
            src="/coffee.svg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-24 w-auto shrink-0 sm:h-32 md:h-52 lg:h-72"
          />
          <h2 className="font-anton text-[clamp(1.5rem,6vw,7rem)] uppercase leading-[1.1] text-white">
            Started at a
            <br />
            coffee shop
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="flex items-center justify-center gap-3 md:gap-10 lg:gap-16">
          <h2 className="font-anton text-[clamp(1.5rem,6vw,7rem)] uppercase leading-[1.1] text-white">
            A group
            <br />
            of fresh
            <br />
            devs
          </h2>

          <img src="/Lunar.svg" alt="" aria-hidden="true" className="h-30 w-30 ml-20 md:h-50 md:w-50 lg:h-72 lg:w-72" />
        </motion.div>

        <motion.h2
          {...fadeUp}
          className="bg-[#C2FF66] px-4 py-3 text-center font-anton text-[clamp(1.5rem,7vw,6.5rem)] uppercase leading-tight text-black md:py-6 lg:py-10"
        >
          Searching for a client
        </motion.h2>

        {/*Down arrow*/}
        <motion.div {...fadeUp} className="flex flex-col items-center gap-4 md:gap-8">
          <div className="flex flex-col items-center gap-1 md:gap-2">
            {/* delay grows for each chevron, so they light up top to bottom */}
            <Chevron delay={0} />
            <Chevron delay={0.25} />
            <Chevron delay={0.5} />
          </div>
          <h2 className="font-anton text-[clamp(1.75rem,8vw,8rem)] uppercase leading-none text-white">
            Until ...
          </h2>
        </motion.div>

        <motion.h2
          {...fadeUp}
          className="bg-[#FF9020] px-4 py-3 text-center font-anton text-[clamp(1.5rem,7vw,6.5rem)] uppercase leading-tight text-black md:py-6 lg:py-10"
        >
          We made our own
          <br />
          product
        </motion.h2>

        <motion.div {...fadeUp} className="flex items-center justify-center gap-4 md:gap-10 lg:gap-16">
          <img
            src="/Link.svg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-14 w-auto shrink-0 sm:h-20 md:h-32 lg:h-48"
          />
          <h2 className="font-anton text-[clamp(1.75rem,8vw,8rem)] uppercase leading-none text-white">
            And kicked off
          </h2>
        </motion.div>

      </div>
    </section>
  );
}