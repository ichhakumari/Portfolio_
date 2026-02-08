import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-20 border-t border-white/5 bg-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="text-2xl font-bold font-display mb-4">
                            Ichha<span className="text-primary">.dev</span>
                        </div>
                        <p className="text-gray-500 max-w-xs text-center md:text-left text-sm leading-relaxed">
                            Crafting distinguished digital experiences through technical excellence and refined design.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 text-sm font-bold uppercase tracking-widest text-gray-400">
                        <a href="#about" className="hover:text-primary transition-colors">About</a>
                        <a href="#services" className="hover:text-primary transition-colors">Services</a>
                        <a href="#portfolio" className="hover:text-primary transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={scrollToTop}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group"
                        >
                            <ArrowUp size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5">
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-bold">
                        © {new Date().getFullYear()} Ichha Kumari. All rights reserved.
                    </p>

                    <div className="flex items-center gap-8">
                        <a href="https://github.com/ichhakumari" className="text-gray-500 hover:text-white transition-all transform hover:scale-110"><Github size={20} /></a>
                        <a href="https://linkedin.com/in/ichha-kumari" className="text-gray-500 hover:text-white transition-all transform hover:scale-110"><Linkedin size={20} /></a>
                        <a href="https://twitter.com/ichhakumari" className="text-gray-500 hover:text-white transition-all transform hover:scale-110"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/5 blur-[100px] -z-10" />
        </footer>
    );
};

export default Footer;
