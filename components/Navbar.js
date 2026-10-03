"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/ourstory", label: "Our Story" },
  { href: "/ourteam", label: "Our Team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-black/80 px-5 backdrop-blur-md md:px-8"
    >
      {/* Logo */}
      <Link href="/" className="font-anton text-lg uppercase tracking-tight">
        Solutions.Inc
      </Link>

      {/* Desktop navigation */}
      <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-wider md:flex">
        {links.map((link) => (
          <Link key={link.href} href={link.href}className="transition-colors hover:text-[#b7ff3c]">
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA + mobile menu button */}
      <div className="flex items-center gap-3">
        <Link href="#contact" className="bg-[#b7ff3c] px-4 py-2 font-anton text-[11px] uppercase text-black transition-transform hover:scale-105">
          Let&apos;s Talk
        </Link>

        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-2xl leading-none md:hidden">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu: drops down under the navbar */}
      {open && (
        <nav className="absolute left-0 right-0 top-full flex flex-col border-b border-white/10 bg-black/95 px-5 py-4 font-mono text-xs uppercase tracking-wider md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 transition-colors hover:text-[#b7ff3c]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </motion.header>
  );
}