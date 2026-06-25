"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="py-2 md:py-10 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl md:rounded-[3rem] p-6 sm:p-10 md:p-20 relative overflow-hidden text-center group"
        >
          {/* Enhanced Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/20 blur-[120px] opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/20 blur-[120px] opacity-60 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-8 mx-auto">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-slate-600 dark:text-slate-300">
                Open to Work
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Let's Build <br className="hidden md:block" />
              <span className="gradient-text">Something Great</span>
            </h2>

            <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              I'm actively looking for software development opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-6 mt-10 md:mt-16 max-w-3xl mx-auto">
              <a
                href="mailto:smmusthaba04@gmail.com"
                className="glass-card rounded-2xl md:rounded-[1.5rem] p-4 md:p-6 floating-card text-center group/card relative overflow-hidden flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-500/10 text-red-500 dark:text-red-400 flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover/card:scale-110 group-hover/card:bg-red-500 group-hover/card:text-white transition-all duration-300">
                  <MdEmail size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-lg">Email</h3>
                <p className="mt-1 text-[10px] md:text-sm text-slate-500 dark:text-slate-400 break-all font-medium hidden md:block">smmusthaba04@gmail.com</p>
              </a>

              <a
                href="https://github.com/MusthabaSM"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl md:rounded-[1.5rem] p-4 md:p-6 floating-card text-center group/card relative overflow-hidden flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover/card:scale-110 group-hover/card:bg-slate-900 dark:group-hover/card:bg-white group-hover/card:text-white dark:group-hover/card:text-slate-900 transition-all duration-300">
                  <FaGithub size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-lg">GitHub</h3>
                <p className="mt-1 text-[10px] md:text-sm text-slate-500 dark:text-slate-400 font-medium hidden md:block">@MusthabaSM</p>
              </a>

              <a
                href="https://linkedin.com/in/mohamed-musthaba"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl md:rounded-[1.5rem] p-4 md:p-6 floating-card text-center group/card relative overflow-hidden flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover/card:scale-110 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all duration-300">
                  <FaLinkedinIn size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-xs md:text-lg">LinkedIn</h3>
                <p className="mt-1 text-[10px] md:text-sm text-slate-500 dark:text-slate-400 font-medium hidden md:block">Mohamed Musthaba</p>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}