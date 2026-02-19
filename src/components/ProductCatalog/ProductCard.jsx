import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card rounded-xl overflow-hidden group bg-[var(--souk-emerald-glass)] border border-[var(--souk-gold-dim)] hover:border-[var(--souk-gold)] hover:-translate-y-1 transition-all duration-300 shadow-[0_0_20px_rgba(238,186,43,0.05)] hover:shadow-[0_0_30px_rgba(238,186,43,0.15)] relative">
            <div className="aspect-[4/5] relative overflow-hidden">
                <img
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    src={product.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--souk-emerald)] via-transparent to-transparent opacity-80"></div>

                {product.tag && (
                    <div className="absolute top-4 left-4 bg-[var(--souk-gold)] text-[var(--souk-emerald)] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                        {product.tag}
                    </div>
                )}
            </div>

            <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-[Playfair_Display] text-white tracking-wide">{product.name}</h3>
                    <span className="text-[var(--souk-gold)] font-bold">{product.price} MAD</span>
                </div>
                <p className="text-white/50 text-sm mb-6 line-clamp-2 leading-relaxed font-[Manrope] font-light">
                    {product.description}
                </p>
                <button className="w-full bg-[rgba(238,186,43,0.1)] border border-[rgba(238,186,43,0.4)] py-3 rounded-lg text-[var(--souk-gold)] font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-[var(--souk-gold)] hover:text-[var(--souk-emerald)] transition-all glow-button">
                    <span className="material-icons text-sm">gavel</span>
                    Négocier
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
