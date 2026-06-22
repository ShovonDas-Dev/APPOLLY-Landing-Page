import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Mockup1 from "../../image/Mockup/Mockup1.png"
import Mockup2 from "../../image/Mockup/Mockup2.png"
import Mockup3 from "../../image/Mockup/Mockup3.png"
import Mockup4 from "../../image/Mockup/Mockup4.png"
import Mockup5 from "../../image/Mockup/Mockup5.png"
// ===================================================================
// FINANCE APP SLIDER  (React + Tailwind + Framer Motion)
// -------------------------------------------------------------------
// Eta ekta beginner-friendly carousel/slider component.
//
// Design (original mockup theke dekha):
//   - Center e ekta boro phone-frame e active screen dekhay (sharp)
//   - Left o right e pasher screenshot gulo faded/grayscale hoye
//     half-dekha jay (jeno preview, click korle oi slide e jawa jay)
//   - Niche dot indicators ase, r dui pashe left/right arrow button
//
// Beginner Tip:
//   - "slides" array e shob image path deya ase
//   - "activeIndex" state diye bujha jay ekhon kon slide dekhano hocche
//   - Framer motion er "AnimatePresence" diye slide change er
//     smooth animation kora hoyeche
// ===================================================================

// Step 1: 5 ta slide. Image gulo public/images folder theke load hobe.
const slides = [
  { id: 1, image: Mockup1, alt: "Income overview with send, change, pay, borrow options" },
  { id: 2, image: Mockup4, alt: "Visa card with balance and money spent" },
  { id: 3, image: Mockup2, alt: "Yearly statistics with money spent chart" },
  { id: 4, image: Mockup5, alt: "Income and expenses summary" },
  { id: 5, image: Mockup3, alt: "Expenses breakdown by category" },
];

export default function FinanceSlider() {

  // ekhon kon slide ta center e (active) ase
  const [activeIndex, setActiveIndex] = useState(0);
  // direction: 1 = right dik e jacche, -1 = left dik e jacche
  const [direction, setDirection] = useState(1);

  // circular index ber kora (last theke abar first e fire ashe)
    const getIndex = (index) => (index + slides.length) % slides.length;

  const prevIndex = getIndex(activeIndex - 1);
  const nextIndex = getIndex(activeIndex + 1);  

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

  // Autoplay: every 4 second e automatic next slide e jay
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <div className="w-full min-h-screen  flex items-center justify-center px-4  sm:py-16">
      <div className="relative w-full ">
        {/* ====================================================
            SLIDER STAGE
            mobile: shudhu center phone dekhabe
            sm/md/lg: left+center+right tin ta dekhabe
        ===================================================== */}
        <div className="relative flex items-center justify-center max-w-3xl mx-auto h-[380px] sm:h-[420px] md:h-[460px]">
          {/* ---- LEFT preview (faded screenshot, no phone frame) ---- */}
          <button
            
            aria-label="Previous slide preview"
            className="hidden sm:block absolute left-0 md:left-6 lg:left-10 z-0
                       w-[120px] md:w-[150px] lg:w-[170px]
                       opacity-50 grayscale-[20%] hover:opacity-70
                       transition-opacity duration-300 cursor-pointer"
          >
            <img
              src={slides[prevIndex].image}
              alt=""
              className="w-full h-auto rounded-2xl shadow-md object-cover"
              draggable={false}
            />
          </button>

          {/* ---- RIGHT preview (faded screenshot, no phone frame) ---- */}
          <button
           
            aria-label="Next slide preview"
            className="hidden sm:block absolute right-0 md:right-6 lg:right-10 z-0
                       w-[120px] md:w-[150px] lg:w-[170px]
                       opacity-50 grayscale-[20%] hover:opacity-70
                       transition-opacity duration-300 cursor-pointer"
          >
            <img
              src={slides[nextIndex].image}
              alt=""
              className="w-full h-auto rounded-2xl shadow-md object-cover"
              draggable={false}
            />

          </button>

          {/* ---- CENTER active slide, wrapped in a phone bezel ---- */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={slides[activeIndex].id}
              custom={direction}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0, scale: 0.2 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.5 , ease: "easeInOut" }}
              className="relative z-10"
            >
              {/* Phone bezel wrapper -- shudhu center slide er jonno */}
              <div className="relative w-[200px] sm:w-[220px] p-[5px] bg-black rounded-[2.2rem] shadow-2xl">
                {/* speaker notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
                </div>
                <img
                  src={slides[activeIndex].image}
                  alt={slides[activeIndex].alt}
                  className="w-full h-auto rounded-[1.6rem] object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ====================================================
            ARROW BUTTONS (left = outline circle, right = filled)
        ===================================================== */}
        <button
          onClick={goToPrev}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 z-20
                     w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white
                     border-2 border-indigo-200 flex items-center justify-center
                     text-indigo-400 hover:border-indigo-400 hover:text-indigo-600
                     hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 z-20
                     w-11 h-11 sm:w-14 sm:h-14 rounded-full
                     bg-primary shadow-lg flex items-center justify-center
                     text-white hover:bg-indigo-700 hover:scale-110
                     active:scale-95 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* ====================================================
            DOT INDICATORS
        ===================================================== */}
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
    </div>
  );
}
