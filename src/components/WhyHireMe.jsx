import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, MessageSquare, Clock, Code } from 'lucide-react';

const reasons = [
    {
        icon: <Code className="text-primary" />,
        title: "Clean & Scalable Code",
        description: "I write maintainable, modular code that is easy to extend and debug, ensuring your project grows with your business."
    },
    {
        icon: <ShieldCheck className="text-secondary" />,
        title: "Security By Design",
        description: "Your data's safety is non-negotiable. I implement industry-standard security protocols from the first line of code."
    },
    {
        icon: <Zap className="text-accent" />,
        title: "Peak Performance",
        description: "Speed is a luxury. I optimize every asset and query to ensure your users experience zero friction."
    },
    {
        icon: <MessageSquare className="text-primary" />,
        title: "Transparent Communication",
        description: "No tech jargon. I keep you informed with clear updates and collaborative decision-making."
    },
    {
        icon: <Clock className="text-secondary" />,
        title: "Precise Delivery",
        description: "I value your time as much as my own, ensuring every milestone is met with punctuality and quality."
    },
    {
        icon: <Check className="text-accent" />,
        title: "Holistic Approach",
        description: "I look beyond the code to ensure the final product aligns perfectly with your brand identity."
    }
];

const WhyHireMe = () => {
    return (
        <section id="why-hire-me" className="section-padding">
            <div className="glass-dark rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] -z-10" />

                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-display mb-6"
                    >
                        Why Work <span className="text-gradient">With Me?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        I combine technical prowess with a refined design sensibility to deliver products that are as robust as they are beautiful.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-primary/50">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-bold font-display text-white mb-4 group-hover:text-primary transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyHireMe;
