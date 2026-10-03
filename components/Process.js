"use client";
import { useRef } from "react";
import { motion, useScroll } from "motion/react";
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export default function Process() {
  // scrollYProgress goes from 0 to 1 as you scroll through the steps
  const stepsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 80%", "end 60%"],
  });

  return (
    <section className="overflow-hidden px-5 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">

        <div className="flex items-center gap-3 md:gap-6">
          <motion.img
            src="/pinwheel.svg"
            alt=""
            className="h-10 w-10 md:h-20 md:w-20"
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <h2 className="font-anton text-[clamp(2.5rem,10vw,7rem)] uppercase leading-none text-white">
            Our Process
          </h2>
        </div>

        <div ref={stepsRef} className="relative mt-12 space-y-10 md:mt-24 md:space-y-20">

          {/* greenline */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-1/2 top-0 hidden h-full w-0.5 origin-top bg-[#C2FF66] md:block"
          />

          <motion.div {...fadeUp} className="grid grid-cols-2 items-center gap-4 md:gap-16">
            <div className="relative flex items-center justify-center py-6 md:py-12">

              <div className="absolute right-[2%] top-1/2 aspect-square h-[85%] -translate-y-1/2 bg-[#FF9020]" />
              <h3 className="relative z-10 font-anton text-[clamp(2.25rem,11vw,7rem)] leading-none text-white">
                MEET
              </h3>
            </div>
            <p className="rounded-2xl bg-[#3A3A3A] p-4 font-mono text-[clamp(0.8rem,3.4vw,1.5rem)] font-semibold leading-snug text-white md:p-8">
              We talk with you and walk through the plans
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-2 items-center gap-4 md:gap-16">
            <p className="rounded-2xl bg-[#3A3A3A] p-4 font-mono text-[clamp(0.8rem,3.4vw,1.5rem)] font-semibold leading-snug text-white md:p-8">
              We build what we talk about
            </p>
            <div className="relative flex items-center justify-center py-6 md:py-12">
              {/* green triangle behind the word */}
              <div
                className="absolute right-0 top-1/2 aspect-square h-[85%] -translate-y-1/2 bg-[#A3D14F]"
                style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
              />
              <h3 className="relative z-10 font-anton text-[clamp(2.25rem,11vw,7rem)] leading-none text-white">
                BUILD
              </h3>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="grid grid-cols-2 items-center gap-4 md:gap-16">
            <div className="relative flex items-center justify-center py-6 md:py-12">
              {/* red circle */}
              <div className="absolute left-[2%] top-1/2 aspect-square h-[85%] -translate-y-1/2 rounded-full bg-[#D94A00]" />
              <h3 className="relative z-10 font-anton text-[clamp(2.25rem,11vw,7rem)] leading-none text-white">
                REPEAT
              </h3>
            </div>
            <p className="rounded-2xl bg-[#3A3A3A] p-4 font-mono text-[clamp(0.8rem,3.4vw,1.5rem)] font-semibold leading-snug text-white md:p-8">
              We do it until you are satisfied
            </p>
          </motion.div>
        </div>

        <p className="mt-24 text-center font-anton text-[clamp(2.5rem,10vw,6rem)] leading-none text-white md:mt-40">
          SO
        </p>

        <div className="relative mt-10 pb-12 text-center md:mt-16 md:pb-20">
          {/* orange bar grows upward when it scrolls into view */}
          <motion.div
            className="absolute inset-x-0 -top-6 bottom-0 mx-auto w-[45%] origin-bottom bg-[#FF9020] md:-top-12"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          />
          <h2 className="relative z-10 font-anton text-[clamp(2.25rem,9vw,6.5rem)] uppercase leading-[1.05] text-white">
            Contact us
            <br />
            for your needs
            <br />
            Today!
          </h2>
        </div>
      </div>
    </section>
  );
}