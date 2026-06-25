import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

/**
 * TeamCard
 * --------
 * A single team-member card: dashed circular avatar frame, name, role,
 * bio, and social links. Built mobile-first with Tailwind, animated with
 * Framer Motion.
 *
 * Props
 * ----------------------------------------------------------------------
 * image      : string  — avatar image src. Falls back to a neutral
 *                        placeholder (initials) if not provided.
 * name       : string  — full name, e.g. "Carla Press"
 * role       : string  — job title, e.g. "App Developer"
 * bio        : string  — short description
 * socials    : array   — [{ platform: "facebook" | "instagram" | "twitter" | "youtube", href: string }]
 * index      : number  — used to stagger entrance animation when rendered in a grid
 */

const SOCIAL_ICON_MAP = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
};

const getInitials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function TeamCard({
  image,
  name = "Full Name",
  role = "Role",
  bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.",
  socials = [
    { platform: "facebook", href: "#" },
    { platform: "instagram", href: "#" },
    { platform: "twitter", href: "#" },
    { platform: "youtube", href: "#" },
  ],
  index = 0,
}) {
  return (
    <motion.article
      className="group relative flex w-full flex-col items-center rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:px-8 sm:py-10"
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Avatar */}
      <div className="relative mb-6 h-32 w-32 shrink-0 sm:h-36 sm:w-36">
        {/* dashed rotating ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
        {/* avatar image / placeholder, inset slightly from the ring */}
        <div className="absolute inset-[6px] overflow-hidden rounded-full bg-slate-100 ring-4 ring-white">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-100 to-slate-100 text-2xl font-semibold text-indigo-500">
              {getInitials(name)}
            </div>
          )}
        </div>
      </div>

      {/* Name & role */}
      <h3 className="text-center text-lg font-bold uppercase tracking-wide text-slate-900 sm:text-xl">
        {name}
      </h3>
      <p className="mt-1 text-center text-xs font-medium uppercase tracking-widest text-slate-500 sm:text-sm">
        {role}
      </p>

      {/* Bio */}
      <p className="mt-4 max-w-xs text-center text-sm leading-relaxed text-slate-500">
        {bio}
      </p>

      {/* Socials */}
      <div className="mt-6 flex items-center gap-3 sm:gap-4">
        {socials.map(({ platform, href }, i) => {
          const Icon = SOCIAL_ICON_MAP[platform];
          if (!Icon) return null;
          return (
            <React.Fragment key={platform}>
              {i !== 0 && <span className="h-4 w-px bg-slate-200" aria-hidden="true" />}
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-colors duration-200 hover:bg-indigo-500 sm:h-9 sm:w-9"
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </motion.a>
            </React.Fragment>
          );
        })}
      </div>
    </motion.article>
  );
}
