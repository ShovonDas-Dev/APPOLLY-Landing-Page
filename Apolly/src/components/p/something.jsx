import { delay, motion } from "framer-motion";
import { div } from "framer-motion/client";

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

// Each array is the list of pill colors for that month, top to bottom
const BAR_PATTERNS = [
  ["bg-violet-400", "bg-emerald-400", "bg-rose-500", "bg-sky-400"],
  ["bg-sky-400", "bg-emerald-400", "bg-rose-500", "bg-violet-400"],
  ["bg-emerald-400", "bg-rose-500", "bg-sky-400", "bg-violet-400"],
  ["bg-gray-300", "bg-emerald-400", "bg-sky-400", "bg-rose-500"],
  [
    "bg-violet-400",
    "bg-orange-400",
    "bg-sky-400",
    "bg-emerald-400",
    "bg-rose-500",
  ],
  ["bg-gray-300", "bg-sky-400", "bg-rose-500", "bg-emerald-400"],
  ["bg-sky-400", "bg-violet-400", "bg-rose-500", "bg-emerald-400"],
  ["bg-violet-400", "bg-emerald-400", "bg-sky-400", "bg-orange-400"],
  ["bg-sky-400", "bg-rose-500", "bg-violet-400", "bg-emerald-400"],
  ["bg-violet-400", "bg-sky-400", "bg-emerald-400", "bg-rose-500"],
  ["bg-gray-300", "bg-violet-400", "bg-sky-400", "bg-emerald-400"],
  ["bg-sky-400", "bg-emerald-400", "bg-violet-400", "bg-rose-500"],
];

function MonthBar({ colour, delay }) {
  return (
    <motion.div
      style={{ originY: 1 }}
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col gap-[7px] items-center"
    >
      {colour.map((c) => (
        <motion.div
          key={c}
          className={`w-[5px] h-[10px] rounded ${c}`}
        ></motion.div>
      ))}
    </motion.div>
  );
}

const something = () => {
  return (
    <div className="flex gap-10 items-end mt-6 ">
      {MONTHS.map((m, i) => (
        <div className="flex flex-col items-center gap-2 " key={i}>
          <MonthBar colour={BAR_PATTERNS[i]} delay={0.3 + i * 0.05} />

          {m}
        </div>
      ))}
    </div>
  );
};

export default something;
