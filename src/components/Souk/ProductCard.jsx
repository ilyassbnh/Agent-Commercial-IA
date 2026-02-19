import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ product }) => {
    const card = useRef(null);
    const imageRef = useRef(null);
    const detailsRef = useRef(null);

    useGSAP(() => {
        // Entry animation with ScrollTrigger
        gsap.from(card.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card.current,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            }
        });

        // Hover interactions
        const tl = gsap.timeline({ paused: true });

        tl.to(imageRef.current, {
            scale: 1.1,
            duration: 0.5,
            ease: 'power2.out'
        })
            .to(detailsRef.current, {
                y: -10,
                opacity: 1,
                duration: 0.3
            }, '<');

        const handleEnter = () => tl.play();
        const handleLeave = () => tl.reverse();

        const cardEl = card.current;
        cardEl.addEventListener('mouseenter', handleEnter);
        cardEl.addEventListener('mouseleave', handleLeave);

        return () => {
            cardEl.removeEventListener('mouseenter', handleEnter);
            cardEl.removeEventListener('mouseleave', handleLeave);
        };
    }, { scope: card });

    return (
        <div ref={card} className="group relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-souk-dark border border-white/10 shadow-2xl transition-shadow hover:shadow-souk-gold/20">
            {/* Image Container */}
            <div className="absolute inset-0 overflow-hidden">
                <div ref={imageRef} className="w-full h-full bg-cover bg-center transition-transform"
                    style={{ backgroundImage: `url(${product.image})` }}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="font-sans text-3xl md:text-4xl text-white uppercase tracking-tighter mb-2">{product.name}</h3>
                <p className="font-serif text-souk-gold text-lg italic mb-4">{product.price}</p>

                <div ref={detailsRef} className="opacity-0 transform translate-y-4">
                    <p className="text-gray-300 text-sm line-clamp-2 mb-4 font-light">{product.description}</p>
                    <button className="w-full py-3 border border-souk-gold text-souk-gold hover:bg-souk-gold hover:text-souk-dark uppercase font-bold tracking-widest transition-colors duration-300">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
