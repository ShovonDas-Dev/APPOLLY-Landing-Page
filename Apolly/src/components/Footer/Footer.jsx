import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import logo from "../../image/Logo.png"

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
];

const quickLinks = [
    { label: "Home",       href: "#HOME" },
    { label: "About",      href: "#ABOUT" },
    { label: "Features",   href: "#FEATURES" },
    { label: "Screenshot", href: "#SCREENSHOT" },
    { label: "Blog",       href: "#BLOG" },
  ];
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1e1e2e" }} className="font-my-font text-white pt-14 pb-6 px-8 md:px-16">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Column 1 — Logo + description + socials */}
        <motion.div variants={itemVariants}>
          <img src={logo} className="bg-white p-2 rounded mb-5 w-35" alt="" /> 
          <p className="text-sm leading-relaxed" style={{ color: "#a0a0b8" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-6">
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                whileHover={{ scale: 1.2, color: "#6c63ff" }}
                whileTap={{ scale: 0.9 }}
                className="transition-colors duration-200"
                style={{ color: "#7c78f0" }}
              >
                <span className="text-lg">{s.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Column 2 — Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-sm font-bold tracking-widest uppercase mb-5">
            Quick Link
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <motion.a
                  href={link.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "#a0a0b8" }}
                  whileHover={{ color: "#ffffff", x: 4 }}
                >
                  {link.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3 — Newsletter */}
        <motion.div variants={itemVariants}>
          <h3 className="text-sm font-bold tracking-widest uppercase mb-3">
            News Letter
          </h3>
          <p className="text-sm mb-5" style={{ color: "#a0a0b8" }}>
            Subscribe our newsletter to get our latest update &amp; news
          </p>

          {/* Email input */}
          <div
            className="flex items-center rounded overflow-hidden"
            style={{ backgroundColor: "#2a2a3d" }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent text-sm px-4 py-3 outline-none placeholder-gray-500 text-white"
            />
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#5a52e0" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 flex items-center justify-center transition-colors duration-200"
              style={{ backgroundColor: "#6c63ff" }}
            >
              <FiSend className="text-white text-base" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div
        className="max-w-6xl mx-auto mt-12 mb-4 border-t"
        style={{ borderColor: "#2e2e45" }}
      />

      {/* Copyright */}
      <motion.p
        className="text-center text-xs"
        style={{ color: "#6b6b80" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        © Copyright 2026 Shovon Das. All rights reserved.
      </motion.p>
    </footer>
  );
}
