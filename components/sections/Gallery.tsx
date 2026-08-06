<section
  id="gallery"
  className="relative bg-slate-950 py-32 overflow-hidden"
>
  {/* Background Glow */}

  <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

  <div className="container-custom relative">

    {/* Section Heading */}

    <div className="mb-16 text-center">

      <p className="text-cyan-400 font-semibold tracking-[0.3em] uppercase">
        Gallery
      </p>

      <h2 className="mt-4 text-5xl font-black text-white">
        Moments of VALENCE
      </h2>

      <p className="mt-5 text-slate-400">
        Scientific discussions, ChemQuest, outreach programmes,
        workshops, seminars and unforgettable memories.
      </p>

    </div>

    {/* Card */}

    <motion.div
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
        duration: 0.6,
      }}
      className="relative mx-auto max-w-5xl overflow-hidden rounded-[35px] border border-white/10 bg-slate-900/70 p-20 backdrop-blur-xl"
    >

      {/* Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      {/* Icon */}

      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl shadow-cyan-500/40"
      >
        <ImageIcon className="h-14 w-14 text-white" />
      </motion.div>

      {/* Title */}

      <h3 className="mt-12 text-center text-5xl font-black text-white">
        Gallery Coming Soon
      </h3>

      {/* Description */}

      <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-9 text-slate-400">

        Photographs from ChemQuest, research talks,
        journal discussions, workshops, outreach
        programmes and all VALENCE activities will
        be showcased here very soon.

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
        className="mx-auto mt-12 inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-8 py-4 text-cyan-300"
      >

        ✨ Stay Tuned

      </motion.div>

    </motion.div>

  </div>

</section>
