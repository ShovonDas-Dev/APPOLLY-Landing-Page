import React from "react";
import { motion } from "framer-motion";

import { ChevronLeft, Search } from "lucide-react";

// 5 avatars placed around the circle (top, right, bottom-right, bottom-left, left)
const avatars = [
  { id: 1, src: "https://i.pravatar.cc/100?img=5", style: "top-0 left-1/2 -translate-x-1/2" },
  { id: 2, src: "https://i.pravatar.cc/100?img=13", style: "top-8 right-0" },
  { id: 3, src: "https://i.pravatar.cc/100?img=33", style: "bottom-8 right-2" },
  { id: 4, src: "https://i.pravatar.cc/100?img=14", style: "bottom-8 left-2" },
  { id: 5, src: "https://i.pravatar.cc/100?img=56", style: "top-8 left-0" },
];

const center = "https://i.pravatar.cc/200?img=47";

export default function WalletCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[310px] mx-auto rounded-[2.5rem] bg-white p-5 shadow-2xl font-sans"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
          <ChevronLeft className="w-4 h-4 text-gray-700" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
          <Search className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-900">Recent Transactions</h2>
        <span className="text-xs font-medium text-indigo-400">See all</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {["All", "Income", "Expense"].map((tab, i) => (
          <motion.button
            key={tab}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
              i === 0
                ? "bg-indigo-500 text-white shadow-md shadow-indigo-200"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      <p className="text-xs font-semibold text-gray-400 mb-2">Today</p>

      {/* Payment card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="flex items-center justify-between bg-white rounded-2xl p-3 mb-8 shadow-md shadow-gray-200 border border-gray-100"
      >
        <div className="flex items-center gap-3">
          <div className="bg-indigo-50 p-2.5 rounded-xl text-indigo-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-900">Payment</p>
            <p className="text-xs text-gray-400">Payment from Andrea</p>
          </div>
        </div>
        <p className="font-bold text-sm text-gray-900">$30.00</p>
      </motion.div>

      {/* Circular avatar cluster */}
      <div className="relative w-full h-56 flex items-center justify-center mb-8">
        {/* Outer light ring */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-60 h-60 rounded-full bg-indigo-50"
        />
        {/* Mid ring */}
        <div className="absolute w-44 h-44 rounded-full bg-indigo-100" />

        {/* Rotating container for outer avatars */}
        <motion.div
          className="absolute w-56 h-56"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {avatars.map((a,i) => (
            <motion.div
              key={a.id}
              className={`absolute ${a.style}`}
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <motion.img 
                src={a.src}
                alt=""
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.15 }}
                className="w-11 h-11 rounded-full border-2 border-white object-cover shadow-lg"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Center avatar */}
        <motion.img
          src={center}
          alt=""
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: [1, 1.04, 1] }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          className="relative w-24 h-24 rounded-full border-4 border-white object-cover shadow-xl z-10"
        />
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(99,102,241,0.35)" }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-indigo-500 text-white font-semibold py-3.5 rounded-full shadow-lg shadow-indigo-200"
      >
        See Details
      </motion.button>
    </motion.div>
  );
}
