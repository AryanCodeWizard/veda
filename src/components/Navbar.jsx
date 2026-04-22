import { Menu, Sparkles, X } from 'lucide-react';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const MotionDiv = motion.div;

  const navLinks = ['Home', 'About', 'Services', 'Horoscope', 'Testimonials', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 border-b border-teal-100/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex items-center">
            <Sparkles className="h-6 w-6 text-teal-700" />
            <span className="ml-2 text-2xl font-bold bg-linear-to-r from-teal-700 to-amber-600 bg-clip-text text-transparent">
              AstroVeda
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative text-slate-700 transition duration-300 hover:text-teal-700 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-teal-700 after:transition-all after:duration-300 hover:after:w-full"
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
        <MotionDiv
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
        </MotionDiv>
      )}
    </nav>
  );
};

export default Navbar;