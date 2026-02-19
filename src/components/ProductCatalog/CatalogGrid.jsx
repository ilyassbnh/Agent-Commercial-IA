import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ProductCard from './ProductCard';
import FilterPanel from './FilterPanel';

const products = [
    { id: 1, name: 'Tapis Berbère', price: '1,200', category: 'Rug', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDWCntaphvPhBJWywdlmcBfuV9-P8DqU7Bc7QhgtglVs4HqDXZ1L0Qe6Fr1V85VP1VtTQJ04QzGDDRMMYf8_h5DNlv1tUbcciMy6DmYG12m29ZO-yhrjYWSn7LMp4yw6SCdVhnGVSHAX7-yVasD75rEHHo-fL-0hyUnPsMuJ8h6pclzb1eQ9K5A1o4QmlJIbEdJkP3T_lx_iiise3a-thtJteGWc9LwkwoKUehI6xLZl4U5Djeh-xgGNqe9_2F55xh-uK52Ag0qe4', description: "Hand-woven by artisans in the Middle Atlas using pure sheep's wool and natural henna dyes.", tag: "Rare Find" },
    { id: 2, name: 'Théière Argent', price: '450', category: 'Metal', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyOWQxj19c5r2vOD5ttYttgSVWGDo-PIzoBxZtVa88ffENAsJ_VyBicyD_RyVZW-1Pn5uwVb4cCoXE2TAw6u4tY1ByDTLZxWZLQhtxITSU3IG2C1yU64ZELLucQ2Njsnv5_BLvdW9uzZ7LBgahbqeIkRmNtgn4pvwc_7sforMJUP99cEcF5I2F_1Mah-uLZESg-ER3aUrNcqyVJPYqxyKan2v_LesjNzoNOOna938sZ_CCV1NbYx_w3OYhad7wUBcLY8q4luP0SPg', description: "A masterfully engraved silver-plated teapot featuring traditional Moorish geometric patterns.", tag: "Hand-Crafted" },
    { id: 3, name: 'Plat en Céramique', price: '280', category: 'Pottery', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYU3PVKwhmFIKUHhXP4J62JMYUWGixOllWVl7JAC0XRyKlmlMf9XUvwwOOioJhODfDJvq6VhEOw9LGOnVjt1BjVz8Pwl-miytV-rK7MOJTmhObIwFaksTEmGqp67iejSvoda-50foZ5E9o6Q4neBXOXIhWQNZOeZ__nEUuDOn8plFcrAksJsNzwoOK2ZVHNcgPphi_jXUe9M8laFNx_PENK_0y0c-2--id00PgJ-r_O5jilc-hKeyTM0ZPWW1OfD4Fin7tTMwlLh4', description: "Traditional Fès blue pottery with intricate lattice work and glazed finish." },
    { id: 4, name: 'Lanterne Royale', price: '850', category: 'Lighting', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqUCsINFodLlah0b8RbNqBKun3ZN1Lm856bcAUKoxU-I7x8rKhJ0AdMiY9Q-kWorWC9NPAxEMoox2F2ZLu1mBDOILCiOfiRXogWIa7GyaGnxrCDdae8NuUJxqO4PnBueGzNNsbP6qQVIHsTc3L1sldKX89jRaUAtetGGsH6WRBp5Vf5SRwPcePs0lRB8mNb4_OCNseOj89ptSq6QuhFsRXS1AmwAENmTGsirJX6ZnM5v8CimjvaQWiBekjmcO6Lp6idWxRfxbiTdQ', description: "Brass lantern with amber glass inserts that casts mesmerizing shadows." },
];

const CatalogGrid = () => {
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    useGSAP(() => {
        // Simple entrance animation
        gsap.from(headerRef.current.children, {
            y: -20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });

        gsap.from(gridRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.4
        });
    });

    return (
        <div className="flex h-screen overflow-hidden bg-[var(--souk-emerald)] text-white font-[Manrope]">
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col relative z-10">
                {/* Header */}
                <header ref={headerRef} className="h-20 px-8 flex items-center justify-between border-b border-[rgba(238,186,43,0.2)] glass-panel z-50">
                    <div className="flex items-center gap-2">
                        <span className="text-3xl font-[Playfair_Display] font-bold text-[var(--souk-gold)] tracking-tighter">
                            Souk<span className="ml-2 font-light text-white">AI</span>
                        </span>
                    </div>
                    <nav className="hidden md:flex gap-8 text-xs font-medium tracking-[0.2em] uppercase text-white/70">
                        <a href="#" className="hover:text-[var(--souk-gold)] transition-colors">Collections</a>
                        <a href="#" className="hover:text-[var(--souk-gold)] transition-colors">My Vault</a>
                        <a href="#" className="hover:text-[var(--souk-gold)] transition-colors">About</a>
                        <button className="bg-[rgba(238,186,43,0.1)] border border-[rgba(238,186,43,0.4)] px-6 py-2 rounded-full text-[var(--souk-gold)] hover:bg-[var(--souk-gold)] hover:text-[var(--souk-emerald)] transition-all">
                            Connect Wallet
                        </button>
                    </nav>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-10 text-center md:text-left">
                            <h2 className="text-[var(--souk-gold)] text-xs font-bold tracking-[0.3em] uppercase mb-2">Curated Selection</h2>
                            <h1 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold mb-4">The Collection</h1>
                            <p className="text-white/60 max-w-xl">Rare treasures from the heart of the Atlas Mountains, authenticated by AI and ready for your negotiation.</p>
                        </div>

                        {/* Product Grid */}
                        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <div className="text-center text-white/30 text-xs tracking-widest uppercase pb-10">
                            End of tonight's curated selection
                        </div>
                    </div>
                </div>
            </main>

            {/* Sidebar (Chat Interface) */}
            <aside className="w-[400px] border-l border-[rgba(238,186,43,0.2)] glass-panel hidden xl:flex flex-col relative z-20">
                <FilterPanel />
            </aside>
        </div>
    );
};

export default CatalogGrid;
