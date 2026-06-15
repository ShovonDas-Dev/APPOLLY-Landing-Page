import { motion } from "framer-motion";
import playstorelogo from "../image/playstorelogo.png";
import appstorelogo from "../image/appstorelogo.png";

export default function HeroCard() {
  return (
    <div className="relative  flex items-center justify-center">

      {/* Frame 1 */}
      <motion.div
        className="absolute  md:left-25 w-[350px] h-[450px]  md:w-[450px]  md:h-[450px] border-[8px] border-white/15"
        animate={{
          y: [-10, 10, -10],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      

      {/* Frame 2 */}
      

      {/* Content Box */}
      <div className="relative z-10 bg-white m-3 md:m-auto px-4 py-10 font-my-font shadow-xl w-[300px]  md:w-[450px] rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight ">
          A GREAT APP MAKES YOUR LIFE EASIER
        </h2>

        <p className="mt-4 text-gray-500 text-sm leading-relaxed  ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        {/* Doenlode now  */}

        <div>
          <h3 className="mt-8 text-1xl md:text-2xl font-semibold text-">
          DOWNLOAD APP NOW
        </h3>
         <div className="flex gap-2">
          <img src={playstorelogo} alt="Play Store" className=" w-24 md:w-32 mt-4 cursor-pointer" />
          <img src={appstorelogo} alt="App Store" className=" w-24 md:w-32 mt-4 cursor-pointer" />
         </div>
        </div>
        
      </div>
    </div>
  );
}