import { Globe, Mail, MessageCircle, Phone, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-3xl text-white mb-4">AstroVeda</h3>
          <p>Ancient wisdom for modern souls. Guiding you towards your highest potential.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-amber-300">Home</a></li>
            <li><a href="#about" className="hover:text-amber-300">About</a></li>
            <li><a href="#services" className="hover:text-amber-300">Services</a></li>
            <li><a href="#contact" className="hover:text-amber-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4 mb-4">
            <Globe className="cursor-pointer hover:text-amber-300" />
            <MessageCircle className="cursor-pointer hover:text-amber-300" />
            <Send className="cursor-pointer hover:text-amber-300" />
            <Mail className="cursor-pointer hover:text-amber-300" />
          </div>
          <p><Phone size={16} className="inline mr-2" /> +91 98765 43210</p>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-800 pt-8 text-center">
        <p>© 2025 AstroVeda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;