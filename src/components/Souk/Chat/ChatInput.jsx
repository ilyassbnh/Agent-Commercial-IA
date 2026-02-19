import React, { useState, useEffect } from 'react';

const ChatInput = ({ onSend, initialValue = "" }) => {
    const [inputValue, setInputValue] = useState(initialValue);

    useEffect(() => {
        setInputValue(initialValue);
    }, [initialValue]);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        onSend(inputValue);
        setInputValue("");
    };

    return (
        <div className="p-4 bg-[var(--souk-emerald)] border-t border-[var(--souk-gold-dim)]">
            <div className="relative">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Make your offer..."
                    className="w-full bg-black/30 text-white placeholder-gray-500 rounded-full py-3 px-5 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--souk-gold)] transition-all"
                />
                <button
                    onClick={handleSend}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[var(--souk-gold)] text-[var(--souk-emerald)] rounded-full hover:bg-white transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatInput;
