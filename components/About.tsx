"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 2500); // 1s wait + 1.5s transition time

    return () => clearInterval(interval);
  }, []);

  const cards = [
    { icon: "🎓", title: "Education", desc: "B.Tech IT Graduate" },
    { icon: "💻", title: "Engineering", desc: "Full Stack Development" },
    { icon: "🧠", title: "AI / ML", desc: "Machine Learning & Explainable AI" },
    { icon: "⛓️", title: "Web3", desc: "Smart Contracts & DApps" }
  ];

  const positions = [
    { top: "0%", left: "0%" },
    { top: "0%", left: "53%" },
    { top: "53%", left: "53%" },
    { top: "53%", left: "0%" }
  ];

  return (
    <section id="about" className="py-2 md:py-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-6">
              <span className="text-xs font-medium tracking-widest uppercase text-slate-600 dark:text-slate-300">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Building <br className="hidden md:block" />
              Intelligent <span className="gradient-text">Solutions</span>
            </h2>

            <div className="mt-8 space-y-6">
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                I am Mohamed Musthaba S M, a B.Tech Information Technology graduate passionate about building software products at the intersection of robust engineering, Artificial Intelligence, and Blockchain technology. I thrive on solving complex problems and transforming architectural concepts into scalable, practical applications.
              </p>
            </div>
          </motion.div>

          {/* Rotating Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full h-[400px] sm:h-[450px] md:h-[500px]"
          >
            {cards.map((item, i) => {
              const positionIndex = (i + offset) % 4;
              
              return (
                <motion.div 
                  key={item.title} 
                  animate={positions[positionIndex]}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute w-[47%] h-[47%] glass-card rounded-[2rem] p-4 sm:p-6 floating-card group flex flex-col justify-center"
                >
                  <div aria-hidden="true" className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}