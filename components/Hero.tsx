"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Hero() {
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoopKey(prev => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-24 pb-4 lg:pb-8 overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/60 via-slate-50 to-slate-50 dark:bg-none">

      {/* Availability badge */}
      <div className="absolute top-[90px] lg:top-[120px] inset-x-0 flex justify-center z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border border-black/5 dark:border-white/10 pointer-events-auto"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
          <span className="text-xs font-semibold tracking-wide text-slate-800 dark:text-slate-200">
            Available for new opportunities
          </span>
        </motion.div>
      </div>

      {/* Background Text "Hey, there" */}
      <div className="absolute top-[12%] lg:top-[12.5%] dark:top-[16%] dark:lg:top-[16.5%] lg:-left-[5%] inset-x-0 flex justify-center gap-4 sm:gap-8 lg:gap-24 opacity-20 dark:opacity-100 z-20 pointer-events-none dark:mix-blend-difference max-sm:mt-13">
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block pr-8 text-[4rem] sm:text-[7rem] lg:text-[11rem] font-serif italic text-slate-800 dark:text-white leading-tight dark:backdrop-grayscale"
        >
          Hey, there
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative flex flex-col items-center justify-center h-full min-h-[70vh] pt-12 max-sm:pt-0 lg:pt-32">

        {/* Central Image and Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col justify-center items-center w-full max-w-[800px] pointer-events-none mt-6 max-sm:-mt-16 sm:mt-12 lg:mt-0 lg:pt-16 shrink-0"
        >
          <div className="relative flex flex-col items-center">
            {/* Floating Skill Badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-[35%] max-sm:top-[80%] -left-[10%] max-sm:left-[-1%] sm:-left-[25%] lg:-left-[10%] bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/50 rounded-2xl px-4 max-sm:px-3 py-2 max-sm:py-1.5 md:px-5 md:py-3 font-bold text-xs max-sm:text-[10px] md:text-sm text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 pointer-events-auto z-50"
            >
              Java
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute bottom-[85%] max-sm:bottom-auto max-sm:top-[10%] lg:bottom-[5%] -left-[25%] max-sm:left-auto max-sm:-right-[2%] sm:-left-[25%] lg:-left-[20%] xl:-left-[6%] bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/50 rounded-2xl px-4 max-sm:px-3 py-2 max-sm:py-1.5 md:px-5 md:py-3 font-bold text-xs max-sm:text-[10px] md:text-sm text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 pointer-events-auto z-50"
            >
              Full Stack
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute top-[40%] max-sm:top-[45%] -right-[5%] max-sm:-right-[2%] sm:-right-[50%] lg:-right-[-7%] bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/50 rounded-2xl px-4 max-sm:px-3 py-2 max-sm:py-1.5 md:px-5 md:py-3 font-bold text-xs max-sm:text-[10px] md:text-sm text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 pointer-events-auto z-50"
            >
              AI / ML
            </motion.div>

            <img
              src="/profile2_nobg.png"
              alt="Mohamed Musthaba"
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] relative z-10 max-sm:scale-[1.20] lg:scale-125 xl:scale-125 origin-bottom translate-y-8 lg:translate-y-16 xl:translate-y-24"
            />

            <div className="absolute top-[30%] sm:top-[30%] lg:top-[30%] translate-y-8 lg:translate-y-16 xl:translate-y-24 rotate-[350deg] lg:rotate-[352deg] z-20 w-full flex flex-col items-center justify-center pointer-events-none gap-2 sm:gap-4 lg:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-4 pointer-events-auto scale-[0.8] max-sm:scale-[0.65] sm:scale-90 lg:scale-100 max-sm:-mt-1 max-sm:rotate-2"
              >
                <a href="/Musthaba_Resume.pdf" download="Musthaba_Resume.pdf" className="px-5 py-2 sm:px-6 sm:py-2.5 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center border border-white/10 shadow-blue-500/30">
                  Download CV
                </a>
                <a href="https://github.com/MusthabaSM" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/mohamed-musthaba" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 bg-[#0A66C2] text-white rounded-full hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                  <FaLinkedinIn size={20} />
                </a>
              </motion.div>

            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mt-32 max-sm:mt-12 lg:mt-48 xl:mt-56 z-20 pb-4 w-full">
          <motion.h1
            key={loopKey}
            className="absolute top-[86%] max-sm:static max-sm:mt-4 text-5xl max-sm:text-4xl sm:text-7xl lg:text-[6rem] xl:text-[7rem] font-mono font-bold tracking-normal text-slate-900 dark:text-white drop-shadow-2xl text-center flex justify-center w-full"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {"I am Musthaba".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

      </div>
    </section>
  );
}