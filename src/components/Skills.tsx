import React from 'react';
    import { motion } from 'framer-motion';
    import { Code2, Database, Globe } from 'lucide-react';

    const skillGroups = [
      {
        title: "Frontend",
        icon: <Globe className="text-cyan-400" />,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
      },
      {
        title: "Blockchain",
        icon: <Code2 className="text-violet-400" />,
        skills: ["Solidity", "EVM", "viem", "ethers.js", "Hardhat", "Foundry"]
      },
      {
        title: "Backend / Infra",
        icon: <Database className="text-emerald-400" />,
        skills: ["Supabase", "Sanity CMS", "Resend", "Vercel", "Cloudflare"]
      }
    ];

    const Skills = () => {
      return (
        <section id="skills" className="py-24 bg-[#0a0e17] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Modern tools and protocols I use to bring decentralized visions to life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillGroups.map((group, idx) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Skills;