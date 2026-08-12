import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Twitter, Linkedin, FileText } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0e17]/80 backdrop-blur-md border-b border-cyan-500/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold tracking-tighter text-white group"
        >
          NIFEMI<span className="text-cyan-400 group-hover:animate-pulse">.</span>SPACE
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-mono text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FileText size={16} />
              CV
            </a>
            <a 
              href="#contact"
              className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#0a0e17] border-b border-cyan-500/10 p-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono text-lg text-slate-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noreferrer"
            className="font-mono text-lg text-cyan-400 flex items-center gap-2"
          >
            <FileText size={20} />
            View CV
          </a>
          <div className="flex gap-4 pt-4 border-t border-slate-800">
            <a href="https://github.com/Heis-Nifeee" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400"><Github size={20} /></a>
            <a href="https://twitter.com/heis_nifeee" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400"><Twitter size={20} /></a>
            <a href="https://linkedin.com/in/olojede-jahnifemi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400"><Linkedin size={20} /></a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
