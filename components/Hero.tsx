"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-10 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/60 via-slate-50 to-slate-50 dark:bg-none">
      
      {/* Availability badge */}
      <div className="absolute top-[90px] lg:top-[100px] inset-x-0 flex justify-center z-20 pointer-events-none">
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
      <div className="absolute top-[16%] lg:top-[14%] inset-x-0 flex justify-center gap-4 sm:gap-8 lg:gap-24 opacity-30 z-0 pointer-events-none">
        <motion.span 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[4rem] sm:text-[7rem] lg:text-[11rem] font-serif italic text-slate-800 dark:text-slate-200 leading-tight"
        >
          Hey,
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[4rem] sm:text-[7rem] lg:text-[11rem] font-serif italic text-slate-800 dark:text-slate-200 leading-tight mt-8 sm:mt-12 lg:mt-16"
        >
          there
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative flex flex-col lg:flex-row items-center justify-center h-full min-h-[70vh]">
        
        {/* Central Image and Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col justify-center items-center w-full pointer-events-none mt-28 sm:mt-32 lg:mt-0 lg:pt-16"
        >
          <div className="relative flex flex-col items-center">
            {/* Floating Skill Badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-[35%] -left-[10%] sm:-left-[25%] lg:-left-[1%] bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/50 rounded-2xl px-4 py-2 md:px-5 md:py-3 font-bold text-xs md:text-sm text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 pointer-events-auto z-30"
            >
              Java
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute bottom-[20%] -left-[10%] sm:-left-[20%] lg:-left-[25%] bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/50 rounded-2xl px-4 py-2 md:px-5 md:py-3 font-bold text-xs md:text-sm text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 pointer-events-auto z-30"
            >
              Full Stack
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute top-[40%] -right-[5%] sm:-right-[50%] lg:-right-[-10%] bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:shadow-black/50 rounded-2xl px-4 py-2 md:px-5 md:py-3 font-bold text-xs md:text-sm text-slate-900 dark:text-white border border-slate-100 dark:border-slate-700 pointer-events-auto z-30"
            >
              AI / ML
            </motion.div>

            <img
              src="/Profile7_nobg.png"
              alt="Mohamed Musthaba"
              className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] xl:max-w-[520px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] z-10"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                maskComposite: "intersect"
              }}
            />

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-5xl sm:text-6xl lg:text-[5rem] font-serif italic font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 drop-shadow-xl pointer-events-auto text-center"
            >
              I am Musthaba
            </motion.h1>
          </div>
        </motion.div>

        {/* Right Side Content (Mobile: Bottom, PC: Absolute Right overlapping image lightly) */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right z-20 w-full lg:w-auto mt-12 lg:mt-0 lg:absolute lg:right-0 xl:right-8 lg:top-[60%] lg:-translate-y-1/2 pointer-events-none">
          {/* Removed old description text */}

          <motion.h2 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-[3rem] xl:text-[4rem] font-black uppercase tracking-tighter leading-[0.9] text-slate-900 dark:text-white drop-shadow-2xl pointer-events-auto"
          >
            SOFTWARE <br /> DEVELOPER
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-4 mt-6 lg:mt-10 pointer-events-auto"
          >
            <a href="https://github.com/MusthabaSM" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/mohamed-musthaba" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
              <FaLinkedinIn size={20} />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}