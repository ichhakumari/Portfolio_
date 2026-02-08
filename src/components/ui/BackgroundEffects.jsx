import React from 'react';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Noise Overlay */}
            <div className="noise-overlay" />

            {/* Gradient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[120px] rounded-full animate-float" />
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />

            {/* Grid Pattern (Subtle) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
};

export default BackgroundEffects;
