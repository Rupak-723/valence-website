"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Globe,
  Monitor,
  Building2,
  Users,
  ArrowRight,
  X,
} from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "National Level",
    description:
      "Open to undergraduate teams from IITs, IISERs, NITs, Central and State Universities.",
  },
  {
    icon: Monitor,
    title: "Online Preliminary",
    description:
      "A nationwide qualifying round featuring conceptual and problem-solving questions.",
  },
  {
    icon: Building2,
    title: "Grand Finale",
    description:
      "Hosted at IISER Kolkata featuring theory, experimental and presentation rounds.",
  },
  {
    icon: Users,
    title: "Team Competition",
    description:
      "Teams of up to three undergraduate students compete together.",
  },
];

export default function ChemQuest() {

  const [showInfo, setShowInfo] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <section
      id="chemquest"
      className="relative overflow-hidden bg-slate-950 py-36"
    >

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[220px]" />

      </div>

      <div className="container-custom relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-4xl text-center"
        >

          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            Flagship Event
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            ChemQuest
          </h2>

          <p className="mt-4 text-xl text-cyan-400">
            A National Chemistry Olympiad
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Bringing together the brightest undergraduate chemistry students
            across India through scientific competition, collaboration,
            innovation and excellence.
          </p>

        </motion.div>

        {/* Hero */}

        <div className="mt-24 grid items-center gap-16 lg:grid-cols-2">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-[3rem] bg-cyan-500/20 blur-3xl" />

              <div className="group relative h-80 w-80 overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-white shadow-2xl shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:border-cyan-400/40">

                <Image
                  src="/images/ChemQuest.png"
                  alt="ChemQuest Logo"
                  fill
                  priority
                  className="object-cover"
                />

              </div>

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">

              <Trophy className="h-5 w-5 text-cyan-400" />

              <span className="font-medium text-cyan-300">
                VALENCE Flagship Event
              </span>

            </div>

            <h3 className="mt-8 text-4xl font-bold leading-tight text-white">
              India's Emerging Undergraduate Chemistry Olympiad
            </h3>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              ChemQuest is VALENCE's flagship national chemistry competition,
              bringing together undergraduate students from universities
              across India to celebrate scientific excellence, teamwork,
              innovation and research-oriented problem solving.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

                <p className="text-3xl font-bold text-cyan-400">
                  National
                </p>

                <p className="mt-2 text-slate-400">
                  Undergraduate Competition
                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">

                <p className="text-3xl font-bold text-cyan-400">
                  2 Rounds
                </p>

                <p className="mt-2 text-slate-400">
                  Online Preliminary & Grand Finale
                </p>

              </div>

            </div>
                        {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <button
                onClick={() => setShowInfo(true)}
                className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white transition-all hover:shadow-xl hover:shadow-cyan-500/30"
              >

                Learn More

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </button>

              <button
                onClick={() => setShowRegister(true)}
                className="rounded-full border border-cyan-500/30 bg-slate-900 px-8 py-4 font-semibold text-cyan-300 transition hover:border-cyan-400 hover:bg-slate-800"
              >

                Register

              </button>

            </div>

          </motion.div>

        </div>

        {/* Highlights */}

        <div className="mt-28 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {highlights.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
              >

                <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4">

                  <Icon className="h-7 w-7 text-white" />

                </div>

                <h4 className="mt-6 text-2xl font-bold text-white">

                  {item.title}

                </h4>

                <p className="mt-4 leading-7 text-slate-400">

                  {item.description}

                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Learn More Modal */}

        <AnimatePresence>

          {showInfo && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
            >

              <motion.div
                initial={{ scale: .9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .9, opacity: 0 }}
                className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-950 p-10"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-4xl font-bold text-white">

                      ChemQuest

                    </h2>

                    <p className="mt-2 text-cyan-400">

                      A National Chemistry Olympiad

                    </p>

                  </div>

                  <button
                    onClick={() => setShowInfo(false)}
                    className="rounded-full bg-slate-800 p-3 transition hover:bg-slate-700"
                  >

                    <X className="h-6 w-6 text-white" />

                  </button>

                </div>

                <p className="mt-8 text-lg leading-8 text-slate-300">

                  ChemQuest is the flagship annual event of VALENCE, the Chemistry Club of IISER Kolkata. It is designed to bring together talented undergraduate students from across India through a prestigious national chemistry competition that promotes scientific excellence, analytical thinking, teamwork, and innovation.

                </p>

                <div className="mt-10 grid gap-8 md:grid-cols-2">

                  <div>

                    <h3 className="text-2xl font-bold text-cyan-400">

                      Objectives

                    </h3>

                    <ul className="mt-5 space-y-3 text-slate-300">

                      <li>• Promote excellence in Chemistry.</li>
                      <li>• Encourage scientific reasoning.</li>
                      <li>• Foster interdisciplinary learning.</li>
                      <li>• Build a nationwide chemistry community.</li>
                      <li>• Inspire future researchers.</li>

                    </ul>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-cyan-400">

                      Eligibility

                    </h3>

                    <ul className="mt-5 space-y-3 text-slate-300">

                      <li>• Undergraduate Students</li>
                      <li>• IITs</li>
                      <li>• IISERs</li>
                      <li>• NITs</li>
                      <li>• Central & State Universities</li>
                      <li>• Team Size: Up to 3 Students</li>

                    </ul>

                  </div>

                </div>
                                <div className="mt-12">

                  <h3 className="text-2xl font-bold text-cyan-400">

                    Competition Format

                  </h3>

                  <div className="mt-6 space-y-6">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                      <h4 className="text-xl font-semibold text-white">

                        Round 1 • Online Preliminary

                      </h4>

                      <p className="mt-3 leading-7 text-slate-300">

                        A nationwide online qualifying examination consisting
                        of conceptual and analytical questions from Organic,
                        Inorganic, Physical, Analytical and interdisciplinary
                        Chemistry.

                      </p>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                      <h4 className="text-xl font-semibold text-white">

                        Round 2 • Grand Finale at IISER Kolkata

                      </h4>

                      <p className="mt-3 leading-7 text-slate-300">

                        Qualified teams will compete at IISER Kolkata through
                        theory challenges, laboratory-based problem solving,
                        chemistry quiz rounds, scientific presentations and
                        surprise challenge events.

                      </p>

                    </div>

                  </div>

                </div>

                <div className="mt-12">

                  <h3 className="text-2xl font-bold text-cyan-400">

                    Coming Soon

                  </h3>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">

                    {[
                      "Registration Portal",
                      "Competition Rules",
                      "Important Dates",
                      "Prize Details",
                      "Sponsors & Partners",
                      "Sample Questions",
                      "Official Brochure",
                      "Frequently Asked Questions",
                    ].map((item) => (

                      <div
                        key={item}
                        className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-slate-300"
                      >
                        {item}
                      </div>

                    ))}

                  </div>

                </div>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

        {/* Register Popup */}

        <AnimatePresence>

          {showRegister && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            >

              <motion.div
                initial={{ scale: .9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .9, opacity: 0 }}
                className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-950 p-10 text-center"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500">

                  <Trophy className="h-10 w-10 text-white" />

                </div>

                <h2 className="mt-8 text-3xl font-bold text-white">

                  Registration Opens Soon

                </h2>

                <p className="mt-6 leading-8 text-slate-300">

                  Registration for ChemQuest has not yet started.

                  Stay connected with VALENCE for announcements regarding
                  registration dates, eligibility, competition rules,
                  schedules and other exciting updates.

                </p>

                <button
                  onClick={() => setShowRegister(false)}
                  className="mt-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:scale-105"
                >

                  Close

                </button>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>

  );

}