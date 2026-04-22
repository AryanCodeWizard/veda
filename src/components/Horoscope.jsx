import { CalendarDays, Loader } from 'lucide-react';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const zodiacs = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

const Horoscope = () => {
  const [selected, setSelected] = useState('aries');
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchHoroscope = async (sign) => {
    try {
      const res = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
        method: 'POST'
      });
      const data = await res.json();
      setHoroscope(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHoroscope(selected);
  }, [selected]);

  return (
    <section id="horoscope" className="py-20 bg-linear-to-r from-cyan-50/80 to-amber-50/70">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Daily Insight</p>
          <h2 className="text-4xl font-bold text-slate-900">Daily Horoscope</h2>
          <p className="text-slate-600 mt-2">Select your zodiac sign</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {zodiacs.map((sign) => (
            <button
              key={sign}
              onClick={() => {
                setLoading(true);
                setSelected(sign);
              }}
              className={`px-4 py-2 rounded-full capitalize transition ${
                selected === sign
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-teal-100'
              }`}
            >
              {sign}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-12"><Loader className="animate-spin text-teal-700" size={40} /></div>
        ) : horoscope && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border border-teal-100 bg-white/95 p-6 shadow-xl shadow-teal-950/5 md:p-8"
          >
            <div className="mb-4 flex items-center gap-2 text-teal-700">
              <CalendarDays />
              <span className="font-semibold">{horoscope.current_date}</span>
            </div>
            <p className="text-slate-800 text-lg leading-relaxed">{horoscope.description}</p>
            <div className="mt-6 grid gap-4 text-sm md:grid-cols-2">
              <div><span className="font-bold">Mood:</span> {horoscope.mood}</div>
              <div><span className="font-bold">Lucky Color:</span> {horoscope.color}</div>
              <div><span className="font-bold">Lucky Number:</span> {horoscope.lucky_number}</div>
              <div><span className="font-bold">Compatible Sign:</span> {horoscope.compatibility}</div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Horoscope;