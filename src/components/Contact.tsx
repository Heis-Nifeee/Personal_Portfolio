import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, ArrowUpRight, FileText } from 'lucide-react';

const socialLinks = [
  { name: 'Email', icon: <Mail />, href: 'mailto:dolaponifemi941@gmail.com', color: 'hover:text-cyan-400' },
  { name: 'GitHub', icon: <Github />, href: 'https://github.com/Heis-Nifeee', color: 'hover:text-white' },
  { name: 'Twitter', icon: <Twitter />, href: 'https://twitter.com/heis_nifeee', color: 'hover:text-sky-400' },
  { name: 'LinkedIn', icon: <Linkedin />, href: 'https://linkedin.com/in/olojede-jahnifemi', color: 'hover:text-blue-400' },
  { name: 'Resume', icon: <FileText />, href: '/resume.pdf', color: 'hover:text-emerald-400' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0e17]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's build something legendary.</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about Web3, my inbox is always open.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`group p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${link.color} hover:border-current hover:bg-white/[0.08]`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="text-slate-400 group-hover:text-inherit transition-colors">
                    {React.cloneElement(link.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div className="flex items-center gap-1 font-mono text-sm">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm font-mono">
            <p>© 2026 Olojede Jahnifemi.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
