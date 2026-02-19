import React from 'react';

const TypingIndicator = () => {
    return (
        <div className="flex justify-start">
            <div className="bg-[var(--souk-emerald)] p-3 rounded-2xl rounded-tl-none border border-[var(--souk-gold-dim)] flex gap-1">
                <span className="w-1.5 h-1.5 bg-souk-gold rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-souk-gold rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-souk-gold rounded-full animate-bounce delay-200"></span>
            </div>
        </div>
    );
};

export default TypingIndicator;
