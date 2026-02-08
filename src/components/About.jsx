import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 mix-blend-overlay z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                            alt="Ichha Kumari"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Status Badge */}
                        <div className="absolute top-8 left-8 glass px-6 py-3 rounded-2xl z-20 flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span className="text-xs uppercase tracking-widest font-bold">Open for Innovation</span>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] -z-10" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 blur-[80px] -z-10" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-2 text-primary font-medium mb-4">
                        <div className="w-12 h-[1px] bg-primary" />
                        <span>The Mind Behind</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
                        Merging <span className="text-gradient">Logic</span> with Pure <span className="text-gradient">Elegance.</span>
                    </h2>

                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
                        <p>
                            I'm <span className="text-white font-medium">Ichha Kumari</span>, a digital architect who believes that every line of code should contribute to a seamless, luxurious user experience.
                        </p>
                        <p>
                            With a deep foundation in <span className="text-white font-medium">React, Django, and AI Integration</span>, I bridge the gap between complex backend systems and sophisticated, high-end frontends. My goal is to build digital products that not only work perfectly but also feel premium.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="glass-dark p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Target className="text-primary" size={24} />
                            </div>
                            <h4 className="text-white font-bold mb-2">Strategy Driven</h4>
                            <p className="text-sm text-gray-500">Aligning technical decisions with your business objectives.</p>
                        </div>
                        <div className="glass-dark p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Zap className="text-secondary" size={24} />
                            </div>
                            <h4 className="text-white font-bold mb-2">High Performance</h4>
                            <p className="text-sm text-gray-500">Optimizing every millisecond for a flawless experience.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
