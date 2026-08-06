"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Microscope,
  Users,
  Trophy,
} from "lucide-react";
export default function About() {
  return (
    <section
      id="about"
      className="relative bg-slate-950 py-32 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[220px]" />

      <div className="container-custom relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl text-center"
        >

          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">

            ABOUT VALENCE

          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">

            Building the Future of Scientific Exchange

          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-slate-400">

            VALENCE is the official Chemistry Club of IISER Kolkata,
            established to cultivate scientific curiosity,
            interdisciplinary collaboration, and a vibrant research
            culture among students. The club serves as a platform where
            ideas are exchanged, research is critically discussed,
            and scientific excellence is celebrated through seminars,
            workshops, outreach programmes, and
            national-level academic initiatives such as ChemQuest.

          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-slate-400">

            By bringing together students, researchers, and faculty
            members from diverse scientific disciplines, VALENCE aims
            to create an inclusive scientific community that encourages
            learning beyond the classroom while inspiring innovation,
            collaboration, and the next generation of researchers.

          </p>

        </motion.div>

        {/* Feature Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Who We Are"
            text="A student-led scientific community promoting collaboration, leadership, and intellectual growth through meaningful scientific engagement."
          />

          <FeatureCard
            icon={<Atom className="h-8 w-8" />}
            title="Our Mission"
            text="To encourage critical thinking, research communication, and scientific discussions through seminars, workshops, and invited lectures."
          />

          <FeatureCard
            icon={<Microscope className="h-8 w-8" />}
            title="Scientific Community"
            text="Connecting students from chemistry, biology, materials science, physics, mathematics, and interdisciplinary research to exchange ideas."
          />

          <FeatureCard
            icon={<Trophy className="h-8 w-8" />}
            title="ChemQuest"
            text="Our flagship National Chemistry Olympiad inspiring undergraduate students across India through theoretical, experimental, and problem-solving challenges."
          />

        </div>

      </div>
    </section>
  );
}
function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group rounded-3xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10"
    >

      <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4 text-white transition-transform duration-300 group-hover:scale-110">

        {icon}

      </div>

      <h3 className="mt-7 text-2xl font-bold text-white">

        {title}

      </h3>

      <p className="mt-5 leading-8 text-slate-400">

        {text}

      </p>

    </motion.div>
  );
}