import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
    {
        title: "Sharoma Candles",
        category: "E-Commerce / UI / UX",
        description: "A product-focused e-commerce platform with a clean, minimal design tailored for premium candle enthusiasts.",
        image: "../public/sharoma.png",
        link: "https://sh-candles.vercel.app/",
        tags: ["React", "Vercel", "E-commerce"]
    },
    {
        title: "AiFilmz",
        category: "AI / SaaS / Video",
        description: "Cutting-edge platform for AI-powered ad film and video generation, empowering brands with automated creativity.",
        image: "../public/Aifilmz.png",
        link: "https://aifilmz.com/",
        tags: ["React", "Video Gen", "Branding"]
    },
    {
        title: "File Validator Tool",
        category: "Utility / DevTools",
        description: "Professional utility tool for validating and verifying uploaded files, ensuring data integrity and security.",
        image: "../public/image.png",
        link: "filecheckertool.netlify.app",
        tags: ["Django", "Tooling", "Netlify"]
    },
    {
        title: "Conversation Analyzer",
        category: "AI / Backend / Analysis",
        description: "Advanced web application for deep conversation analysis using sophisticated backend logic and AI processing.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        link: "https://web-production-4e327.up.railway.app/",
        tags: ["Django", "Analysis", "Backend"]
    },
    {
        title: "Database Management App",
        category: "SaaS / Database",
        description: "Streamlined CRUD-based application for efficient database handling and management across large datasets.",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2021&auto=format&fit=crop",
        link: "https://web-production-2873d.up.railway.app/",
        tags: ["CRUD", "Management", "Railway"]
    },
    {
        title: "PrimePick",
        category: "E-Commerce / UI / UX",
        description: "Streamlined CRUD-based application for efficient database handling and management across large datasets.",
        image: "../public/primepick2.png",
        link: "https://primepick.co.in/",
        tags: ["E-Commerce", "UI / UX", "Shopyfy"]
    },
    {
        title: "Peravali Foods",
        category: "E-Commerce / UI / UX",
        description: "Streamlined CRUD-based application for efficient database handling and management across large datasets.",
        image: "../public/peravali2.png",
        link: "https://peravalifoods.com/",
        tags: ["E-Commerce", "UI / UX", "Shopyfy"]
    }

];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section-padding">
            <div className="mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-primary font-medium mb-4"
                >
                    <div className="w-12 h-[1px] bg-primary" />
                    <span>Selected Creations</span>
                </motion.div>
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold font-display"
                    >
                        Mastering the <span className="text-gradient">Digital Craft.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-md"
                    >
                        Each project is a testament to my commitment to quality, performance, and modern design principles.
                    </motion.p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                    >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6 bg-dark-card border border-white/5 shadow-2xl">
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                {/* Hover Indicator */}
                                <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <ArrowUpRight size={24} className="text-white" />
                                </div>

                                {/* Tags on Image */}
                                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold glass rounded-full text-white/80">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 pt-2">
                                        CASE STUDY / 0{index + 1}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-lg mb-4">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                    View Project <ExternalLink size={14} />
                                </div>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-32 text-center"
            >
                <div className="glass-dark p-12 rounded-3xl border border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Sparkles size={32} className="text-primary mx-auto mb-6 animate-float" />
                    <h3 className="text-3xl md:text-5xl font-bold font-display mb-6">Have a visionary project?</h3>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                        I'm currently accepting new projects for 2024. Let's work together to create
                        something that stands out in the digital landscape.
                    </p>
                    <a href="#contact" className="btn-primary inline-flex">Start a Conversation</a>
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
