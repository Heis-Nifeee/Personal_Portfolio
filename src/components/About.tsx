import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0e17]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-cyan-500/20">
              <img 
                src="/about-femi.png" 
                alt="Olojede Jahnifemi"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">The Human Behind the Code</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a frontend developer who builds clean, fast, responsive web apps with React, Next.js, and TypeScript. I've shipped client sites, dashboards, and full-stack products end to end.
              </p>
              <p>
                I'm also a Web3 developer — I write smart contracts in Solidity, work with EVM tooling, and build dApp interfaces across DeFi and governance projects.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-6 mb-8">
              <div>
                <div className="text-2xl font-bold text-white">2+</div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">Lagos</div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Location</div>
              </div>
            </div>

            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <FileText size={18} className="text-cyan-400" />
              View Full Resume
              <Download size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
