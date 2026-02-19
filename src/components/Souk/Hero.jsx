import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const container = useRef(null);
    const titleRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        // Custom Split Text Logic (since SplitText is paid)
        // We select the chars that we rendered manually
        const chars = titleRef.current.querySelectorAll('.char');

        tl.set(container.current, { visibility: 'visible' })
            .from(chars, {
                yPercent: 100,
                stagger: 0.05,
                duration: 1.5,
                ease: 'power4.out'
            })
            .from('.hero-subtitle', {
                y: 20,
                opacity: 0,
                duration: 1
            }, '-=1')
            .from('.hero-btn', {
                scale: 0,
                duration: 0.5,
                ease: 'back.out(1.7)'
            }, '-=0.5');

        // Scroll Effect (Awwwards Style)
        // We animate the container itself on scroll
        gsap.to(container.current, {
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            },
            scale: 0.95,
            borderRadius: '2rem',
            y: 50,
            opacity: 0.8
        });

        // Floating Background Elements
        gsap.to('.floating-orb', {
            y: -30,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: 2
        });

    }, { scope: container });

    const renderSplitText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} className="inline-block overflow-hidden">
                <span className="char inline-block translate-y-0 text-souk-gold">
                    {char === ' ' ? '\u00A0' : char}
                </span>
            </span>
        ));
    };

    return (
        <section ref={container} className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center invisible">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-souk-emerald to-souk-dark z-0" />

            {/* Animated Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-souk-gold/10 rounded-full blur-3xl floating-orb" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-souk-accent/5 rounded-full blur-3xl floating-orb" />

            {/* Main Content */}
            <div className="relative z-10 text-center flex flex-col items-center">
                <div ref={titleRef} className="hero-title mb-6" aria-label="Midnight Souk">
                    {renderSplitText("MIDNIGHT SOUK")}
                </div>

                <div className="hero-subtitle overflow-hidden mb-12 transform -rotate-2">
                    <div className="bg-souk-gold text-souk-dark px-6 py-2 text-2xl font-bold uppercase tracking-widest">
                        Premium AI Marketplace
                    </div>
                </div>

                <button className="hero-btn group relative px-8 py-4 bg-souk-light text-souk-dark font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105">
                    <span className="relative z-10">EXPLORE COLLECTION</span>
                    <div className="absolute inset-0 bg-souk-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </button>
            </div>

            <div className="absolute bottom-10 animate-bounce text-white/50">
                <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
            </div>
        </section>
    );
};

export default Hero;
