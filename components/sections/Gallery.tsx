"use client";

import { motion } from "framer-motion";
import {
  ImageIcon,
  Lock,
  Sparkles,
} from "lucide-react";

const gallery = [
  1,2,3,
  4,5,6,
  7,8,9,
];

export default function Gallery() {

  return (

<section
id="gallery"
className="relative overflow-hidden bg-slate-950 py-32"
>

{/* ================= Background ================= */}

<div className="absolute inset-0">

<div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

<div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[150px]" />

<div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />

</div>

<div className="container-custom relative">

{/* Heading */}

<motion.div

initial={{
opacity:0,
y:30,
}}

whileInView={{
opacity:1,
y:0,
}}

viewport={{
once:true,
}}

transition={{
duration:.7,
}}

className="mx-auto max-w-3xl text-center"
>

<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2">

<Sparkles className="h-4 w-4 text-cyan-300"/>

<span className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">

Gallery

</span>

</div>

<h2 className="mt-8 text-5xl font-black text-white md:text-6xl">

Moments of

<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

{" "}VALENCE

</span>

</h2>

<p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-400">

Scientific discussions,
ChemQuest,
seminars,
research talks,
outreach programmes,
poster sessions and every memorable moment
will be showcased here.

</p>

</motion.div>
        {/* ================= Gallery Grid ================= */}

      <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {gallery.map((item, index) => (

          <motion.div
            key={item}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -12,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl"
          >

            {/* Glow */}

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Fake Image */}

            <div className="relative h-72 overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />

              {/* Decorative blobs */}

              <div className="absolute left-6 top-8 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl" />

              <div className="absolute right-6 bottom-8 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />

              {/* Blur */}

              <div className="absolute inset-0 backdrop-blur-md" />

              {/* Floating icon */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute inset-0 flex items-center justify-center"
              >

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl shadow-cyan-500/30">

                  <ImageIcon className="h-10 w-10 text-white" />

                </div>

              </motion.div>

              {/* Lock */}

              <div className="absolute right-5 top-5">

                <div className="rounded-full border border-white/10 bg-slate-900/80 p-3 backdrop-blur-xl">

                  <Lock className="h-5 w-5 text-cyan-300" />

                </div>

              </div>

            </div>

            {/* Bottom */}

            <div className="p-7">

              <h3 className="text-xl font-bold text-white">

                Event Photos

              </h3>

              <p className="mt-3 leading-7 text-slate-400">

                Photographs from seminars,
                ChemQuest,
                outreach programmes,
                workshops,
                journal discussions,
                laboratory visits and student activities.

              </p>

            </div>

          </motion.div>

        ))}

      </div>
        {/* ================= Coming Soon Showcase ================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative mt-24 overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/70 p-16 backdrop-blur-2xl"
      >

        {/* Background Glow */}

        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="relative flex flex-col items-center text-center">

          {/* Floating Icon */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-cyan-500/40"
          >

            <ImageIcon className="h-14 w-14 text-white" />

          </motion.div>

          <h3 className="mt-10 text-5xl font-black text-white">

            Gallery Coming Soon

          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">

            We are documenting every seminar,
            ChemQuest,
            outreach programme,
            journal discussion,
            research talk,
            workshop,
            laboratory visit and memorable event.

            <br />
            <br />

            The complete VALENCE Gallery will be available soon.

          </p>

          {/* Badge */}

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-10 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-8 py-4"
          >

            <span className="font-semibold tracking-wide text-cyan-300">

              ✨ Stay Tuned — Exciting Moments Ahead

            </span>

          </motion.div>

        </div>

      </motion.div>
        {/* ================= Floating Chemistry Particles ================= */}

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            width: `${6 + (i % 4) * 4}px`,
            height: `${6 + (i % 4) * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
</section>

  );
}
