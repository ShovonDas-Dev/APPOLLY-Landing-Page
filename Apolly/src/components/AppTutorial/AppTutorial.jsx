import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader"

// Assets
import bgPattern from "../../image/HeroBG.png"; ;
import videoThumbnail from "../../image/VideoImg.png";

export default function AppTutorial() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Purple Area */}
      <div className="relative h-[480px] md:h-[460px]">
        {/* Background */}
        <img
          src={bgPattern}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 pt-16 text-center md:pt-20">
          <SectionHeader title="how to use the app perfectly" titleClassName="text-white" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat." subtitleClassName="text-white"/>
        </div>
      </div>

      {/* Video Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 mx-auto -mt-16 w-full max-w-4xl px-4 md:-mt-44"
      >
        <div className="overflow-hidden rounded-xl">
          <div className="relative">
            <img
              src={videoThumbnail}
              alt="Application tutorial video"
              className="h-full w-full object-cover"
            />
            {/* Play Button */}
            <motion.button
             whileHover={{ scale: 1.1 }}
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl "
            >
              <FaPlay className="ml-1 text-sm text-[#5A4BFF]" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* White Area */}
      <div className="h-24 bg-white md:h-32" />
    </section>
  );
}