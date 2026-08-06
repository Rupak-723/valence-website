"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  Wallet,
  Laptop,
  CalendarDays,
  Palette,
  ArrowRight,
  Mail,
  Phone,
  Link2 as Linkedin,
  Globe,
  X,
} from "lucide-react";

type Member = {
  name: string;
  role: string;
  photo: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  website?: string;
};

type Department = {
  title: string;
  description: string;
  color: string;
  icon: any;
  members: Member[];
};

const teams: Department[] = [
  {
    title: "Secretary",
    description:
      "Leading VALENCE and coordinating all club activities.",
    color: "from-yellow-500 to-orange-500",
    icon: Crown,
    members: [
      {
        name: "Rupak Sarkar",
        role: "Secretary",
        photo: "/team/secretary.jpeg",
        email: "rs23ms006@iiserkol.ac.in",
        phone: "+91 9091754723",
        linkedin: "#",
        website: "#",
      },
    ],
  },

  {
    title: "Treasurer",
    description:
      "Managing finance, sponsorship and budgeting.",
    color: "from-green-500 to-emerald-500",
    icon: Wallet,
    members: [
      {
        name: "Member One",
        role: "Treasurer",
        photo: "/team/member1.jpg",
        email: "",
        phone: "",
        linkedin: "#",
        website: "#",
      },
      {
        name: "Member Two",
        role: "Treasurer",
        photo: "/team/member2.jpg",
        email: "",
        phone: "",
        linkedin: "#",
        website: "#",
      },
    ],
  },

  {
    title: "Technical Team",
    description:
      "Website development, registrations and digital infrastructure.",
    color: "from-blue-600 to-cyan-500",
    icon: Laptop,
    members: [
      {
        name: "Developer 1",
        role: "Frontend",
        photo: "/team/dev1.jpg",
      },
      {
        name: "Developer 2",
        role: "Backend",
        photo: "/team/dev2.jpg",
      },
      {
        name: "Developer 3",
        role: "UI Designer",
        photo: "/team/dev3.jpg",
      },
      {
        name: "Developer 4",
        role: "Developer",
        photo: "/team/dev4.jpg",
      },
    ],
  },

  {
    title: "Event Coordination",
    description:
      "Planning and organizing scientific events.",
    color: "from-purple-600 to-indigo-500",
    icon: CalendarDays,
    members: [
      {
        name: "Coordinator 1",
        role: "Coordinator",
        photo: "/team/event1.jpg",
      },
      {
        name: "Coordinator 2",
        role: "Coordinator",
        photo: "/team/event2.jpg",
      },
      {
        name: "Coordinator 3",
        role: "Coordinator",
        photo: "/team/event3.jpg",
      },
      {
        name: "Coordinator 4",
        role: "Coordinator",
        photo: "/team/event4.jpg",
      },
    ],
  },

  {
    title: "Design & Media",
    description:
      "Graphics, branding, photography and social media.",
    color: "from-pink-500 to-rose-500",
    icon: Palette,
    members: [
      {
        name: "Designer 1",
        role: "Graphic Designer",
        photo: "/team/design1.jpg",
      },
      {
        name: "Designer 2",
        role: "Content Creator",
        photo: "/team/design2.jpg",
      },
      {
        name: "Designer 3",
        role: "Photographer",
        photo: "/team/design3.jpg",
      },
      {
        name: "Designer 4",
        role: "Media Manager",
        photo: "/team/design4.jpg",
      },
    ],
  },
];

export default function Team() {
  const [selectedTeam, setSelectedTeam] =
    useState<Department | null>(null);

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[220px]" />

      </div>

      <div className="container-custom relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >

          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            Our Team
          </p>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Meet the Core Committee
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            A passionate group of students committed to building
            a vibrant chemistry community through research,
            innovation, outreach, and scientific collaboration.
          </p>

        </motion.div>

        {/* Team Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {teams.map((team, index) => {
  const Icon = team.icon;

  return (
    <motion.button
      key={team.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={() => setSelectedTeam(team)}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-left backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Hover Glow */}

      <div
        className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-0 transition duration-500 group-hover:opacity-10`}
      />

      {/* Top Border */}

      <div
        className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${team.color}`}
      />

      {/* Icon */}

      <div
        className={`inline-flex rounded-2xl bg-gradient-to-br ${team.color} p-4 shadow-lg`}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold text-white">
        {team.title}
      </h3>

      {/* Description */}

      <p className="mt-4 leading-7 text-slate-400">
        {team.description}
      </p>

      {/* Members */}

      <div className="mt-8 flex items-center justify-between">

        <div>

          <p className="text-3xl font-bold text-cyan-400">
            {team.members.length}
          </p>

          <p className="text-sm text-slate-500">
            Member{team.members.length > 1 ? "s" : ""}
          </p>

        </div>

        <div className="flex items-center gap-2 text-cyan-400 font-medium">

          Explore

          <ArrowRight
            size={18}
            className="transition duration-300 group-hover:translate-x-2"
          />

        </div>

      </div>

    </motion.button>
  );
})}

</div>

{/* ===========================
        TEAM MODAL
=========================== */}

<AnimatePresence>

  {selectedTeam && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
    >

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
        transition={{
          duration: 0.25,
        }}
        className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-950 p-10"
      >

        {/* Modal Header */}

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-4xl font-bold text-white">
              {selectedTeam.title}
            </h2>

            <p className="mt-3 text-lg text-cyan-400">
              {selectedTeam.description}
            </p>

          </div>

          <button
            onClick={() => setSelectedTeam(null)}
            className="rounded-full bg-slate-800 p-3 transition hover:bg-slate-700"
          >
            <X className="h-6 w-6 text-white" />
          </button>

        </div>

        {/* Members */}

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {selectedTeam.members.map((member, index) => (

          <motion.div
            key={member.name + index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            {/* Photo */}

            <div className="relative h-72 w-full overflow-hidden">

              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

            </div>

            {/* Info */}

            <div className="p-6">

              <h3 className="text-2xl font-bold text-white">
                {member.name}
              </h3>

              <p className="mt-2 font-medium text-cyan-400">
                {member.role}
              </p>

              <div className="mt-6 space-y-4">

                {member.email && (
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-cyan-400" />
                    <span className="text-sm text-slate-300 break-all">
                      {member.email}
                    </span>
                  </div>
                )}

                {member.phone && (
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-cyan-400" />
                    <span className="text-sm text-slate-300">
                      {member.phone}
                    </span>
                  </div>
                )}

              </div>

              <div className="mt-8 flex items-center gap-4">

                {member.linkedin && member.linkedin !== "#" && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-blue-600"
                  >
                    <Linkedin size={18} />
                  </a>
                )}

                {member.website && member.website !== "#" && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-cyan-600"
                  >
                    <Globe size={18} />
                  </a>
                )}

              </div>

            </div>

          </motion.div>

        ))}

        </div>

      </motion.div>

    </motion.div>

  )}

</AnimatePresence>

      </div>

    </section>

  );

}