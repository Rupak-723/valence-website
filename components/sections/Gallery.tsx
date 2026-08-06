"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="mx-auto max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 uppercase tracking-[0.3em] font-semibold"
        >
          Gallery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-5xl font-bold text-white"
        >
          Coming Soon
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 rounded-3xl border border-slate-700 bg-slate-900 p-12"
        >
          <div className="text-6xl">📸</div>

          <h3 className="mt-6 text-3xl font-bold text-white">
            Gallery is Under Development
          </h3>

          <p className="mt-5 text-slate-400 leading-8">
            Photos from ChemQuest, workshops, journal discussions,
            seminars, outreach activities and other VALENCE events
            will be available here soon.
          </p>

          <div className="mt-8 inline-block rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white">
            Stay Tuned
          </div>
        </motion.div>

      </div>
    </section>
  );
}
