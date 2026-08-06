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
    <><header
  className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 shadow-xl shadow-black/20"
      : "bg-transparent"
  }`}
>
  <motion.nav
    initial={{
      y: -100,
      opacity: 0,
    }}
    animate={{
      y: 0,
      opacity: 1,
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    className="container-custom mx-auto flex h-20 items-center justify-between px-6"
  >
    {/* ================= Logo ================= */}

    <Link
      href="/"
      className="group flex items-center gap-4"
    >
      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.12,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
        }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30"
      >
        <FlaskConical className="h-6 w-6 text-white" />
      </motion.div>

      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-xl font-black tracking-[0.25em] text-white"
        >
          VALENCE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-xs uppercase tracking-widest text-slate-400"
        >
          THE CHEMISTRY CLUB
        </motion.p>
      </div>
    </Link>

    {/* ================= Desktop Menu ================= */}

    <div className="hidden items-center gap-8 lg:flex">
      {navLinks.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25 + index * 0.08,
          }}
        >
          <Link
            href={item.href}
            className="group relative text-sm font-medium tracking-wide text-slate-300 transition hover:text-cyan-300"
          >
            {item.name}

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>
      ))}

      <motion.button
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.9,
        }}
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={() => setContactOpen(true)}
        className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all"
      >
        Contact
      </motion.button>
    </div>

    {/* ================= Mobile Button ================= */}

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
  </motion.nav>
</header>{/* ================= Mobile Menu ================= */}

<AnimatePresence>
  {open && (
    <motion.div
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -30,
      }}
      transition={{
        duration: 0.35,
      }}
      className="fixed left-0 right-0 top-20 z-40 border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl lg:hidden"
    >
      <div className="container-custom flex flex-col gap-6 px-6 py-8">

        {navLinks.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.06,
            }}
          >
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}

        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={() => {
            setOpen(false);
            setContactOpen(true);
          }}
          className="mt-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30"
        >
          Contact
        </motion.button>

      </div>
    </motion.div>
  )}
</AnimatePresence>
