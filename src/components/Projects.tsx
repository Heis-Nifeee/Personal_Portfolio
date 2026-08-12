import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { ExternalLink, Github } from 'lucide-react';

    type Category = 'All' | 'Web3 & DeFi' | 'Full-Stack Apps' | 'Client Work';

    interface Project {
      title: string;
      description: string;
      category: Category;
      tech: string[];
      liveUrl?: string;
      githubUrl?: string;
      image: string;
    }

    const projects: Project[] = [
      {
        title: "Gridee",
        description: "Decentralized solar energy platform for Nigerian communities, ERC-20 GRD token.",
        category: "Web3 & DeFi",
        tech: ["React", "Tailwind", "Solidity"],
        liveUrl: "https://gridee.vercel.app",
        githubUrl: "https://github.com/Gridee",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Vault.AI",
        description: "Crypto/Web3 dashboard with AI agent permissions and EIP-712 delegation.",
        category: "Web3 & DeFi",
        tech: ["React", "viem", "MetaMask"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "FlowVault",
        description: "Agentic DeFi auto-investment concept with ERC-4337 account abstraction.",
        category: "Web3 & DeFi",
        tech: ["Solidity", "TypeScript"],
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Flow-State",
        description: "Per-second ride-payment streaming protocol built on Monad.",
        category: "Web3 & DeFi",
        tech: ["Solidity", "React"],
        image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Ares Protocol",
        description: "A decentralized protocol built to enable secure, transparent on-chain interactions.",
        category: "Web3 & DeFi",
        tech: ["Solidity", "React", "TypeScript"],
        githubUrl: "https://github.com/Heis-Nifeee/ARES-protocol",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "FuelSpotter NG",
        description: "Crowd-powered real-time fuel tracker for Lagos.",
        category: "Full-Stack Apps",
        tech: ["Next.js 14", "Supabase", "Leaflet"],
        liveUrl: "https://fuel-spotter-ng.vercel.app",
        githubUrl: "https://github.com/Heis-Nifeee/FuelSpotter-NG-",
        image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "JAMB Smart Study Planner",
        description: "Study planner with quiz engine, XP system, and AI-generated questions.",
        category: "Full-Stack Apps",
        tech: ["React", "Vite", "Tailwind"],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Peoplefirst Partners",
        description: "HR consulting website for a UK-based client.",
        category: "Client Work",
        tech: ["React", "TypeScript", "Sanity CMS"],
        liveUrl: "https://peoplefirstpartnersco.uk",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
      },
      {
        title: "Oje Home of Herbs",
        description: "Digital herbal medicine platform with bookings and payments.",
        category: "Client Work",
        tech: ["Next.js", "Supabase", "Paystack"],
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
      }
    ];

    const Projects = () => {
      const [activeCategory, setActiveCategory] = useState<Category>('All');

      const filteredProjects = activeCategory === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeCategory);

      const categories: Category[] = ['All', 'Web3 & DeFi', 'Full-Stack Apps', 'Client Work'];

      return (
        <section id="projects" className="py-24 bg-[#0a0e17]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Work</h2>
                <p className="text-slate-400 max-w-xl">A collection of decentralized protocols, full-stack applications, and client solutions.</p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                      activeCategory === cat 
                        ? 'bg-cyan-500 text-[#0a0e17] font-bold' 
                        : 'bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.2)] transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map(t => (
                          <span key={t} className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-mono uppercase tracking-wider">
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-400 text-sm mb-6 line-clamp-2">{project.description}</p>
                      
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="flex items-center gap-4">
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                            >
                              <Github size={16} />
                              Source
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      );
    };

    export default Projects;
