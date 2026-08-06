"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  {
    src: "/gallery/1.jpg",
    title: "ChemQuest",
  },
  {
    src: "/gallery/2.jpg",
    title: "Journal Club",
  },
  {
    src: "/gallery/3.jpg",
    title: "Workshop",
  },
  {
    src: "/gallery/4.jpg",
    title: "Seminar",
  },
  {
    src: "/gallery/5.jpg",
    title: "Poster Session",
  },
  {
    src: "/gallery/6.jpg",
    title: "Outreach",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[0.35em]">
            Gallery
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Moments at VALENCE
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Scientific discussions, workshops, outreach programs and memorable
            moments from our journey.
          </p>
        </motion.div>

        {/* Masonry Grid */}

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">

          {gallery.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative mb-5 overflow-hidden rounded-3xl"
            >

              <Image
                src={item.src}
                alt={item.title}
                width={700}
                height={900}
                className="w-full rounded-3xl transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-6 left-6 translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
