import { Check } from "lucide-react";
import smartphone from "../image/smartphone-mockup.png";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
const AboutSection = () => {
    const features = [
        {
            id: 1,
            title: "Creative design",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
        },
        {
            id: 2,
            title: "easy to use",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
        },
        {
            id: 3,
            title: "Best user experince",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
        }
    ]

    return (
        <div className="font-my-font mx-auto max-w-7xl  ">
            {/* About Header */}

            <SectionHeader 
            title="About Our App" 
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat."
            titleClassName="text-black"
            subtitleClassName="text-gray"
             />

            {/* About Content */}
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mt-12">
                <motion.div 
                
                className="relative flex items-center justify-center">
                    <motion.div
                       animate={{ scale: [1, 1.03, 1] }}
                        transition={{   duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-88 h-88 md:w-102 md:h-102  bg-[#ddddfa] rounded-full   "
                    />
                    <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{   duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-85 h-85   md:w-100 md:h-100  bg-[#9b99f1] rounded-full   "
                    />
                    <div
                    className="absolute w-82 h-82 md:w-98 md:h-98  bg-[white] rounded-full   "
                    />
                    {/* Smartphone Mockup */}
                    <motion.img 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView ={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative z-10 w-xs md:w-auto" src={smartphone} alt="Smartphone Mockup" />
                </motion.div>
                {/* Features List */}
                <div>
                    {features.map(feature => (
                        <motion.div 
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: feature.id * 0.2 }}
                        viewport={{ once: true }}

                        key={feature.id} className="mb-10 my-5 mx-5 flex items-start gap-4 shadow-md shadow-purple-100 border-purple-100 border-2 hover:shadow-primary hover:transition-all hover:duration-500 p-4 rounded-lg">
                            <div>
                                <div className="  bg-primary flex items-center justify-center rounded-full text-md  text-white ">
                                    <Check/>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-black text-xl font- mb-2 uppercase">{feature.title}</h3>
                                <p className="text-gray py-2">{feature.description}</p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default AboutSection
