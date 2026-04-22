import { Globe, Mail, MessageCircle, Phone, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 text-slate-300 lg:py-16">
      <div className="mx-auto grid max-w-[88rem] gap-8 px-4 md:grid-cols-3 lg:grid-cols-[1.1fr_0.7fr_1fr] lg:gap-12">
        <div>
          <h3 className="mb-4 text-3xl text-white lg:text-4xl">AstroVeda</h3>
          <p className="max-w-md">Ancient wisdom for modern souls. Guiding you towards your highest potential.</p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-amber-300">Home</a></li>
            <li><a href="#about" className="hover:text-amber-300">About</a></li>
            <li><a href="#services" className="hover:text-amber-300">Services</a></li>
            <li><a href="#contact" className="hover:text-amber-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Connect</h4>
          <div className="flex space-x-4 mb-4">
            <Globe className="cursor-pointer hover:text-amber-300" />
            <MessageCircle className="cursor-pointer hover:text-amber-300" />
            <Send className="cursor-pointer hover:text-amber-300" />
            <Mail className="cursor-pointer hover:text-amber-300" />
          </div>
          <p><Phone size={16} className="inline mr-2" /> +91 98765 43210</p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-[88rem] border-t border-slate-800 pt-8 text-center">
        <p>© 2025 AstroVeda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;