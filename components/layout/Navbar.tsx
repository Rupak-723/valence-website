"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  FlaskConical,
  Mail,
  MapPin,
 ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Activities", href: "#activities" },
  { name: "ChemQuest", href: "#chemquest" },
  { name: "Journals", href: "#journals" },
  { name: "Team", href: "#team" },
  { name: "Gallery", href: "#gallery" },
  
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <><nav className="container-custom mx-auto flex h-20 items-center justify-between px-6">

  {/* Logo */}

  <Link
    href="/"
    className="group flex items-center gap-4"
  >

    <motion.div
      whileHover={{
        rotate: 10,
        scale: 1.08,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30"
    >

      <FlaskConical className="h-6 w-6 text-white" />

    </motion.div>

    <div>

      <h1 className="text-xl font-black tracking-[0.25em] text-white">

        VALENCE

      </h1>

      <p className="text-xs uppercase tracking-widest text-slate-400">

        The Chemistry Club

      </p>

    </div>

  </Link>

  {/* Desktop Navigation */}

  <div className="hidden items-center gap-8 lg:flex">

    {navLinks.map((item) => (

      <Link
        key={item.name}
        href={item.href}
        className="group relative text-sm font-medium tracking-wide text-slate-300 transition-colors hover:text-cyan-300"
      >

        {item.name}

        <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />

      </Link>

    ))}

    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => setContactOpen(true)}
      className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25"
    >

      Contact

    </motion.button>

  </div>

  {/* Mobile Menu Button */}

  <button
    onClick={() => setOpen(!open)}
    className="rounded-lg p-2 transition hover:bg-slate-800 lg:hidden"
  >

    {open ? (

      <X className="h-6 w-6 text-white" />

    ) : (

      <Menu className="h-6 w-6 text-white" />

    )}

  </button>

</nav>
{/* Mobile Menu */}

<AnimatePresence>

  {open && (

    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.25,
      }}
      className="border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl lg:hidden"
    >

      <div className="container-custom flex flex-col gap-6 px-6 py-8">

        {navLinks.map((item) => (

          <Link
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="text-lg text-slate-300 transition hover:text-cyan-300"
          >

            {item.name}

          </Link>

        ))}

        <button
          onClick={() => {
            setOpen(false);
            setContactOpen(true);
          }}
          className="mt-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-cyan-500/30"
        >

          Contact

        </button>

      </div>

    </motion.div>

  )}

</AnimatePresence>


<AnimatePresence>

  {contactOpen && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
    >

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        transition={{
          duration: 0.3,
        }}
        className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 p-10 shadow-2xl shadow-cyan-500/10"
      >

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-4xl font-bold text-white">

              Contact VALENCE

            </h2>

            <p className="mt-2 text-slate-400">

              We'd love to hear from you.

            </p>

          </div>

          <button
            onClick={() => setContactOpen(false)}
            className="rounded-full bg-slate-800 p-3 transition hover:bg-slate-700"
          >

            <X className="h-5 w-5 text-white" />

          </button>

        </div>

        {/* Contact Information */}

        <div className="mt-10 space-y-8">

          {/* Email */}

          <div className="flex items-start gap-5">

            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4">

              <Mail className="h-6 w-6 text-white" />

            </div>

            <div>

              <h3 className="text-lg font-semibold text-white">

                Email

              </h3>

              <a
                href="mailto:valence@iiserkol.ac.in"
                className="mt-1 block text-slate-400 transition hover:text-cyan-400"
              >

                valence@iiserkol.ac.in

              </a>

            </div>

          </div>

          {/* Address */}

          <div className="flex items-start gap-5">

            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4">

              <MapPin className="h-6 w-6 text-white" />

            </div>

            <div>

              <h3 className="text-lg font-semibold text-white">

                Office

              </h3>

              <p className="mt-1 leading-7 text-slate-400">

                VALENCE – The Chemistry Club
                <br />
                Department of Chemical Sciences
                <br />
                Indian Institute of Science Education and Research Kolkata
                <br />
                Mohanpur, Nadia
                <br />
                West Bengal – 741246
                <br />
                India

              </p>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap gap-5">

          <a
            href="mailto:valence@iiserkol.ac.in"
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:shadow-xl hover:shadow-cyan-500/30"
          >

            Send Email

          </a>

          <a
            href="https://maps.google.com/?q=IISER+Kolkata"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-cyan-500/30 px-8 py-4 font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
          >

            Open Google Maps

            <ExternalLink size={18} />

          </a>

        </div>

      </motion.div>

    </motion.div>

  )}

</AnimatePresence>
    </>
  );
}