import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="flex flex-col lg:flex-row gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2"
                >
                    <div className="flex items-center gap-2 text-primary font-medium mb-4">
                        <div className="w-12 h-[1px] bg-primary" />
                        <span>Get In Touch</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold font-display mb-8 leading-tight">
                        Let's Create <span className="text-gradient">Greatness.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg">
                        Seeking to elevate your brand's digital presence? I'm available for
                        selective collaborations and visionary projects.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                                <Mail className="text-primary" size={24} />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1">Email</p>
                                <a href="mailto:ichha478@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors">ichha478@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-all">
                                <Linkedin className="text-secondary" size={24} />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1">Professional</p>
                                <a href="https://linkedin.com/in/ichha-kumari" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-secondary transition-colors">linkedin.com/in/ichha-kumari</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/50 transition-all">
                                <MapPin className="text-accent" size={24} />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1">Location</p>
                                <p className="text-xl font-bold text-white">New Delhi, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2"
                >
                    <div className="glass-dark p-10 md:p-14 rounded-[3rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />

                        <form className="space-y-8 relative z-10">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-gray-400">Your Identity</label>
                                    <input type="text" id="name" className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors bg-transparent placeholder:text-gray-700 font-display text-lg" placeholder="Name" />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-gray-400">Digital Address</label>
                                    <input type="email" id="email" className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors bg-transparent placeholder:text-gray-700 font-display text-lg" placeholder="Email" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="subject" className="text-xs uppercase tracking-widest font-bold text-gray-400">The Vision</label>
                                <input type="text" id="subject" className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors bg-transparent placeholder:text-gray-700 font-display text-lg" placeholder="Subject" />
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-gray-400">Details</label>
                                <textarea id="message" rows={4} className="w-full bg-white/5 border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none bg-transparent placeholder:text-gray-700 font-display text-lg" placeholder="Your Message"></textarea>
                            </div>

                            <button
                                onClick={(e) => e.preventDefault()}
                                className="w-full py-6 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white font-bold uppercase tracking-[0.2em] text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-3"
                            >
                                Send Transmission <Send size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
