import { useState } from "react";
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "HOME", href: "#HomePage" },
  { name: "ABOUT", href: "#about" },
  { name: "FEATURES", href: "#features" },
  { name: "SCREENSHOT", href: "#screenshot" },
  { name: "BLOG", href: "#blog" },
];
import logo from "../image/logo.png";



function DownloadBtn() {
  return (
    <a
      href="#"
      className={"px-2 py-1 md:px-4 md:py-2 rounded text-xs  font-my-font uppercase tracking-widest no-underline transition-colors bg-primary text-white hover:bg-primary"}
    >
      DOWNLOAD
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("HOME");

  return (
    <div className="w-full font-my-font">

      {/* Top bar — desktop only */}
      <div className="hidden md:flex  text-white text-xs px-6 py-2 justify-between items-center">
        <motion.div 
        initial={{ opacity: 0, x: -20 }}  
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-5 items-center ">
          <a href="#" className="flex items-center text-sm gap-1 text-white no-underline">
            <span>✉</span> info@youremail.com
          </a>
          <a href="#" className="flex items-center text-sm gap-1 text-white no-underline">
            <span>📞</span> (480) 555-0103
          </a>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, x: 20 }}  
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-3 items-center  text-sm">
          <a href="#" className="text-white text-xl no-underline"><TiSocialFacebook /></a>
          <a href="#" className="text-white text-xl no-underline"><TiSocialLinkedin /></a>
          <a href="#" className="text-white text-xl no-underline"><TiSocialTwitter /></a>
          <a href="#" className="text-white text-xl no-underline"><TiSocialYoutube /></a>
        </motion.div>
      </div>

      {/* Desktop main nav */}
      <motion.nav 
      initial={{ opacity: 0, y: -20 }}  
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="hidden md:flex items-center justify-between bg-white border-b border-gray-100 px-6 h-12">
        <ul className="flex items-center gap-7 list-none m-0 p-0">
          {["HOME", "ABOUT", "FEATURES"].map((link) => (
            <li key={link}>
              <a
                href={link}
                onClick={() => setActive(link)}
                className={`no-underline text-xs md:text-sm  font-bold uppercase tracking-widest transition-colors pb-0.5 ${
                  active === link
                    ? "text-[#5c52d5] border-b-2 border-[#5c52d5]"
                    : "text-gray-700 hover:text-[#5c52d5]"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        
        <motion.img 
        initial={{opacity: 1, scale: 0.7 }}  
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        src={logo} alt="Apolly Logo" className=" w-40 relative px-4 py-5.5 bg-white  "   />
        

        <div className="flex items-center gap-7">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            {["SCREENSHOT", "BLOG"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setActive(link)}
                  className={`no-underline text-xs md:text-sm  font-bold uppercase tracking-widest transition-colors pb-0.5 ${
                    active === link
                      ? "text-[#5c52d5] border-b-2 border-[#5c52d5]"
                      : "text-gray-700 hover:text-[#5c52d5]"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <DownloadBtn />
        </div>
      </motion.nav>

      {/* Mobile / Tablet nav */}
      <div className="md:hidden py-4">
      <nav className="flex md:hidden items-center justify-between w-full bg-[#5c52d5] px-4 h-10">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white bg-transparent border-none cursor-pointer text-2xl p-1"
          aria-label="Open menu"
        >
          ☰
        </button>
        <img src={logo} alt="Apolly Logo" className="w-24 h-auto relative px-3 py-2 bg-white" />
        <DownloadBtn />
      </nav>
      </div>

      {/* Mobile dropdown overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="relative bg-white rounded-xl mt-16 w-56 py-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-primary text-white border-none cursor-pointer text-lg flex items-center justify-center shadow-lg"
              aria-label="Close menu"
            >
              ✕
            </button>

            <ul className="list-none m-0 px-7">
              {NAV_LINKS.map((link, i) => (
                <li
                  key={link.name}
                  className={`py-3.5 ${i < NAV_LINKS.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <a
                    href={link.href}
                    onClick={() => { setActive(link); setMenuOpen(false); }}
                    className={`no-underline text-sm font-bold uppercase tracking-widest ${
                      active === link ? "text-primary" : "text-gray-800 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
