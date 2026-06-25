"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectSlideshow = ({ images, title }: { images: string[], title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2 seconds per image
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </AnimatePresence>
    </div>
  );
};

interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  github: string;
  badge?: string;
  color: string;
  borderColor: string;
  images?: string[];
  image?: string;
}

const featuredProjects: ProjectData[] = [
  {
    title: "Explainable AI Loan Approval System",
    description: "An intelligent loan approval platform combining Machine Learning and Explainable AI (SHAP) to provide transparent and trustworthy financial decisions with real-time risk assessment.",
    tech: ["Python", "Machine Learning", "SHAP", "Scikit-Learn", "FastAPI", "React"],
    github: "https://github.com/MusthabaSM/Loan_Approval",
    badge: "Flagship Project",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20",
    images: ["/project_xai.png", "/project_xai_2.png", "/project_xai_3.png"]
  },
  {
    title: "Decentralized Voting System",
    description: "A blockchain-powered voting platform leveraging Ethereum smart contracts. Delivers cryptographically secure, transparent and tamper-resistant elections with automated tallying.",
    tech: ["Solidity", "Ethereum", "Hardhat", "React", "Web3.js", "Tailwind CSS"],
    github: "https://github.com/MusthabaSM/Decentralized-Voting-System",
    badge: "Flagship Project",
    color: "from-slate-800/20 to-black/20",
    borderColor: "border-black/30 dark:border-white/20",
    images: ["/project_dvs_1.png", "/project_dvs_2.png", "/project_dvs_3.png", "/project_dvs_4.png"]
  },
];

const secondaryProjects = [
  {
    title: "AI Technical Debt Predictor",
    description: "Predictive machine learning pipeline that analyzes codebases to identify technical debt risks and software maintainability degradation before they occur.",
    tech: ["Python", "XGBoost", "Git Analytics"],
  },
  {
    title: "Real-Time Call Translator",
    description: "Speech-to-speech translation platform providing real-time transcription and seamless multilingual communication across different languages.",
    tech: ["WebSockets", "Whisper AI", "React"],
  },
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="py-2 md:py-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-slate-600 dark:text-slate-300">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            A curated showcase of AI and Web3 applications built to solve complex, real-world engineering problems.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-32">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Mock Browser/App Window */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative aspect-[16/10] rounded-[1.5rem] p-1 glass-card shadow-2xl transition-all duration-500 hover:shadow-blue-500/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent dark:from-white/5 z-10 rounded-[1.5rem] pointer-events-none" />
                  
                  {/* Window Bar */}
                  <div className="absolute top-0 inset-x-0 h-10 border-b border-black/5 dark:border-white/10 flex items-center px-4 gap-2 z-20">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                  </div>

                  {/* Mock Content Area */}
                  <div className="w-full h-full rounded-[1.2rem] overflow-hidden relative bg-slate-100 dark:bg-slate-900">
                    {project.images && project.images.length > 0 ? (
                      <ProjectSlideshow images={project.images} title={project.title} />
                    ) : project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover object-center" 
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-6">
                          <div className="w-16 h-16 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-md mb-4 mx-auto flex items-center justify-center border border-white/30">
                            <FiExternalLink className="text-slate-800 dark:text-white w-8 h-8 opacity-70" />
                          </div>
                          <p className="text-slate-800 dark:text-white font-medium opacity-80 tracking-wide">Application Preview</p>
                          <p className="text-xs text-slate-700 dark:text-white/60 mt-2 max-w-[250px] mx-auto">Design ready for future screenshot integration.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wider uppercase mb-6">
                  {project.badge}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                  {project.title}
                </h3>
                <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-900 bg-white dark:bg-slate-900 dark:text-white border border-slate-200 dark:border-white/20 transition-all duration-200 rounded-full hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Projects */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Other Explorations
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {secondaryProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "0px 0px -15% 0px" }}
                style={{ zIndex: secondaryProjects.length - index, position: 'relative' }}
                className="h-full"
              >
                <motion.div
                  variants={{
                    hidden: isMobile 
                      ? { y: index === 0 ? 40 : "-110%", opacity: index === 0 ? 0 : 1 }
                      : { y: 40, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-card rounded-[2rem] p-8 md:p-10 floating-card group flex flex-col h-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl"
                >
                  <div className="mock-window-glow" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tech.map((item) => (
                      <span key={item} className="text-xs font-medium text-slate-500 dark:text-slate-500">
                        {item} {project.tech[project.tech.length -1] !== item && "•"}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}