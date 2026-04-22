import { Coins, Eye, Gem, Heart, Home, Moon } from 'lucide-react';

import { motion } from 'framer-motion';

const services = [
  { icon: Moon, name: 'Kundli Analysis', desc: 'Detailed birth chart reading with planetary periods' },
  { icon: Heart, name: 'Compatibility', desc: 'Marriage match-making & relationship guidance' },
  { icon: Eye, name: 'Tarot Reading', desc: 'Insights into past, present & future' },
  { icon: Home, name: 'Vastu Consultation', desc: 'Harmonize energies of your space' },
  { icon: Coins, name: 'Wealth Astrology', desc: 'Career & financial prosperity predictions' },
  { icon: Gem, name: 'Remedial Solutions', desc: 'Gemstones, mantras & rituals' },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What I Offer
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ancient wisdom tailored for modern life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-teal-100/70 bg-white/85 p-6 shadow-md shadow-teal-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100 transition group-hover:bg-teal-700">
                <service.icon className="h-7 w-7 text-teal-700 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{service.name}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;