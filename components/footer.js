import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/ourstory", label: "Our Story" },
  { href: "/ourteam", label: "Our Team" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black px-4 py-4 text-white md:px-8 md:py-8">
      {/* Thinner border on mobile, thick on desktop */}
      <div className="border-4 border-white md:border-8">

        {/* ---------- Top: logo + cross ---------- */}
        <div className="flex items-center justify-between border-b-4 border-white px-5 py-5 md:border-b-8 md:px-8 md:py-8">
          <h2 className="font-anton text-[clamp(1.8rem,5vw,4rem)] leading-none tracking-tight">
            SOLUTIONS.INC
          </h2>
          <img
            src="/cross.svg"
            alt=""
            aria-hidden="true"
            className="h-12 w-12 object-contain transition-transform duration-500 hover:rotate-90 md:h-20 md:w-20"
          />
        </div>

        {/* ---------- Middle: stacked on mobile, 3 columns on desktop ---------- */}
        <div className="grid gap-10 px-5 py-8 md:grid-cols-3 md:gap-8 md:px-8 md:py-14">
          {/* Contact */}
          <div>
            <h3 className="font-anton text-[clamp(1.8rem,5vw,2.5rem)] leading-[0.9]">
              CONTACT US:
            </h3>
            <a
              href="mailto:info@solutionsinc.com"
              className="mt-2 inline-block font-anton text-[clamp(1.1rem,3.4vw,1.5rem)] leading-none text-[#C2FF66] transition-opacity hover:opacity-70"
            >
              INFO@SOLUTIONSINC.COM
            </a>
          </div>

          {/* Office */}
          <div>
            <h3 className="font-anton text-[clamp(1.8rem,5vw,2.5rem)] leading-[0.9]">
              OFFICE:
            </h3>
            <p className="mt-2 font-anton text-[clamp(1.1rem,3.4vw,1.5rem)] uppercase leading-[0.95] text-[#C2FF66]">
              Jhamsikhel, Lalitpur
              <br />
              Nepal
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-anton text-[clamp(1.8rem,5vw,2.5rem)] leading-[0.9]">
              EXPLORE:
            </h3>
            <ul className="mt-2 space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-anton text-[clamp(1.1rem,3.4vw,1.5rem)] uppercase leading-none text-[#C2FF66] transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Bottom: copyright ---------- */}
        <p className="border-t-4 border-white px-5 py-4 text-center font-anton text-[clamp(1rem,3vw,1.4rem)] uppercase text-[#C2FF66] md:border-t-8 md:py-6">
          © {year} Solutions.Inc
        </p>
      </div>
    </footer>
  );
}