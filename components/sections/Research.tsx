"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Dna,
  FlaskConical,
  Microscope,
} from "lucide-react";

const researchAreas = [
  {
    title: "Organic Chemistry",
    description:
      "Reaction mechanisms, synthesis, medicinal chemistry and molecular design.",
    icon: FlaskConical,
  },
  {
    title: "Materials Science",
    description:
      "Nanomaterials, energy materials, semiconductors and advanced functional materials.",
    icon: Atom,
  },
  {
    title: "Biochemistry",
    description:
      "Proteins, enzymes, biomolecular interactions and chemical biology.",
    icon: Dna,
  },
  {
    title: "Catalysis",
    description:
      "Homogeneous, heterogeneous and electrocatalysis for sustainable chemistry.",
    icon: Microscope,
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="py-32 bg-slate-950"
    >
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Research Areas
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            Exploring Science Without Boundaries
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-8">
            VALENCE brings together students from diverse scientific
            backgrounds to discuss breakthrough discoveries published in
            internationally recognized journals.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {researchAreas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all"
            >
              <div className="inline-flex rounded-2xl bg-blue-600/10 p-4">
                <item.icon className="h-8 w-8 text-blue-400" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {item.description}
              </p>

              <div className="mt-8 h-1 w-0 rounded-full bg-blue-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}