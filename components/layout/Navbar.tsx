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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <>
  {/* ================= HEADER ================= */}

<header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">

  <motion.nav
    initial={{
      opacity: 0,
      y: -80,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    className={`mx-auto flex h-20 max-w-7xl items-center justify-between rounded-2xl border px-8 transition-all duration-500 ${
      scrolled
        ? "border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-2xl shadow-black/20"
        : "border-transparent bg-transparent"
    }`}
  >

    {/* ================= Logo ================= */}

    <Link
      href="/"
      className="group flex items-center gap-4"
    >

      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.15,
          rotate: 18,
        }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/40"
      >

        <FlaskConical className="h-6 w-6 text-white" />

      </motion.div>

      <div>

        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
          }}
          className="text-xl font-black tracking-[0.25em] text-white"
        >
          VALENCE
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.35,
          }}
          className="text-xs uppercase tracking-[0.28em] text-slate-400"
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
            y: -20,
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
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          delay: 0.9,
          duration: 5,
          repeat: Infinity,
        }}
        whileHover={{
          scale: 1.06,
          y: -2,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={() => setContactOpen(true)}
        className="rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_200%] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30"
      >

        Contact

      </motion.button>

    </div>

    {/* ================= Mobile Button ================= */}

    <motion.button
      whileHover={{
        scale: 1.08,
        rotate: 5,
      }}
      whileTap={{
        scale: 0.92,
      }}
      onClick={() => setOpen(!open)}
      className="rounded-xl p-2 transition hover:bg-slate-800 lg:hidden"
    >

      {open ? (
        <X className="h-6 w-6 text-white" />
      ) : (
        <Menu className="h-6 w-6 text-white" />
      )}

    </motion.button>

  </motion.nav>

</header>
    {/* ================= Mobile Menu ================= */}

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
      className="fixed left-4 right-4 top-24 z-40 rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-3xl shadow-2xl shadow-black/30 lg:hidden"
    >
      <div className="flex flex-col p-8">

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
              delay: index * 0.08,
            }}
          >
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium text-slate-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              {item.name}

              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  x: 5,
                }}
              >
                →
              </motion.span>
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
            delay: 0.55,
          }}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={() => {
            setOpen(false);
            setContactOpen(true);
          }}
          className="mt-6 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_200%] py-4 font-semibold text-white shadow-lg shadow-cyan-500/30"
        >
          Contact
        </motion.button>

      </div>
    </motion.div>
  )}
</AnimatePresence>
    {/* ================= Contact Popup ================= */}

<AnimatePresence>
  {contactOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-xl p-6"
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
          boxShadow: [
            "0 0 30px rgba(6,182,212,0.15)",
            "0 0 70px rgba(6,182,212,0.35)",
            "0 0 30px rgba(6,182,212,0.15)",
          ],
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        transition={{
          duration: 0.35,
          boxShadow: {
            duration: 3,
            repeat: Infinity,
          },
        }}
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90"
      >

        {/* Background Glow */}

        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative p-10">

          {/* Header */}

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-4xl font-black text-white">

                Contact VALENCE

              </h2>

              <p className="mt-2 text-slate-400">

                We'd love to hear from you.

              </p>

            </div>

            <motion.button
              whileHover={{
                rotate: 90,
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setContactOpen(false)}
              className="rounded-full bg-slate-800 p-3"
            >

              <X className="h-5 w-5 text-white" />

            </motion.button>

          </div>

          {/* Cards */}

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {/* Email */}

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500">

                <Mail className="h-7 w-7 text-white" />

              </div>

              <h3 className="text-xl font-semibold text-white">

                Email

              </h3>

              <a
                href="mailto:valence@iiserkol.ac.in"
                className="mt-3 block text-slate-300 hover:text-cyan-400"
              >

                valence@iiserkol.ac.in

              </a>

            </motion.div>

            {/* Address */}

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500">

                <MapPin className="h-7 w-7 text-white" />

              </div>

              <h3 className="text-xl font-semibold text-white">

                Office

              </h3>

              <p className="mt-3 leading-7 text-slate-300">

                Department of Chemical Sciences

                <br />

                IISER Kolkata

                <br />

                Mohanpur, Nadia

                <br />

                West Bengal – 741246

                <br />

                India

              </p>

            </motion.div>

          </div>

          {/* Google Map */}

          <iframe
            src="https://www.google.com/maps?q=IISER+Kolkata&output=embed"
            loading="lazy"
            className="mt-8 h-72 w-full rounded-2xl border border-white/10"
          />

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="mailto:valence@iiserkol.ac.in"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold text-white"
            >

              Send Email

            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="https://maps.google.com/?q=IISER+Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-cyan-500/40 px-8 py-3 font-semibold text-cyan-300 hover:bg-cyan-500/10"
            >

              Open Google Maps

              <ExternalLink size={18} />

            </motion.a>

          </div>

        </div>

      </motion.div>

    </motion.div>
  )}
</AnimatePresence>
        </>
  );
}
