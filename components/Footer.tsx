export default function Footer() {
  return (
    <footer className="py-12 px-6 relative z-10 mt-12 border-t border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-black/20 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-lg font-bold tracking-widest text-slate-900 dark:text-white uppercase">
            Musthaba
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 font-medium">
            Software Developer • AI/ML • Web3
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Built with <span className="text-slate-900 dark:text-white font-semibold">Next.js</span>, <span className="text-slate-900 dark:text-white font-semibold">Tailwind CSS</span> & <span className="text-slate-900 dark:text-white font-semibold">Framer Motion</span>
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
            © {new Date().getFullYear()} Mohamed Musthaba S M. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}