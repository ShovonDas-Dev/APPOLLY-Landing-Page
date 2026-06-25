import React from "react";
import TeamCard from "./TeamCard";

/**
 * TeamSection
 * -----------
 * Responsive grid of TeamCard components:
 *  - 1 column on mobile
 *  - 2 columns on tablet
 *  - 3 columns on desktop / large screens
 *
 * Replace `members` with real data (and pass real `image` URLs) when ready.
 * Leaving `image` empty/undefined on any member shows an initials placeholder.
 */

const members = [
  {
    name: "Carla Press",
    role: "App Developer",
    image: "", // e.g. "/images/carla.jpg"
    socials: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "twitter", href: "#" },
      { platform: "youtube", href: "#" },
    ],
  },
  {
    name: "Craig Gouse",
    role: "UI/UX Designer",
    image: "",
    socials: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "twitter", href: "#" },
      { platform: "youtube", href: "#" },
    ],
  },
  {
    name: "Jocelyn Septimus",
    role: "Website Developer",
    image: "",
    socials: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "twitter", href: "#" },
      { platform: "youtube", href: "#" },
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="bg-slate-50 px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {members.map((member, i) => (
            <TeamCard key={member.name} index={i} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
