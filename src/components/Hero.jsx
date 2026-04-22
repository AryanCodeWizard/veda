import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-teal-950 to-slate-900"
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-50"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal-100">
            Soulful Astrology Studio
          </p>
          <h1 className="mb-5 text-5xl font-bold text-white md:text-7xl">
            Discover Your
            <span className="block bg-linear-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Cosmic Blueprint
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-200 md:text-2xl">
            Vedic Astrology • Tarot • Kundli • Remedial Solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-amber-500 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400"
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="rounded-full border-2 border-teal-200/70 px-8 py-3 font-semibold text-teal-100 transition hover:bg-teal-200/10"
            >
              Explore Services
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 15+ Years Experience</div>
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 5000+ Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;