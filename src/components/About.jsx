const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-[88rem] items-center gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[420px]">
          <div className="absolute -inset-3 rounded-4xl bg-linear-to-br from-teal-400/30 to-amber-400/25 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=900&q=80"
            alt="Astrologer portrait"
            className="relative aspect-4/5 w-full rounded-4xl object-cover shadow-2xl"
          />
        </div>
        <div className="rounded-3xl border border-teal-100 bg-white/85 p-8 shadow-xl shadow-teal-950/5 lg:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">About</p>
          <h2 className="mb-5 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">Ancient Insight, Practical Guidance</h2>
          <p className="mb-4 text-lg leading-relaxed text-slate-700">
            With over 15 years of experience in Vedic astrology, I have guided thousands toward clarity, confidence, and purposeful decisions.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-slate-700">
            Certified by the Indian Council of Astrological Sciences, with focused expertise in career, relationships, and emotional well-being.
          </p>
          <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <div className="rounded-xl bg-teal-50 px-4 py-3 font-medium">15+ years of consulting</div>
            <div className="rounded-xl bg-amber-50 px-4 py-3 font-medium">5000+ private sessions</div>
            <div className="rounded-xl bg-teal-50 px-4 py-3 font-medium">Holistic remedies & rituals</div>
            <div className="rounded-xl bg-amber-50 px-4 py-3 font-medium">Confidential, empathetic support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;