import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full py-6 px-8 flex justify-between items-center bg-transparent relative z-50">
            <div className="flex items-center gap-12">
                <a href="#" className="text-white text-sm font-medium tracking-wide opacity-80 hover:opacity-100 transition-opacity">Collections</a>
                <a href="#" className="text-white text-sm font-medium tracking-wide opacity-80 hover:opacity-100 transition-opacity">My Vault</a>
                <a href="#" className="text-white text-sm font-medium tracking-wide opacity-80 hover:opacity-100 transition-opacity">About</a>
            </div>

            <div className="flex items-center gap-6">
                <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">search</span>
                </button>
                <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">shopping_bag</span>
                </button>
                <button className="w-8 h-8 rounded-full bg-[var(--souk-gold)] flex items-center justify-center text-[var(--souk-emerald)] font-bold text-xs">
                    A
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
