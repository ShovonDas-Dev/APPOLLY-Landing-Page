/**
 * AnimatedFinanceMockup.jsx
 *
 * A simple animated mockup of a finance app screen.
 * Stack: React + Tailwind CSS + Framer Motion
 *
 * Setup:
 *   npm install framer-motion
 *
 * Tailwind just needs to be installed in your project — no extra config
 * needed, only default colors (violet, emerald, rose, sky, orange, gray) are used.
 *
 * 3 animations happen here:
 *   1. Numbers count up from 0 (balance, income, expenses, percentages)
 *   2. The bar chart grows upward, one bar after another
 *   3. The circular progress rings draw themselves
 */

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

// ---------------------------------------------
// 1) A reusable "counting number" component
// ---------------------------------------------
// Takes a target number (like 567) and animates from 0 up to it.
function AnimatedNumber({ value, prefix = "", decimals = 2, delay = 0 }) {
  const [shownValue, setShownValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.4,
      delay,
      ease: "easeOut",
      onUpdate: (latest) => setShownValue(latest),
    });
    return () => controls.stop(); // cleanup if component unmounts mid-animation
  }, [value, delay]);

  const isNegative = value < 0;
  const formattedNumber = Math.abs(shownValue).toFixed(decimals).replace(".", ",");

  return (
    <span>
      {isNegative && "-"}
      {prefix}
      {formattedNumber}
    </span>
  );
}

// ---------------------------------------------
// 2) The monthly bar chart
// ---------------------------------------------
// Each month is a little column made of colored "pills" stacked on top
// of each other. The whole column grows upward when the page loads.

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

// Each array is the list of pill colors for that month, top to bottom
const BAR_PATTERNS = [
  ["bg-violet-400", "bg-emerald-400", "bg-rose-500", "bg-sky-400"],
  ["bg-sky-400", "bg-emerald-400", "bg-rose-500", "bg-violet-400"],
  ["bg-emerald-400", "bg-rose-500", "bg-sky-400", "bg-violet-400"],
  ["bg-gray-300", "bg-emerald-400", "bg-sky-400", "bg-rose-500"],
  ["bg-violet-400", "bg-orange-400", "bg-sky-400", "bg-emerald-400", "bg-rose-500"],
  ["bg-gray-300", "bg-sky-400", "bg-rose-500", "bg-emerald-400"],
  ["bg-sky-400", "bg-violet-400", "bg-rose-500", "bg-emerald-400"],
  ["bg-violet-400", "bg-emerald-400", "bg-sky-400", "bg-orange-400"],
  ["bg-sky-400", "bg-rose-500", "bg-violet-400", "bg-emerald-400"],
  ["bg-violet-400", "bg-sky-400", "bg-emerald-400", "bg-rose-500"],
  ["bg-gray-300", "bg-violet-400", "bg-sky-400", "bg-emerald-400"],
  ["bg-sky-400", "bg-emerald-400", "bg-violet-400", "bg-rose-500"],
];

function MonthBar({ colors, delay }) {
  return (
    <motion.div
      className="flex flex-col gap-[3px] items-center"
      style={{ originY: 1 }} // grow from the bottom, not the top
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {colors.map((colorClass, i) => (
        <div key={i} className={`w-[6px] h-[9px] rounded-full ${colorClass}`} />
      ))}
    </motion.div>
  );
}

// ---------------------------------------------
// 3) The circular progress ring
// ---------------------------------------------
// An SVG circle that "draws" itself from empty to the right percentage.
function CircularProgress({ percent, delay }) {
  const size = 44;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* gray background track */}
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="none" />

        {/* purple progress line that animates */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#6366f1"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          style={{ rotate: -90, transformOrigin: "50% 50%" }} // start from the top
          initial={{ pathLength: 0 }}
          animate={{ pathLength: percent / 100 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        />
      </svg>

      {/* percentage number in the middle of the circle */}
      <div className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-gray-800">
        <AnimatedNumber value={percent} decimals={0} delay={delay} /> %
      </div>
    </div>
  );
}

// ---------------------------------------------
// 4) One row in the expenses list
// ---------------------------------------------
function ExpenseRow({ percent, title, subtitle, amount, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
    >
      <div className="flex items-center gap-3">
        <CircularProgress percent={percent} delay={delay + 0.2} />
        <div>
          <p className="font-semibold text-gray-800 text-sm leading-tight">{title}</p>
          <p className="text-gray-400 text-xs">{subtitle}</p>
        </div>
      </div>
      <p className="text-rose-500 font-bold text-sm whitespace-nowrap">
        <AnimatedNumber value={-amount} prefix="$" decimals={2} delay={delay + 0.3} />
      </p>
    </motion.div>
  );
}

// ---------------------------------------------
// 5) The expenses data
// ---------------------------------------------
const EXPENSES = [
  { percent: 53, title: "Cedint Rent", subtitle: "Apartment", amount: 498.1 },
  { percent: 34, title: "Restaurant BBQ", subtitle: "Food", amount: 176.9 },
  { percent: 22, title: "Electric Car", subtitle: "Car", amount: 105.76 },
  { percent: 2, title: "Drinks And Disco", subtitle: "Party", amount: 33.2 },
];

// ---------------------------------------------
// 6) The main app screen
// ---------------------------------------------
export default function AnimatedFinanceMockup() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      {/* phone frame */}
      <div className="relative w-[375px] rounded-[2.6rem] bg-black p-2 shadow-2xl">
        <div className="rounded-[2.3rem] overflow-hidden bg-black">

          {/* purple header with balance */}
          <div className="relative bg-gradient-to-br from-[#6d5ce8] to-[#a78bfa] px-6 pt-9 pb-16">
            <p className="text-white/70 text-[11px] font-semibold tracking-[0.2em]">INCOME</p>
            <h1 className="text-white text-4xl font-bold mt-2">
              <AnimatedNumber value={567} prefix="$" decimals={2} />
            </h1>
          </div>

          {/* 4 white action buttons, floating between sections */}
          <div className="relative -mt-9 px-6 flex gap-2">
            {["SEND", "CHANGE", "PAY", "BORROW"].map((label, i) => (
              <motion.button
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.08, duration: 0.4 }}
                className="bg-white rounded-2xl px-4 py-3 text-[10px] font-bold text-gray-700 tracking-wide shadow-lg flex-1"
              >
                {label}
              </motion.button>
            ))}
          </div>

          {/* income card with bar chart */}
          <div className="bg-white rounded-t-[2rem] -mt-2 relative z-10 px-6 pt-9 pb-4">
            <p className="text-gray-400 text-[11px] font-semibold tracking-[0.2em]">INCOME</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">
              <AnimatedNumber value={1567} prefix="$" decimals={2} delay={0.3} />
            </h2>

            <div className="flex justify-between items-end mt-6 h-[70px]">
              {MONTHS.map((month, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <MonthBar colors={BAR_PATTERNS[i]} delay={0.3 + i * 0.05} />
                  <span className="text-[9px] text-gray-400 font-medium">{month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* expenses card */}
          <div className="bg-white px-6 pt-6 pb-9">
            <p className="text-gray-400 text-[11px] font-semibold tracking-[0.2em]">EXPENSES</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">
              <AnimatedNumber value={-898} prefix="$" decimals={2} delay={0.5} />
            </h2>

            <div className="mt-3">
              {EXPENSES.map((expense, i) => (
                <ExpenseRow key={expense.title} {...expense} delay={0.6 + i * 0.15} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
