
import { motion } from "framer-motion";

const SectionHeader = ({ 
    title, 
    subtitle,
    titleClassName = "",
    subtitleClassName = "",
     }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center px-4"
        >
            <h2 className={` text-3xl font-bold text-center font-my-font mt-12 uppercase py-4 ${titleClassName}`}>
                {title}
            </h2>
            <p className={`text-center mt-4  font-my-font  md:max-w-3xl ${subtitleClassName}`}>
                {subtitle}
            </p>
        </motion.div>
    )
}

export default SectionHeader
