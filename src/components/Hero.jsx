import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: 1 + (i % 3),
  top: (i * 17) % 100,
  left: (i * 29) % 100,
  duration: 2 + (i % 4),
  delay: (i % 6) * 0.6,
}));

const Hero = () => {
  const MotionDiv = motion.div;

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-teal-950 to-slate-900"
    >
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <MotionDiv
            key={star.id}
            className="absolute rounded-full bg-amber-50"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[88rem] px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-10 lg:text-left"
        >
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal-100">
              Soulful Astrology Studio
            </p>
            <h1 className="mb-5 text-5xl font-bold text-white md:text-7xl lg:text-8xl lg:leading-[1.02]">
              Discover Your
              <span className="block bg-linear-to-r from-amber-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                Cosmic Blueprint
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-200 md:text-2xl lg:mx-0 lg:max-w-3xl">
              Vedic Astrology • Tarot • Kundli • Remedial Solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
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
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/90 lg:justify-start">
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 15+ Years Experience</div>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 5000+ Clients</div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-3xl border border-teal-200/30 bg-white/10 p-7 backdrop-blur-sm">
              <p className="mb-2 text-sm uppercase tracking-[0.18em] text-teal-100">Today&apos;s Focus</p>
              <h3 className="mb-4 text-3xl font-bold text-white">Clarity, Confidence, Alignment</h3>
              <p className="mb-6 text-slate-200">Receive actionable astrological guidance tailored to your career, relationships, and personal growth journey.</p>
              <div className="space-y-3 text-sm text-slate-100">
                <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">Personalized one-on-one consultation</div>
                <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">Practical remedies you can start today</div>
                <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">Detailed follow-up guidance summary</div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;