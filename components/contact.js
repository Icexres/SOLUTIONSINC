"use client";
import { motion } from "motion/react";
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const fieldStyle ="w-full rounded-xl bg-black px-4 py-3 font-mono text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#C2FF66] md:text-base";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const subject = `Message from ${data.get("name")}`;
    const body = `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`;
    const to = "info@solutionsinc.com";
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,"_blank");
  };

  return (
    <section id="contact" className="scroll-mt-16 overflow-hidden py-20 md:py-32">
      <div className="overflow-hidden bg-[#C2FF66] py-2 md:py-4">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <span className="shrink-0 whitespace-nowrap font-anton text-[clamp(2rem,8vw,6rem)] leading-none text-black">
            LET&apos;S TALK ✦ LET&apos;S TALK ✦ LET&apos;S TALK ✦&nbsp;
          </span>
          <span
            aria-hidden="true"
            className="shrink-0 whitespace-nowrap font-anton text-[clamp(2rem,8vw,6rem)] leading-none text-black"
          >
            LET&apos;S TALK ✦ LET&apos;S TALK ✦ LET&apos;S TALK ✦&nbsp;
          </span>
        </motion.div>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl gap-12 px-5 md:mt-28 md:grid-cols-2 md:gap-16 md:px-8">

        <motion.div {...fadeUp}>
          <h2 className="font-anton text-[clamp(3.5rem,14vw,9rem)] uppercase leading-[0.9] text-white">
            Got an
            <br />
            idea?
            <br />
            <span className="text-[#C2FF66]">Tell us.</span>
          </h2>

          <p className="mt-6 max-w-md font-mono text-sm leading-7 text-white/60 md:mt-10 md:text-base">
            Tell us what you want to build. We&apos;ll get back to you within a
            day or two.
          </p>

          <div className="mt-8 space-y-4 md:mt-12">
            <div>
              <p className="font-anton text-xl uppercase text-white md:text-2xl">Email:</p>
              <a
                href="mailto:info@solutionsinc.com"
                className="font-anton text-lg uppercase text-[#C2FF66] transition-opacity hover:opacity-70 md:text-2xl"
              >
                info@solutionsinc.com
              </a>
            </div>
            <div>
              <p className="font-anton text-xl uppercase text-white md:text-2xl">Office:</p>
              <p className="font-anton text-lg uppercase text-[#C2FF66] md:text-2xl">
                Jhamsikhel, Lalitpur, Nepal
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          {...fadeUp}
          onSubmit={handleSubmit}
          className="space-y-4 self-start rounded-2xl bg-[#3A3A3A] p-5 md:p-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            aria-label="Your name"
            required
            className={fieldStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            aria-label="Your email"
            required
            className={fieldStyle}
          />
          <textarea
            name="message"
            placeholder="Tell us about your idea"
            aria-label="Your message"
            rows={5}
            required
            className={`${fieldStyle} resize-none`}
          />
          <button
            type="submit"
            className="w-full bg-[#C2FF66] py-4 font-anton text-lg uppercase text-black transition-transform hover:scale-[1.02] md:text-2xl"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}