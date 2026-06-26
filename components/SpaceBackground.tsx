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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] hidden dark:block overflow-hidden bg-black pointer-events-none">
      {/* Deep Space Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-950 via-black to-black opacity-100" />
      
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

    </div>
  );
}
