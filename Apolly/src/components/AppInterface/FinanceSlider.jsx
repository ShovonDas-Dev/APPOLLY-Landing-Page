import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Mockup1 from "../../image/Mockup/Mockup1.png";
import Mockup2 from "../../image/Mockup/Mockup2.png";
import Mockup3 from "../../image/Mockup/Mockup3.png";
import Mockup4 from "../../image/Mockup/Mockup4.png";
import Mockup5 from "../../image/Mockup/Mockup5.png";

const slides = [
  { id: 1, image: Mockup1, alt: "Income overview" },
  { id: 2, image: Mockup4, alt: "Visa card with balance" },
  { id: 3, image: Mockup2, alt: "Yearly statistics" },
  { id: 4, image: Mockup5, alt: "Income and expenses summary" },
  { id: 5, image: Mockup3, alt: "Expenses breakdown" },
];

export default function FinanceSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const getIndex = (i) => (i + slides.length) % slides.length;

  const goToNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => getIndex(prev + 1));
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => getIndex(prev - 1));
  }, []);

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  // index helpers
  const farPrev = getIndex(activeIndex - 2);
  const prev = getIndex(activeIndex - 1);
  const next = getIndex(activeIndex + 1);
  const farNext = getIndex(activeIndex + 2);

  return (
    <div className="w-full overflow-hidden flex flex-col max-w-3xl mx-auto items-center justify-center py-10 px-4">
      {/* ── STAGE ── */}
      <div className="overflow-hidden relative w-full max-w-full flex items-center justify-center">
        {/* ── FAR-LEFT  (desktop only, most faded) ── */}
        <button
          onClick={goToPrev}
          aria-label="Go to previous slide"
          className="hidden lg:block absolute z-0 cursor-pointer
                     left-0
                     w-[120px] xl:w-[135px]
                     opacity-50  hover:opacity-80
                     transition-opacity duration-300"
        >
          <PhoneFrame>
            <img
              src={slides[farPrev].image}
              alt=""
              className="w-full h-auto rounded-[1.3rem] object-cover"
              draggable={false}
            />
          </PhoneFrame>
        </button>

        {/* ── LEFT  (tablet + desktop, medium fade) ── */}
        <button
          onClick={goToPrev}
          aria-label="Go to previous slide"
          className="hidden sm:block absolute z-[1] cursor-pointer
                     left-0 lg:left-[140px] xl:left-[155px]
                     w-[130px] md:w-[145px] lg:w-[155px]
                     opacity-45 grayscale-[20%] hover:opacity-65
                     transition-opacity duration-300"
        >
          <PhoneFrame>
            <img
              src={slides[prev].image}
              alt=""
              className="overflow-hidden w-full h-auto rounded-[1.4rem] object-cover"
              draggable={false}
            />
          </PhoneFrame>
        </button>

        {/* ── CENTER (always visible, animated) ── */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={slides[activeIndex].id}
            custom={direction}
            initial={{ x: direction > 0 ? 140 : -140, opacity: 0, scale: 0.82 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction > 0 ? -140 : 140, opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="relative z-10"
          >
            <PhoneFrame size="lg">
              <img
                src={slides[activeIndex].image}
                alt={slides[activeIndex].alt}
                className="w-full h-auto rounded-[1.7rem] object-cover"
                draggable={false}
              />
            </PhoneFrame>
          </motion.div>
        </AnimatePresence>

        {/* ── RIGHT  (tablet + desktop, medium fade) ── */}
        <button
          onClick={goToNext}
          aria-label="Go to next slide"
          className="hidden sm:block absolute z-[1] cursor-pointer
                     right-0 lg:right-[140px] xl:right-[155px]
                     w-[130px] md:w-[145px] lg:w-[155px]
                     opacity-45 grayscale-[20%] hover:opacity-65
                     transition-opacity duration-300"
        >
          <PhoneFrame>
            <img
              src={slides[next].image}
              alt=""
              className="w-full h-auto rounded-[1.4rem] object-cover"
              draggable={false}
            />
          </PhoneFrame>
        </button>

        {/* ── FAR-RIGHT  (desktop only, most faded) ── */}
        <button
          onClick={goToNext}
          aria-label="Go to next slide"
          className="hidden lg:block absolute z-0 cursor-pointer
                     right-0
                     w-[120px] xl:w-[135px]
                     opacity-25 grayscale hover:opacity-40
                     transition-opacity duration-300"
        >
          <PhoneFrame>
            <img
              src={slides[farNext].image}
              alt=""
              className="w-full h-auto rounded-[1.3rem] object-cover"
              draggable={false}
            />
          </PhoneFrame>
        </button>
      </div>

      {/* ── ARROW BUTTONS ── */}
      <div className="relative w-full max-w-5xl">
        {/* Left — outline */}
        <button
          onClick={goToPrev}
          aria-label="Previous slide"
          className="absolute -top-[235px] sm:-top-[255px] left-2 sm:-left-4 z-20
                     w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white
                     border-2 border-indigo-200 flex items-center justify-center
                     text-indigo-400 hover:border-indigo-400 hover:text-indigo-600
                     hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right — filled indigo */}
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute -top-[235px] sm:-top-[255px] right-2 sm:-right-4 z-20
                     w-11 h-11 sm:w-14 sm:h-14 rounded-full
                     bg-indigo-600 shadow-lg flex items-center justify-center
                     text-white hover:bg-indigo-700 hover:scale-110
                     active:scale-95 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* ── DOT INDICATORS ── */}
      <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="p-1"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 h-2.5 bg-indigo-600"
                  : "w-2.5 h-2.5 bg-indigo-200 hover:bg-indigo-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── PhoneFrame ─────────────────────────────────────────────────────
// size="lg" → center phone (bigger bezel + notch)
// default   → side phones (smaller)
function PhoneFrame({ children, size }) {
  const isLg = size === "lg";
  return (
    <div
      className={`relative bg-black shadow-2xl overflow-hidden ${
        isLg
          ? "w-[190px] sm:w-[210px] lg:w-[230px] rounded-[2.4rem] p-[6px]"
          : "w-full rounded-[2rem] p-[5px]"
      }`}
    >
      {/* notch */}
      <div
        className={`absolute top-2 left-1/2 -translate-x-1/2 bg-black rounded-full z-20 ${
          isLg ? "w-12 h-3" : "w-8 h-2"
        }`}
      >
        <span
          className={`block mx-auto mt-[3px] bg-gray-700 rounded-full ${isLg ? "w-1.5 h-1.5" : "w-1 h-1"}`}
        />
      </div>
      {children}
    </div>
  );
}
