"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SpaceBackground() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate static stars once on mount to avoid hydration mismatch
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] hidden dark:block overflow-hidden bg-slate-950 pointer-events-none">
      {/* Deep Space Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#020617] via-slate-950 to-black opacity-100" />
      
      {/* Starfield */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}



      {/* Shooting Star 1 */}
      <motion.div
        className="hidden md:block absolute top-0 right-1/4 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent -rotate-45"
        animate={{
          x: [100, -1500],
          y: [-100, 1500],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 6,
          ease: "linear",
        }}
      />

      {/* Shooting Star 2 */}
      <motion.div
        className="hidden md:block absolute top-1/3 right-1/4 w-[150px] h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent -rotate-45"
        animate={{
          x: [100, -1000],
          y: [-100, 1000],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 10,
          delay: 4,
          ease: "linear",
        }}
      />
           
      {/* Subtle Space Nebulae (Blue/Cyan only as requested) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-sky-900/20 rounded-full blur-[150px]" />
    </div>
  );
}
