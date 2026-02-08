import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <div className="section-padding grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-primary text-sm font-medium mb-8 border border-primary/20"
                    >
                        <Sparkles size={14} className="animate-pulse" />
                        <span>Crafting Digital Excellence</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 font-display">
                        Elevating Brands <br />
                        <span className="text-gradient">Through Code.</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
                        I am Ichha Kumari, a Web Developer & AI Specialist dedicated to building high-end,
                        performance-driven digital experiences that merge luxury with logic.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <Link
                            to="portfolio"
                            smooth={true}
                            duration={500}
                            className="btn-primary flex items-center gap-2 group cursor-pointer"
                        >
                            Explore Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="btn-outline cursor-pointer"
                        >
                            The Designer
                        </Link>
                    </div>

                    <div className="mt-16 flex items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex flex-col">
                            <span className="text-3xl font-display font-bold">3+</span>
                            <span className="text-xs uppercase tracking-widest font-medium">Years Exp.</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-display font-bold">20+</span>
                            <span className="text-xs uppercase tracking-widest font-medium">Projects</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-display font-bold">100%</span>
                            <span className="text-xs uppercase tracking-widest font-medium">Commitment</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 p-8 rounded-[2rem] glass-dark border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] group">
                        {/* Abstract UI Elements */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse" />
                                    <div>
                                        <div className="h-3 w-32 bg-white/20 rounded-full mb-2" />
                                        <div className="h-2 w-20 bg-white/10 rounded-full" />
                                    </div>
                                </div>
                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                    <Sparkles size={16} className="text-primary" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-32 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors p-4">
                                    <div className="h-full w-full border-t-2 border-primary/40 rounded-sm opacity-50" />
                                </div>
                                <div className="h-32 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-colors p-4">
                                    <div className="flex flex-col justify-end h-full">
                                        <div className="h-2 w-full bg-secondary/40 rounded-full mb-2" />
                                        <div className="h-2 w-2/3 bg-secondary/20 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-dark/60 rounded-xl p-4 font-mono text-sm border border-white/5 group-hover:border-accent/30 transition-colors">
                                <p className="text-primary">const <span className="text-white">project</span> = {'{'}</p>
                                <p className="pl-4">quality: <span className="text-accent">'Premium'</span>,</p>
                                <p className="pl-4">ux: <span className="text-secondary">'Intuitive'</span>,</p>
                                <p className="pl-4 text-primary">{'}'}</p>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 w-32 h-32 glass rounded-2xl flex items-center justify-center shadow-xl border border-white/20 z-20"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold font-display text-primary">99%</div>
                                <div className="text-[10px] uppercase tracking-widest font-bold">Speed</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Background glow for visual */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
