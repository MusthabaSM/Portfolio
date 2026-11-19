"use client";

import { motion } from "framer-motion";

export default function BackgroundDecorations() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
      
      {/* Top Left: Tech Dots Pattern */}
      <div className="absolute top-10 left-10 w-64 h-64 opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern-1" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" className="fill-slate-600 dark:fill-slate-400" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern-1)" />
        </svg>
      </div>

      {/* Top Right: Code Brackets */}
      <div className="absolute top-32 right-12 md:right-32 flex gap-8 opacity-40 select-none">
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="text-6xl md:text-8xl font-mono text-blue-500/50 font-black"
        >
          {"{ }"}
        </motion.div>
      </div>

      {/* Center Left: Rotating Crosshair */}
      <div className="absolute top-1/2 left-8 md:left-20 opacity-30">
         <motion.div
           animate={{ rotate: 360 }}
           transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
           className="text-4xl md:text-6xl font-mono text-slate-500 font-light"
         >
           +
         </motion.div>
      </div>

      {/* Bottom Right: Abstract Node Network */}
      <div className="absolute -bottom-10 -right-10 w-80 h-80 md:w-96 md:h-96 opacity-40">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="stroke-slate-500 dark:stroke-slate-400">
          <circle cx="50" cy="50" r="4" className="fill-blue-500 stroke-none" />
          <circle cx="150" cy="70" r="6" className="fill-blue-500 stroke-none" />
          <circle cx="100" cy="150" r="5" className="fill-blue-500 stroke-none" />
          <circle cx="30" cy="130" r="3" className="fill-blue-500 stroke-none" />
          
          <line x1="50" y1="50" x2="150" y2="70" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="150" y1="70" x2="100" y2="150" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="100" y1="150" x2="50" y2="50" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="50" x2="30" y2="130" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="30" y1="130" x2="100" y2="150" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Bottom Left: Hexagon Blockchain Symbol */}
      <div className="absolute bottom-20 left-20 md:left-32 opacity-30">
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" strokeWidth="2" className="stroke-slate-600 dark:stroke-slate-400" />
            <polygon points="50,15 80,30 80,70 50,85 20,70 20,30" fill="none" strokeWidth="1.5" strokeDasharray="6 4" className="stroke-blue-500" />
          </svg>
        </motion.div>
      </div>

    </div>
  );
}
