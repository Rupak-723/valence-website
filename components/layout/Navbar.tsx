<motion.nav
  initial={{
    y: -100,
    opacity: 0,
  }}
  animate={{
    y: 0,
    opacity: 1,
  }}
  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10"
      : "bg-transparent"
  }`}
>
  <div className="container-custom mx-auto flex h-20 items-center justify-between px-6">

    {/* Logo */}

    <Link
      href="/"
      className="group flex items-center gap-4"
    >

      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30"
      >

        <FlaskConical className="h-6 w-6 text-white" />

      </motion.div>

      <div>

        <h1 className="text-xl font-black tracking-[0.25em] text-white">
          VALENCE
        </h1>

        <p className="text-xs uppercase tracking-widest text-slate-400">
          THE CHEMISTRY CLUB
        </p>

      </div>

    </Link>

    {/* Desktop Navigation */}

    <div className="hidden items-center gap-8 lg:flex">

      {navLinks.map((item, index) => (

        <motion.div
          key={item.name}
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.08 + 0.3,
          }}
        >

          <Link
            href={item.href}
            className="group relative text-sm font-medium tracking-wide text-slate-300 transition-colors hover:text-cyan-300"
          >
            {item.name}

            <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </Link>

        </motion.div>

      ))}

      <motion.button
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.9,
        }}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setContactOpen(true)}
        className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25"
      >
        Contact
      </motion.button>

    </div>

    {/* Mobile Button */}

    <button
      onClick={() => setOpen(!open)}
      className="rounded-lg p-2 transition hover:bg-slate-800 lg:hidden"
    >
      {open ? (
        <X className="h-6 w-6 text-white" />
      ) : (
        <Menu className="h-6 w-6 text-white" />
      )}
    </button>

  </div>
</motion.nav>
