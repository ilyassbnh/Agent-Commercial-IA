import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MessageSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.to('.msg-text-scroll', {
            xPercent: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative min-h-[50vh] bg-souk-gold flex items-center overflow-hidden py-24">
            <div className="msg-content relative z-10 w-full">
                <div className="msg-text-scroll flex whitespace-nowrap text-[10rem] md:text-[15rem] leading-none font-sans font-bold text-souk-dark uppercase opacity-90">
                    <span>Authentic • Rare • Verified • </span>
                    <span>Authentic • Rare • Verified • </span>
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center max-w-lg px-6 mix-blend-overlay">
                    <p className="font-serif text-2xl md:text-3xl font-bold text-souk-emerald">
                        "Where tradition meets technology. Explore the finest artifacts currated by intelligence."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MessageSection;
