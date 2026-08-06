"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-cyan-400"
        >
          Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-5xl font-bold text-white md:text-6xl"
        >
          Every Moment Has a Story.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400"
        >
          Workshops, ChemQuest, Journal Discussions, Outreach Programmes,
          Scientific Talks and memorable moments from VALENCE will soon be
          showcased here.
        </motion.p>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ y: -5 }}
          className="mx-auto mt-16 max-w-2xl rounded-3xl border border-white/10 bg-slate-900/70 p-12 backdrop-blur-xl"
        >
          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600"
          >
            <Camera className="h-12 w-12 text-white" />
          </motion.div>

          <h3 className="mt-8 text-3xl font-bold text-white">
            Gallery Coming Soon
          </h3>

          <p className="mt-5 text-slate-400 leading-8">
            Our events are just getting started.
            Photos and highlights from seminars, competitions,
            workshops, laboratory visits and club activities
            will be available here very soon.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-cyan-300">
            <Sparkles className="h-5 w-5" />
            Updates Coming Soon
          </div>
        </motion.div>

      </div>
    </section>
  );
}
