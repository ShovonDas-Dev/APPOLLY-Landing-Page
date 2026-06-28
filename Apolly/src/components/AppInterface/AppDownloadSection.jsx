import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Appstorelogo from "../../image/appstorelogo.png"
import Playstorelogo from "../../image/playstorelogo.png"
import { FiDownload } from "react-icons/fi";
import { BiSolidLike } from "react-icons/bi";
import { MdOutlineStar } from "react-icons/md";
import GravityCard from "../../image/Mockup/GravitySceneMockup.png"



const STATS = [
  {
    icon: <FiDownload />,
    value: 59865,
    label: "DOWNLOAD",
  },
  {
    icon:<BiSolidLike />,
    value: 29852,
    label: "LIKE",
  },
  {
    icon:<MdOutlineStar />,
    value: 1500,
    label: "5 STAR RATING",
  },
];

function AnimatedNumber({ target, inView }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) {
      setDisplay(0);
      return;
    }

    let frameId = null;
    const duration = 900;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(target * easedProgress);

      setDisplay(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    setDisplay(0);
    frameId = requestAnimationFrame(tick);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [inView, target]);

  return <span>{display.toLocaleString()}</span>;
}



export default function AppDownloadSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden py-16 px-6 md:px-16"
    >
      {/* Subtle bg blob */}
      

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 "
      >
        {/* LEFT: Text + CTAs + Stats */}
        <div className="flex-1 min-w-0">
          <motion.h1
            variants={fadeUp}
            className="text-2xl md:text-4xl font-semibold text-black tracking-tight mb-4"
          >
            DOWNLOAD APP NOW
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray text-sm leading-relaxed max-w-sm mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </motion.p>

          {/* Store Badges */}
          {/* <motion.div variants={fadeUp} className="flex gap-4 mb-12"> */}
            {/* Google Play */}
           
        <motion.div
        variants={fadeUp}
        className="flex gap-4 mb-12"
        >
            {/* Google Play */} 
             <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}            
              src={Appstorelogo}
              alt="Appstorelogo"
             />

            {/* App Store */}
            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}            
              src={Playstorelogo}
              alt="Playstorelogo"
             />          
        </motion.div>
            

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(109,40,217,0.18)" }}
                className="bg-primary rounded-2xl p-5 flex flex-col items-center gap-2 text-white cursor-default select-none"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4, type: "spring" }}
                  className="text-4xl"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-xl font-bold tabular-nums">
                  <AnimatedNumber target={stat.value} inView={isInView} />
                </div>
                <div className="text-xs font-my-font font-semibold tracking-widest opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT: Phone mockups */}
        <div className="w-full max-w-[320px] mx-auto">
            <img src={GravityCard} alt="" className="w-full h-auto" />
        </div>
      </motion.div>
    </section>
  );
}
