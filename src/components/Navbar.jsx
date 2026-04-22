import { Menu, Sparkles, X } from 'lucide-react';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Services', 'Horoscope', 'Testimonials', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 border-b border-teal-100/80 bg-white/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Sparkles className="h-6 w-6 text-teal-700" />
            <span className="ml-2 text-2xl font-bold bg-linear-to-r from-teal-700 to-amber-600 bg-clip-text text-transparent">
              AstroVeda
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-700 hover:text-teal-700 transition duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button className="text-slate-700" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-teal-100 bg-white/95"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-700"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;