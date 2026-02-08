import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Services', to: 'services' },
        { name: 'Projects', to: 'portfolio' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0 pt-4 md:pt-6 px-4 md:px-8 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`max-w-7xl mx-auto pointer-events-auto transition-all duration-500 rounded-full px-6 md:px-10 flex justify-between items-center h-16 md:h-20 ${scrolled
                        ? 'glass-dark py-2 md:py-4 shadow-2xl'
                        : 'bg-transparent'
                    }`}
            >
                {/* Logo */}
                <Link to="hero" smooth={true} duration={500} className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 group-hover:rotate-[360deg]">
                        <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-display font-bold text-xl md:text-2xl tracking-tight">
                        Ichha<span className="text-primary">.</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="text-primary"
                            className="text-gray-400 hover:text-white text-sm font-medium cursor-pointer transition-all duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="btn-primary"
                    >
                        Let's Talk
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-4 mx-2 glass-dark rounded-3xl p-8 flex flex-col items-center gap-6 shadow-2xl pointer-events-auto"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-primary text-xl font-display font-medium cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="btn-primary w-full text-center"
                        >
                            Hire Me
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
