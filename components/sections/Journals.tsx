"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

export default function Journals() {
  return (
    <section
      id="journals"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="container-custom relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl"
        >
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-12 text-center backdrop-blur-xl">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
              <BookOpen className="h-12 w-12 text-white" />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-white">
              This page is currently under development.
            </h2>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="font-medium text-cyan-400">
                Coming Soon
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}