import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CEO, TechStart",
        content: "Ichha transformed our outdated platform into a modern, high-converting masterpiece. Her understanding of AI integration gave us a huge competitive advantage.",
        initials: "SJ"
    },
    {
        name: "David Chen",
        role: "Founder, EcoShop",
        content: "The e-commerce site Ichha built for us is lightning fast and easy to manage. Sales increased by 40% in the first month!",
        initials: "DC"
    },
    {
        name: "Mark Thompson",
        role: "Marketing Director",
        content: "Reliable, communicative, and extremely skilled. Ichha didn't just write code, she solved our business problems.",
        initials: "MT"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding">
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex justify-center mb-6"
                >
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                            <Star key={i} size={16} className="text-primary fill-primary" />
                        ))}
                    </div>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold font-display mb-6"
                >
                    Voices of <span className="text-gradient">Success.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 max-w-2xl mx-auto"
                >
                    Distinguished clients who have experienced the intersection of technical excellence and creative precision.
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="card-luxury p-10 group relative"
                    >
                        <Quote className="text-primary/10 w-20 h-20 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />

                        <div className="relative z-10">
                            <p className="text-gray-300 text-lg leading-relaxed mb-10 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl border border-white/10">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white font-display text-lg">{testimonial.name}</h4>
                                    <p className="text-xs text-primary uppercase tracking-widest font-bold">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
