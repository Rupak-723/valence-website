"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Mail,
  MapPin,
  ExternalLink,
  X,
} from "lucide-react";

export default function HeroContent() {
  const [contactOpen, setContactOpen] = useState(false);
  const [sessionOpen, setSessionOpen] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative flex min-h-screen items-center">

        <div className="container-custom relative z-10 mx-auto w-full px-8 py-4">

          <div className="max-w-3xl">

            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass inline-flex rounded-full border border-cyan-500/20 bg-slate-900/40 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md"
            >
              IISER Kolkata • The Chemistry Club
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-6xl font-black tracking-[0.18em] text-white md:text-8xl"
            >
              VALENCE
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-5 text-2xl font-bold text-white md:text-4xl"
            >
              Read. Discuss. Discover.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 max-w-2xl text-lg leading-9 text-slate-300"
            >
              VALENCE is the official Chemistry Club of IISER Kolkata,
              dedicated to promoting scientific discussions, chemistry
              education, research communication, outreach, innovation,
              and collaboration through seminars, workshops, ChemQuest,
              journal discussions, poster presentations, outreach
              programmes, and student-led scientific initiatives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-5"
            >

              <button
                onClick={() => setContactOpen(true)}
                className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40"
              >
                Join Community
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => setSessionOpen(true)}
                className="glass flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/40 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <BookOpen size={18} />
                Explore Sessions
              </button>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT POPUP ================= */}

<AnimatePresence>

  {contactOpen && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 backdrop-blur-md"
    >

      <div className="flex min-h-screen items-center justify-center p-6">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 40,
          }}
          transition={{
            duration: 0.35,
          }}
          className="relative my-10 w-full max-w-3xl rounded-3xl border border-cyan-500/20 bg-slate-900 p-10 shadow-2xl shadow-cyan-500/20"
        >

          {/* Close Button */}

          <button
            onClick={() => setContactOpen(false)}
            className="absolute right-6 top-6 rounded-full bg-slate-800 p-3 transition hover:bg-slate-700"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          {/* Heading */}

          <h2 className="text-4xl font-bold text-white">
            Contact VALENCE
          </h2>

          <p className="mt-3 text-slate-400">
            We'd love to hear from you.
          </p>

          {/* Contact Cards */}

          <div className="mt-10 space-y-8">

            {/* Email */}

            <div className="flex gap-5">

              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4">

                <Mail className="h-6 w-6 text-white" />

              </div>

              <div>

                <h3 className="text-xl font-semibold text-white">
                  Official Email
                </h3>

                <a
                  href="mailto:valence@iiserkol.ac.in"
                  className="mt-2 inline-block text-slate-400 transition hover:text-cyan-400"
                >
                  valence@iiserkol.ac.in
                </a>

              </div>

            </div>

            {/* Address */}

            <div className="flex gap-5">

              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4">

                <MapPin className="h-6 w-6 text-white" />

              </div>

              <div>

                <h3 className="text-xl font-semibold text-white">
                  Official Address
                </h3>

                <p className="mt-2 leading-8 text-slate-400">
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

          {/* Google Map */}

          <iframe
            src="https://www.google.com/maps?q=IISER+Kolkata&output=embed"
            loading="lazy"
            className="mt-10 h-[300px] w-full rounded-2xl border border-slate-700"
          />

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="mailto:valence@iiserkol.ac.in"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:shadow-xl hover:shadow-cyan-500/40"
            >
              Send Email
            </a>

            <a
              href="https://maps.google.com/?q=IISER+Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-cyan-500/30 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500/10"
            >
              Open Google Maps
              <ExternalLink size={18} />
            </a>

          </div>

        </motion.div>

      </div>

    </motion.div>

  )}

</AnimatePresence>

{/* ================= EXPLORE SESSIONS ================= */}

<AnimatePresence>

  {sessionOpen && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 backdrop-blur-md"
    >

      <div className="flex min-h-screen items-center justify-center p-6">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
            y: 40,
          }}
          transition={{
            duration: 0.35,
          }}
          className="relative w-full max-w-lg rounded-3xl border border-cyan-500/20 bg-slate-900 p-10 text-center shadow-2xl shadow-cyan-500/20"
        >

          {/* Close Button */}

          <button
            onClick={() => setSessionOpen(false)}
            className="absolute right-6 top-6 rounded-full bg-slate-800 p-3 transition hover:bg-slate-700"
          >
            <X className="h-5 w-5 text-white" />
          </button>

          {/* Icon */}

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500">

            <BookOpen className="h-12 w-12 text-white" />

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-bold text-white">
            Explore Sessions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            This page is currently under development.
          </p>

          <p className="mt-2 text-xl font-semibold text-cyan-400">
            Coming Soon 🚀
          </p>

          <button
            onClick={() => setSessionOpen(false)}
            className="mt-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
          >
            Close
          </button>

        </motion.div>

      </div>

    </motion.div>

  )}

</AnimatePresence>

    </>
  );
}