import { CheckCircle, Send } from 'lucide-react';

import axios from 'axios';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const MotionDiv = motion.div;

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/contact', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Contact</p>
          <h2 className="text-4xl font-bold text-slate-900">Seek Guidance</h2>
          <p className="mt-2 text-slate-600">Have questions? Let’s connect.</p>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-teal-100 bg-white/90 p-6 shadow-xl shadow-teal-950/5 md:p-8"
        >
          {submitted && (
            <div className="mb-6 flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
              <CheckCircle /> Message sent successfully! I'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input
                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Valid email required</p>}
            </div>
            <div>
              <input
                {...register('phone')}
                placeholder="Phone (optional)"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div>
              <textarea
                {...register('message', { required: 'Please write your query' })}
                rows="5"
                placeholder="Your message..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-teal-600 focus:ring-2 focus:ring-teal-200"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-teal-700 to-cyan-700 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-teal-700/25"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ContactForm;