/**
 * TeamSlider.jsx — Fully Responsive
 * ─────────────────────────────────────────────────────────────────
 * Mobile  : single card, no ghost cards, swipe-friendly tap nav
 * Tablet  : single card + ghost cards peek in (smaller)
 * Desktop : full 3-card layout with side ghosts
 *
 * Stack: React 18 · Tailwind CSS · Framer Motion
 * Install: npm install framer-motion
 * ─────────────────────────────────────────────────────────────────
 */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── DATA ──────────────────────────────────────────────────────────
// Edit this array to add/remove team members.
const TEAM = [
  {
    id: 1,
    name: "Ann Lubin",
    role: "Co-Founder",
    avatar: "https://i.pravatar.cc/150?img=47",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor.",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Head of Design",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Porta lorem mollis aliquam ut porttitor leo a diam. Amet justo donec enim diam vulputate ut pharetra. Neque laoreet suspendisse interdum consectetur libero.",
  },
  {
    id: 3,
    name: "Sofia Patel",
    role: "Lead Engineer",
    avatar: "https://i.pravatar.cc/150?img=25",
    bio: "Volutpat blandit aliquam etiam erat velit scelerisque. Neque gravida in fermentum et. Suspendisse ultrices gravida risus commodo viverra maecenas accumsan.",
  },
  {
    id: 4,
    name: "Marcus Lee",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=33",
    bio: "Pellentesque nec nam aliquam sem. Odio aenean sed adipiscing diam donec adipiscing tristique. In hac habitasse platea dictumst vestibulum rhoncus est.",
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    role: "Growth Lead",
    avatar: "https://i.pravatar.cc/150?img=56",
    bio: "Duis ultricies lacus sed turpis tincidunt id aliquet risus. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Sit amet mattis vulputate.",
  },
];

// ─── ANIMATION VARIANTS ────────────────────────────────────────────
// `direction`: +1 = sliding right → left, -1 = sliding left → right
const CARD_VARIANTS = {
  // New card starts off-screen (right or left depending on direction)
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9,
  }),
  // Card is fully visible in the centre
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 10,
    transition: { duration: 0.45, ease: "easeInOut" },
  },
  // Old card exits off-screen (opposite direction)
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.35, ease: "easeInOut" },
  }),
};

// ─── CUSTOM HOOK: useWindowWidth ────────────────────────────────────
// Tracks browser width so we can show/hide ghost cards responsively.
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return width;
}

// ─── CUSTOM HOOK: useSwipe ─────────────────────────────────────────
// Detects left/right swipe gestures on touch devices.
// Returns event handlers to spread onto the container div.
function useSwipe(onSwipeLeft, onSwipeRight) {
  const startX = { current: null };

  return {
    onTouchStart: (e) => {
      startX.current = e.touches[0].clientX;
    },
    onTouchEnd: (e) => {
      if (startX.current === null) return;
      const diff = startX.current - e.changedTouches[0].clientX;

      // Only register swipe if finger moved more than 50px
      if (Math.abs(diff) > 50) {
        diff > 0 ? onSwipeLeft() : onSwipeRight();
      }
      startX.current = null;
    },
  };
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────
export default function TeamSlider() {
  const [current, setCurrent] = useState(0);    // active card index
  const [direction, setDirection] = useState(1); // animation direction
  const [paused, setPaused] = useState(false);   // pause auto-play on hover

  const total = TEAM.length;
  const windowWidth = useWindowWidth();

  // Breakpoints (match Tailwind defaults)
  const isMobile = windowWidth < 640;   // < sm
  const isTablet = windowWidth < 1024;  // < lg  (but >= sm)

  // ── Navigate to any slide index (wraps around) ──────────────────
  const goTo = useCallback(
    (index) => {
      const next = (index + total) % total;
      // If wrapping from last → first, treat as going forward
      if (index >= total) {
        setDirection(1);
      } else if (index < 0) {
        setDirection(-1);
      } else {
        setDirection(next > current ? 1 : -1);
      }
      setCurrent(next);
    },
    [current, total]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // ── Auto-advance every 3 seconds ────────────────────────────────
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, 3000);
    return () => clearInterval(timer); // cleanup on unmount or re-run
  }, [paused, goNext]);

  // ── Swipe handlers for touch devices ────────────────────────────
  const swipeHandlers = useSwipe(goNext, goPrev);

  // ── Neighbour indices for ghost cards ───────────────────────────
  const leftIndex = (current - 1 + total) % total;
  const rightIndex = (current + 1) % total;

  // ── Ghost card visibility ────────────────────────────────────────
  // Hide ghosts on mobile entirely; show smaller ghosts on tablet
  const showGhosts = !isMobile;

  return (
    /*
     * OUTER WRAPPER
     * ─────────────
     * • Indigo gradient background matching the original design.
     * • overflow-hidden is essential — clips sliding cards.
     * • py adjusts for each breakpoint using Tailwind responsive prefixes.
     */
    <div
      className="
        font-my-font
        relative flex flex-col items-center justify-center
        overflow-hidden
        max-w-4xl
        mx-auto
        py-10 sm:py-12 md:py-14
        px-4 sm:px-6
      "
      
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      {...swipeHandlers} // attach touch swipe events
    >

      {/* ── CARD TRACK ─────────────────────────────────────────── */}
      {/*
       * Fixed height prevents layout shift as cards animate.
       * On mobile: full-width card, no ghosts.
       * On tablet/desktop: ghosts peek in from left and right.
       */}
      <div
        className="relative w-full m flex items-center justify-center"
        style={{
          maxWidth: isMobile ? "100%" : isTablet ? "780px" : "500px",
          height: isMobile ? "300px" : "280px",
        }}
      >

        {/* Left ghost card — hidden on mobile */}
        {showGhosts && (
          <GhostCard
            member={TEAM[leftIndex]}
            side="left"
            isTablet={isTablet}
            onClick={() => goTo(leftIndex)}
          />
        )}

        {/* ── ACTIVE CENTRE CARD (animated) ──────────────────── */}
        {/*
         * AnimatePresence + key change = smooth enter/exit animation.
         * `mode="wait"` ensures old card fully exits before new one enters.
         * `custom={direction}` passes +1/-1 into the variant functions above.
         */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={TEAM[current].id}
            custom={direction}
            variants={CARD_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            className="
              absolute z-10 bg-white rounded-2xl shadow-2xl
              flex flex-col items-center text-center
              /* Responsive padding */
              px-6 py-7
              sm:px-8 sm:py-8
              md:px-10 md:py-8
            "
            style={{
              // Card width adapts to screen size
              width: isMobile ? "calc(100% - 32px)" : isTablet ? "440px" : "500px",
            }}
          >
            {/* ── Avatar ── */}
            <img
              src={TEAM[current].avatar}
              alt={TEAM[current].name}
              className="
                rounded-full object-cover border-4 border-white shadow-md mb-4
                w-16 h-16
                sm:w-20 sm:h-20
              "
            />

            {/* ── Name ── */}
            <h2
              className="
                font-bold tracking-wide text-gray-900 uppercase
                text-lg sm:text-xl
              "
            >
              {TEAM[current].name}
            </h2>

            {/* ── Role ── */}
            <p
              className="
                font-semibold tracking-widest text-indigo-500 uppercase
                text-[10px] sm:text-xs
                mb-3 sm:mb-4
              "
            >
              {TEAM[current].role}
            </p>

            {/* ── Bio ── */}
            <p
              className="
                text-gray-500 leading-relaxed
                text-xs sm:text-sm
                max-w-[280px] sm:max-w-sm
              "
            >
              {TEAM[current].bio}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Right ghost card — hidden on mobile */}
        {showGhosts && (
          <GhostCard
            member={TEAM[rightIndex]}
            side="right"
            isTablet={isTablet}
            onClick={() => goTo(rightIndex)}
          />
        )}
      </div>

      {/* ── DOT NAVIGATION ─────────────────────────────────────── */}
      <div className="flex gap-2.5 sm:gap-3 mt-6 sm:mt-8">
        {TEAM.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              rounded-full transition-all duration-300
              w-2 h-2 sm:w-2.5 sm:h-2.5
              ${i === current
                ? "bg-white scale-125"             // active dot
                : "bg-white/40 hover:bg-white/70"  // inactive dot
              }
            `}
          />
        ))}
      </div>

      {/* ── ARROW BUTTONS ──────────────────────────────────────── */}
      {/* Previous arrow */}


      {/* ── MOBILE SWIPE HINT ──────────────────────────────────── */}
      {/* Only shown on mobile, fades out after 3 seconds via CSS animation */}
      {isMobile && (
        <p
          className="absolute bottom-3 text-white/40 text-[10px] tracking-widest uppercase"
          style={{ animation: "fadeOut 3s ease forwards 2s" }}
        >
          swipe to browse
        </p>
      )}

      {/* Inline keyframe for the swipe hint fade */}
      <style>{`
        @keyframes fadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// ─── GHOST CARD COMPONENT ──────────────────────────────────────────
/**
 * The partially-visible side cards on tablet and desktop.
 *
 * Props:
 *  member   — TEAM data object
 *  side     — "left" | "right"
 *  isTablet — true when screen is tablet-sized (adjusts offset)
 *  onClick  — navigates to this card on click
 */
function GhostCard({ member, side, isTablet, onClick }) {
  /*
   * How much to push the card off-screen:
   *  • Desktop: 58% (more of the card is hidden — dramatic peek)
   *  • Tablet:  65% (even more hidden — less room available)
   */
  const offset = isTablet ? "65%" : "58%";

  const positionStyle =
    side === "left"
      ? { left: 0, transform: `translateX(-${offset})` }
      : { right: 0, transform: `translateX(${offset})` };

  // Ghost card width also shrinks on tablet
  const cardWidth = isTablet ? "340px" : "400px";

  return (
    <div
      onClick={onClick}
      className="
        absolute
        bg-white rounded-2xl shadow-lg
        flex flex-col items-center text-center
        opacity-50 scale-90 cursor-pointer
        hover:opacity-70 transition-opacity duration-200
        select-none overflow-hidden
        px-6 py-5
      "
      style={{ width: cardWidth, ...positionStyle }}
    >
      {/* Ghost cards show name + role + truncated bio only */}
      <h2 className="text-base font-bold tracking-wide text-gray-900 uppercase truncate w-full">
        {member.name}
      </h2>
      <p className="text-[10px] font-semibold tracking-widest text-indigo-500 uppercase mb-2">
        {member.role}
      </p>
      <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
        {member.bio}
      </p>
    </div>
  );
}
