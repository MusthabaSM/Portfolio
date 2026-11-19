"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "Solidity"]
  },
  {
    title: "Frameworks & Tools",
    icon: "⚡",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Git"]
  },
  {
    title: "Specializations",
    icon: "🧠",
    skills: ["Machine Learning", "Explainable AI", "Blockchain", "Full Stack"]
  }
];



export default function Skills() {
  return (
    <section id="skills" className="py-2 md:py-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Core <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            The tools, languages, and frameworks I use to build scalable applications.
          </p>
        </div>

        {/* Mobile View: Auto-scrolling Marquee */}
        <div className="md:hidden overflow-hidden -mx-6 relative">
          <motion.div 
            className="flex gap-4 w-max px-6 pb-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          >
            {[...skillCategories, ...skillCategories].map((category, index) => (
              <motion.div
                key={`${category.title}-${index}`}
                aria-hidden={index >= skillCategories.length}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.08, y: -6, rotate: 1.5 }}
                className="cursor-pointer rounded-[2.5rem] p-6 group w-[280px] flex-shrink-0 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-slate-700/50 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-white/80 dark:hover:bg-slate-700/60 hover:border-blue-400/50 dark:hover:border-blue-400/50 hover:shadow-[0_12px_24px_rgba(59,130,246,0.15),inset_0_1px_1px_rgba(255,255,255,1)] dark:hover:shadow-[0_12px_24px_rgba(59,130,246,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] [transition-property:color,background-color,border-color,box-shadow] duration-300 ease-in-out"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-[13px] font-medium rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden md:flex justify-center items-stretch gap-6 w-full mt-16">
          {skillCategories.map((category, index) => {
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.05, zIndex: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
                className="cursor-pointer flex-1 max-w-[360px] rounded-[3rem] p-8 group bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/60 dark:border-slate-700/50 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-white/80 dark:hover:bg-slate-700/60 hover:border-blue-400/50 dark:hover:border-blue-400/50 hover:shadow-[0_12px_24px_rgba(59,130,246,0.15),inset_0_1px_1px_rgba(255,255,255,1)] dark:hover:shadow-[0_12px_24px_rgba(59,130,246,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)] [transition-property:color,background-color,border-color,box-shadow] duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 text-[14px] font-semibold rounded-full bg-slate-100/80 dark:bg-white/5 border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-sm transition-colors hover:bg-slate-200 dark:hover:bg-white/10 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}