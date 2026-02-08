import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, ShoppingBag, Terminal, Server, PenTool } from 'lucide-react';

const services = [
    {
        icon: <Layout className="w-8 h-8 text-primary" />,
        title: "Digital Architecture",
        description: "Transforming visionary concepts into high-performance web realities using cutting-edge React frameworks."
    },
    {
        icon: <ShoppingBag className="w-8 h-8 text-secondary" />,
        title: "Luxury E-Commerce",
        description: "Tailored shopping experiences that prioritize conversion through sophisticated UI and seamless backend logic."
    },
    {
        icon: <Terminal className="w-8 h-8 text-accent" />,
        title: "AI Integration",
        description: "Enriching digital products with intelligent features, from automated content to predictive analysis."
    },
    {
        icon: <Server className="w-8 h-8 text-primary" />,
        title: "Scalable Backends",
        description: "Robust Django-powered architectures designed for security, speed, and long-term business growth."
    },
    {
        icon: <Smartphone className="w-8 h-8 text-secondary" />,
        title: "Next-Gen Responsiveness",
        description: "Ensuring your brand's presence remains flawless across every device with a mobile-first philosophy."
    },
    {
        icon: <PenTool className="w-8 h-8 text-accent" />,
        title: "Performance Care",
        description: "Continuous optimization and legacy modernization to keep your digital assets at the peak of performance."
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding">
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 rounded-full glass-dark text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-primary/20"
                >
                    Excellence in Execution
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-display mb-6"
                >
                    Premium <span className="text-gradient">Capabilities.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 max-w-2xl mx-auto"
                >
                    I provide a curated suite of services designed for businesses that demand technical excellence and visual distinction.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="card-luxury p-10 group"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-dark flex items-center justify-center mb-8 border border-white/5 group-hover:border-primary/30 transition-all group-hover:scale-110">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-4 text-white group-hover:text-primary transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {service.description}
                        </p>

                        <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">LEARN MORE —</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
