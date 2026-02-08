import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind", category: "Styling" },
    { name: "JavaScript", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "Django", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "OpenAI API", category: "AI" },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="section-padding overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/3"
                >
                    <div className="flex items-center gap-2 text-primary font-medium mb-4">
                        <div className="w-12 h-[1px] bg-primary" />
                        <span>The Arsenal</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">
                        Technical <span className="text-gradient">Mastery.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        I utilize a carefully curated set of technologies chosen for their performance,
                        scalability, and ability to deliver exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -10 }}
                            className="glass-dark p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center group cursor-default"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                                <span className="text-xl font-bold text-white/20 group-hover:text-primary transition-colors">
                                    {tech.name.charAt(0)}
                                </span>
                            </div>
                            <span className="font-bold text-white mb-1">{tech.name}</span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-500">{tech.category}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Infinite Scroll Tech Bar (Pseudo-luxury element) */}
            <div className="mt-32 relative flex overflow-x-hidden">
                <div className="animate-gradient-x flex items-center gap-20 whitespace-nowrap opacity-10 py-4">
                    {technologies.concat(technologies).map((tech, i) => (
                        <span key={i} className="text-6xl font-display font-black uppercase tracking-tighter">
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
