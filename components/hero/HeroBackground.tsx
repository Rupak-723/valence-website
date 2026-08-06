"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Aurora */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.18), transparent 45%), #020617",

            "radial-gradient(circle at 75% 20%, rgba(59,130,246,0.22), transparent 45%), radial-gradient(circle at 25% 80%, rgba(6,182,212,0.18), transparent 45%), #020617",

            "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(6,182,212,0.18), transparent 45%), #020617",
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
    </div>
  );
}