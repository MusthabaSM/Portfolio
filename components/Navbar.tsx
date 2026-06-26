"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const lastScrollY = useRef(0);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        
        hideTimeoutRef.current = setTimeout(() => {
          if (window.scrollY >= 50) {
            setIsVisible(false);
            setIsMobileMenuOpen(false);
          }
        }, 2000);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -150, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[800px] px-4 md:px-6"
    >
      <div className="bg-white dark:bg-slate-900 rounded-full px-6 py-3 mx-auto shadow-lg border border-black/5 dark:border-white/10 relative z-50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-sm md:text-base tracking-widest text-slate-900 dark:text-white">
              MUSTHABA
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/MusthabaSM" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><FaGithub size={18} /></a>
            <a href="https://linkedin.com/in/mohamed-musthaba" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><FaLinkedinIn size={18} /></a>
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-sm border border-black/5 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            )}
          </div>
          
          {/* Mobile Toggle & Theme */}
          <div className="flex md:hidden items-center gap-4">
            {mounted && (
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-sm border border-black/5 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            )}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-blue-500 outline-none"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[120%] left-4 right-4 bg-white dark:bg-slate-900 rounded-[2rem] p-6 shadow-2xl border border-black/5 dark:border-white/10 flex flex-col gap-4 md:hidden"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 dark:text-slate-200 font-medium hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 dark:text-slate-200 font-medium hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 dark:text-slate-200 font-medium hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-800 dark:text-slate-200 font-medium hover:text-blue-500 transition-colors">Contact</a>
            
            <div className="h-px w-full bg-black/5 dark:bg-white/10 my-2" />
            
            <div className="flex gap-5 items-center">
              <a href="https://github.com/MusthabaSM" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors"><FaGithub size={22} /></a>
              <a href="https://linkedin.com/in/mohamed-musthaba" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors"><FaLinkedinIn size={22} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}