import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ChatInterface = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Welcome to the Midnight Souk. I am your concierge. What artifact do you seek?", sender: 'AI' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const containerRef = useRef();
    const messagesEndRef = useRef(null);

    useGSAP(() => {
        // Initial entry animation for the entire chat panel
        gsap.from(containerRef.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.75)',
            delay: 1.5 // Wait for Hero to finish
        });
    }, { scope: containerRef });

    // Animate new messages
    useEffect(() => {
        if (messagesEndRef.current) {
            gsap.fromTo(messagesEndRef.current.previousElementSibling,
                { opacity: 0, y: 20, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
            );
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMsg = { id: Date.now(), text: inputValue, sender: 'User' };
        setMessages(prev => [...prev, newUserMsg]);
        setInputValue("");

        // Simulate AI Response
        setTimeout(() => {
            const newAiMsg = { id: Date.now() + 1, text: "A fascinating choice...", sender: 'AI' };
            setMessages(prev => [...prev, newAiMsg]);
        }, 1500);
    };

    return (
        <div ref={containerRef} className="fixed bottom-6 right-6 w-96 glass-panel rounded-2xl flex flex-col overflow-hidden shadow-2xl z-50">
            {/* Header */}
            <div className="bg-[var(--souk-emerald)] p-4 border-b border-[var(--souk-gold-dim)] flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[var(--souk-gold)] font-serif font-bold tracking-wide">Souk AI Concierge</span>
                </div>
                <button className="text-[var(--souk-gold-dim)] hover:text-[var(--souk-gold)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4 bg-black/40 backdrop-blur-md">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'User' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === 'User'
                                ? 'bg-[var(--souk-gold)] text-[var(--souk-emerald)] rounded-tr-none'
                                : 'bg-[var(--souk-emerald)] text-gray-200 border border-[var(--souk-gold-dim)] rounded-tl-none'
                            }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
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
        </div>
    );
};

export default ChatInterface;
