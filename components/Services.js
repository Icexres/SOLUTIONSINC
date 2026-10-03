"use client";
import { useState } from "react";
import { motion } from "motion/react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};
const projects = [
  { name: "RMS", desc: "A management system built to cater needs of restaurants" },
  { name: "Next Project", desc: "Coming Soon....." },
];

export default function Services() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  return (
    <section className="overflow-hidden px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">

        {/* Orange card keeps its own narrow box, so its % math is unchanged */}
        <div className="mx-auto max-w-3xl">
          <motion.div {...fadeUp}
            className="ml-[14%] w-[74%] rounded-tr-[2rem] rounded-bl-[2rem] bg-[#D94A00] pb-8 pt-5 md:pb-14 md:pt-10"
          >
            {/* Heading is wider than the card, so it sticks out on both sides */}
            <h2 className="relative z-10 -ml-[19%] w-[135%] text-center font-anton text-[clamp(3rem,15vw,8.5rem)] leading-[0.9] text-white">
              OUR SERVICES
            </h2>

            {/* Tag: also wider than the card. Everything inside is positioned in % */}
            <div className="-ml-[14%] mt-6 w-[124%] md:mt-10 [container-type:inline-size]">
              <div className="relative aspect-[220/85] w-full">
                <img src="/sub1.svg" alt="" aria-hidden="true" loading="lazy" className="absolute left-0 top-0 h-full w-[61%] object-contain object-left"/>
                {/* text size scales with the tag width (cqw) */}
                <h3 className="absolute left-[8%] top-0 flex h-full items-center font-anton text-[7.5cqw] leading-[1.2] text-black">
                  SUB
                  <br />
                  SCRIPT
                  <br />
                  ION
                </h3>
                <img src="/sub2.svg" alt="" aria-hidden="true" loading="lazy" className="absolute right-0 top-0 z-10 h-full w-[60%] object-contain object-right"/>
                <img src="/money.svg" alt="" aria-hidden="true" loading="lazy" className="absolute left-[62%] top-1/2 z-20 w-[32%] -translate-y-1/2"/>
              </div>
            </div>
            <p className="mt-6 px-[7%] font-anton text-[clamp(1.25rem,6vw,2.75rem)] leading-[1.2] text-white md:mt-10">
              Easy subscriptions for Claude, Netflix, Steam, and much more.
            </p>
          </motion.div>
        </div>

        <motion.div {...fadeUp} className="mt-16 md:mt-28">
          <div className="flex md:ml-42 items-center gap-4 pl-[4%] md:gap-8">
            <img src="/thunder.svg" alt="" aria-hidden="true" loading="lazy" className="h-14 w-auto shrink-0 sm:h-20 md:h-32 lg:h-44"/>
            <h2 className="font-anton text-[clamp(2.25rem,10vw,8rem)] uppercase leading-[0.95] text-white">
              Building <br className="hidden md:inline" />Solutions
            </h2>
          </div>

          <p className="mt-6 md:ml-42 max-w-2xl font-mono text-[clamp(0.9rem,4vw,2.25rem)] font-bold leading-snug text-white">
            Custom <span className="text-[#C2FF66]">Software Development</span>{" "}
            and Web Development Services to digitalize your Ideas.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mt-16 flex items-end gap-3 md:mt-28 md:gap-6">
          {/* Icon + vertical label */}
          <div className="flex shrink-0 flex-col items-center gap-2">
            <img src="/ourwork.svg" alt="" aria-hidden="true" loading="lazy" className="h-12 w-auto sm:h-16 md:h-24 lg:h-36"/>
            <span className="rotate-180 font-anton text-xl uppercase text-white [writing-mode:vertical-rl] md:text-4xl lg:text-6xl">
              Our Work
            </span>
          </div>

          {/* Project card */}
          <div className="flex flex-1 items-center justify-between gap-3 rounded-2xl bg-[#3A3A3A] p-4 md:p-8 lg:p-12">
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-2 md:gap-4">
                <motion.img src="/projecticon.svg" alt="" aria-hidden="true" loading="lazy" className="h-8 w-auto md:h-14 lg:h-20"
                    animate={{rotate:360}}
                    transition={{duration:6,repeat:Infinity,ease:"linear"}}
                />
                <h3 className="font-anton text-3xl uppercase text-white md:text-6xl lg:text-8xl">
                  {project.name}
                </h3>
              </div>
              <p className="mt-2 max-w-xl font-mono text-[clamp(0.7rem,3vw,1.5rem)] font-bold leading-snug text-white md:mt-4">
                {project.desc}
              </p>
            </motion.div>

            <button onClick={() => setIndex((index + 1) % projects.length)} aria-label="Next project"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9D9D9] text-xl text-black transition-transform hover:scale-110 md:h-12 md:w-12 md:text-3xl lg:h-16 lg:w-16 lg:text-5xl"
            >
              ›
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}