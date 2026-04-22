import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Priya Sharma', text: 'His predictions about my career change were incredibly accurate. I got the job within 3 months as foretold.', rating: 5 },
  { name: 'Rajesh Mehta', text: 'The kundli matching helped us avoid major compatibility issues. Highly recommend his services.', rating: 5 },
  { name: 'Anjali Nair', text: 'Tarot reading gave me clarity during a difficult phase. Very empathetic and precise.', rating: 4 },
  { name: 'Vikram Singh', text: 'Vastu consultation transformed the energy of my home. Feel much more peaceful now.', rating: 5 },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Testimonials</p>
          <h2 className="text-4xl font-bold text-slate-900">Client Stories</h2>
          <p className="mt-2 text-slate-600">What people say about their experience</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full rounded-2xl border border-teal-100/70 bg-white/90 p-6 shadow-md shadow-teal-950/5">
                <div className="mb-4 flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} fill={i < t.rating ? "currentColor" : "none"} className="w-4 h-4" />)}
                </div>
                <p className="italic text-slate-700">"{t.text}"</p>
                <h4 className="mt-4 font-bold text-teal-700">— {t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;