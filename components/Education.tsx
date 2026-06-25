"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2022 — 2026",
    title: "B.Tech Information Technology",
    institution: "Sona College of Technology",
    description: "Focused on Software Development, Artificial Intelligence, Machine Learning, Blockchain and Full Stack Development.",
  },
  {
    year: "2021 — 2022",
    title: "Higher Secondary Education",
    institution: "Rose Mary Matric Higher Secondary School",
    description: "Built a strong foundation in mathematics, science and analytical thinking.",
  },
  {
    year: "2019 — 2020",
    title: "Secondary School Education",
    institution: "Little Flower Matric Higher Secondary School",
    description: "Developed academic fundamentals and problem-solving skills.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-2 md:py-10 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            My educational background and learning path.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-6 md:gap-8 perspective-1000"
        >
          {education.map((item, index) => {
            // Animate from a stacked position in the center
            const xOffset = index === 0 ? "100%" : index === 2 ? "-100%" : "0%";
            const zIndex = index === 1 ? 30 : 20 - index * 10;
            
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, x: xOffset, scale: 0.8, z: -100 },
                  visible: { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1, 
                    z: 0,
                    transition: { duration: 0.9, delay: 0.2 + (index * 0.2), ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="glass-card rounded-[2rem] p-8 md:p-10 floating-card group relative flex flex-col justify-center min-h-[300px]"
                style={{ zIndex, transformStyle: "preserve-3d" }}
              >
                <div className="mock-window-glow" />
                
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {item.institution}
                </p>

                <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}