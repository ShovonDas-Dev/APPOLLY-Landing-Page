import SectionHeader from "../SectionHeader";
import featuresData from "../../data/featuresData";
import Animation from "./AnimatedFinanceMockup";
import { FerrisWheel } from "lucide-react";
import { motion } from "framer-motion";

const Appfeatures = () => {
  const fristFeature = featuresData[0];
  console.log(fristFeature);
  return (
    <div>
      {/* App Features header */}
      <SectionHeader
        title="App features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
        subtitleClassName="text-white"
        titleClassName="text-white"
      />

      <div className="py-20">
        {/* 1st card */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 , delay:1 }}
          className="flex justify-center md:pb-10"
        >
          <div className="flex flex-col gap-2 items-center font-my-font ">
            <img src={fristFeature.icon} alt="" className="w-10 md:w-12" />
            <h2 className="text-white text-xl uppercase font-semibold">
              {fristFeature.title}
            </h2>
            <p className="text-white pt-2 text-center">
              {fristFeature.description}
            </p>
          </div>
        </motion.div>

        {/* Middle part */}

        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* animated left side */}

          <div className="flex flex-col justify-around px-10 ">
            {[featuresData[1], featuresData[2]].map((d) => (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}

                key={d.id}
                className="flex flex-col py-10 md:py-30 gap-2 items-center md:items-end font-my-font "
              >
                <img src={d.icon} alt="" className="w-10   md:w-12" />
                <h2 className="text-white text-xl pt-2 uppercase font-semibold">
                  {d.title}
                </h2>
                <p className="text-white pt-2 ">{d.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="">
            <Animation />
          </div>

          {/* animated right side */}

          <div className="flex flex-col justify-around px-10 ">
            {[featuresData[3], featuresData[4]].map((d) => (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}               
                key={d.id}
                className="flex flex-col py-10 md:py-30 gap-2 items-center md:items-start  font-my-font "
              >
                <img src={d.icon} alt="" className="w-10 md:w-10" />
                <h2 className="text-white text-xl pt-2 uppercase font-semibold">
                  {d.title}
                </h2>
                <p className="text-white pt-2 text-center">{d.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/*Last card */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 , delay:0.5 }}        
        className="flex justify-center px-10 md:pt-10">
          <div className="flex flex-col gap-2 items-center font-my-font">
            <img src={featuresData[5].icon} alt="" className="w-10 md:w-10" />
            <h2 className="text-white text-xl uppercase font-semibold">
              {featuresData[5].title}
            </h2>
            <p className="text-white pt-2 text-center">
              {featuresData[5].description}
            </p>
          </div>
        </motion.div> 
      </div>
    </div>
  );
};

export default Appfeatures;
