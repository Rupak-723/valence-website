"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Mic2,
  FlaskConical,
  BrainCircuit,
  ScrollText,
  Palette,
  X,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    title: "Student Talks",

    icon: GraduationCap,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Faculty Talks",
    
    icon: BookOpen,
    color: "from-cyan-600 to-sky-500",
  },
  {
    title: "Guest Lectures",
    
    icon: Mic2,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Workshops",
    
    icon: FlaskConical,
    color: "from-blue-700 to-cyan-600",
  },
  {
    title: "ChemQuiz",
    
    icon: BrainCircuit,
    color: "from-cyan-600 to-blue-500",
  },
  {
    title: "Poster Presentation",
    
    icon: ScrollText,
    color: "from-sky-600 to-cyan-500",
  },
  
  {
    title: "ChemArt",
    
    icon: Palette,
    color: "from-cyan-500 to-blue-600",
  },
];

export default function Activities() {
  const [selected, setSelected] = useState<
    (typeof activities)[0] | null
  >(null);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section
      id="activities"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

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

          <p className="font-semibold uppercase tracking-[0.4em] text-blue-400">

            Activities

          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">

            Explore. Learn. Innovate.

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">

            VALENCE offers a wide range of academic, professional, and creative
            activities designed to foster scientific curiosity, collaboration,
            and innovation among chemistry enthusiasts.

          </p>

        </motion.div>
                {/* Activity Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {activities.map((activity, index) => {

            const Icon = activity.icon;

            return (

              <motion.button
                key={activity.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => setSelected(activity)}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-left backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
              >

                {/* Gradient Glow */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 transition duration-500 group-hover:opacity-10`}
                />

                {/* Top Border */}

                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${activity.color}`}
                />

                {/* Icon */}

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${activity.color} p-4 shadow-lg`}
                >

                  <Icon className="h-8 w-8 text-white" />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {activity.title}

                </h3>

                {/* Subtitle */}

                {activity.subtitle && (
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {activity.subtitle}
                  </p>
                )}

                {/* Bottom */}

                <div className="mt-10 flex items-center justify-between">

                  <span className="text-sm font-medium text-cyan-400">

                    Explore

                  </span>

                  <ArrowRight
                    className="transition duration-300 group-hover:translate-x-2"
                    size={18}
                  />

                </div>

              </motion.button>

            );

          })}

        </div>
                {/* Modal */}

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900 p-10 text-center shadow-2xl shadow-cyan-500/20"
              >
                {/* Close Button */}

                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-5 top-5 rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                >
                  <X size={20} />
                </button>

                {/* Icon */}

                <div
                  className={`mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${selected.color}`}
                >
                  <selected.icon className="h-12 w-12 text-white" />
                </div>

                {/* Title */}

                <h2 className="mt-8 text-3xl font-bold text-white">
                  {selected.title}
                </h2>

                {/* Coming Soon */}

                <p className="mt-4 text-lg font-medium text-cyan-400">
                  This page is currently under development.
                  Coming Soon
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
