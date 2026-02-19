import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import ProductCard from './ProductCard';
import ChatInterface from './ChatInterface';
import MessageSection from './MessageSection';
import { products } from './products';

const SoukApp = () => {
    return (
        <div className="min-h-screen bg-souk-dark text-souk-light font-body relative selection:bg-souk-gold selection:text-souk-dark">
            <Navbar />

            <main className="pb-32">
                <Hero />
                <MessageSection />

                <section id="collection" className="relative z-10 px-4 md:px-12 py-24 -mt-20">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div className="max-w-xl">
                            <h3 className="text-souk-gold text-sm font-bold tracking-[0.3em] uppercase mb-4">The Collection</h3>
                            <h2 className="text-5xl md:text-7xl font-sans uppercase leading-none">
                                Curated <br /> <span className="text-souk-accent italic font-serif lowercase">Artifacts</span>
                            </h2>
                        </div>
                        <div className="hidden md:flex gap-8 mt-8 md:mt-0">
                            {['All', 'Carpets', 'Ceramics', 'Metalwork'].map((cat, i) => (
                                <button key={cat} className={`text-lg transition-all duration-300 ${i === 0 ? 'text-souk-gold border-b border-souk-gold pb-1' : 'text-white/50 hover:text-white'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
                        {products.map((product, i) => (
                            <div key={product.id} className={`${i % 2 !== 0 ? 'md:translate-y-24' : ''}`}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    <div className="mt-48 text-center">
                        <button className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold text-white transition-all duration-300 bg-transparent border border-white/20 rounded-full hover:bg-white/5">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-souk-gold rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                            <span className="relative uppercase tracking-widest text-xl">View Full Archive</span>
                        </button>
                    </div>
                </section>
            </main>

            <ChatInterface />
        </div>
    );
};

export default SoukApp;
