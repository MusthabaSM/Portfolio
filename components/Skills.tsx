"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "center center"]
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-105%"]);
  const leftRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "105%"]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [0, 6]);

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
              <div
                key={`${category.title}-${index}`}
                className="glass-card rounded-[2rem] p-5 floating-card group w-[260px] flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl mb-4">
                  {category.icon}
                </div>
                
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
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop View: Fan-out Animation */}
        <div ref={containerRef} className="hidden md:flex justify-center items-center relative h-[500px] w-full mt-16 perspective-[1000px]">
          {skillCategories.map((category, index) => {
            const isLeft = index === 0;
            const isCenter = index === 1;
            const isRight = index === 2;
            
            const style = isLeft 
              ? { x: leftX, rotate: leftRotate, zIndex: 10, transformOrigin: "bottom right" }
              : isRight
                ? { x: rightX, rotate: rightRotate, zIndex: 10, transformOrigin: "bottom left" }
                : { zIndex: 20 };

            return (
              <motion.div
                key={category.title}
                style={style}
                whileHover={{ y: -20, scale: 1.03, zIndex: 30 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute w-[320px] lg:w-[360px] glass-card rounded-[2rem] p-8 group shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)] bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/60 dark:border-white/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-sky-400/20 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-inner">
                  {category.icon}
                </div>
                
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