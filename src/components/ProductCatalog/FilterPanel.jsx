import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FilterPanel = () => {
    const chatRef = useRef(null);
    const messagesEndRef = useRef(null);
    const [messages, setMessages] = useState([
        { id: 1, sender: 'ai', text: "Salutations, seeker of treasures. I am the Souk AI. Which of these handcrafted items has caught your eye tonight? I am prepared to negotiate a fair price for a soul of your taste." }
    ]);
    const [inputValue, setInputValue] = useState("");

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useGSAP(() => {
        gsap.from(chatRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        });
    }, { scope: chatRef });

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newMsg = { id: Date.now(), sender: 'user', text: inputValue };
        setMessages(prev => [...prev, newMsg]);
        setInputValue("");

        // Simulate AI response
        setTimeout(() => {
            const aiMsg = { id: Date.now() + 1, sender: 'ai', text: "A fine choice. That rug was hand-woven for three moons. What would you consider a respectful offer for such dedication?" };
            setMessages(prev => [...prev, aiMsg]);
        }, 1500);
    };

    return (
        <div ref={chatRef} className="flex flex-col h-full bg-[var(--souk-emerald-glass)] backdrop-blur-xl border-l border-[var(--souk-gold-dim)]">
            {/* Chat Header */}
            <div className="p-6 border-b border-[rgba(238,186,43,0.1)] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(238,186,43,0.2)] border border-[var(--souk-gold)] flex items-center justify-center shadow-[0_0_15px_rgba(238,186,43,0.3)]">
                    <span className="material-icons text-[var(--souk-gold)]">auto_awesome</span>
                </div>
                <div>
                    <h4 className="font-bold text-sm text-[var(--souk-gold)] tracking-wider">Souk AI Concierge</h4>
                    <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[10px] text-white/50 uppercase tracking-widest font-medium">Always Evaluating</span>
                    </div>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'items-end ml-auto' : 'items-start'}`}>
                        <div className={`p-4 rounded-xl text-sm leading-relaxed ${msg.sender === 'user'
                                ? 'bg-[var(--souk-gold)] text-[var(--souk-emerald)] font-medium rounded-tr-none shadow-lg'
                                : 'bg-[rgba(238,186,43,0.1)] border border-[rgba(238,186,43,0.3)] text-white/90 rounded-tl-none backdrop-blur-sm'
                            }`}>
                            {msg.text}
                        </div>
                        <span className={`text-[10px] text-white/30 mt-2 ${msg.sender === 'user' ? 'mr-1' : 'ml-1'}`}>
                            {msg.sender === 'ai' ? 'Souk AI' : 'You'} • Now
                        </span>
                    </div>
                ))}

                {/* AI Suggestion Buttons (Example) */}
                {messages.length === 1 && (
                    <div className="flex flex-col items-start max-w-[85%] animate-fade-in">
                        <div className="ml-1 mt-2 flex flex-wrap gap-2">
                            <button onClick={() => setInputValue("I'm interested in the Tapis Berbère.")} className="text-[10px] border border-[var(--souk-gold-dim)] text-[var(--souk-gold)] px-3 py-1.5 rounded-full hover:bg-[var(--souk-gold-dim)] transition-colors">
                                "I'm interested in the Tapis Berbère"
                            </button>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-6 pt-2 border-t border-[rgba(238,186,43,0.1)] bg-[rgba(2,44,34,0.3)]">
                <div className="relative group">
                    <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendMessage())}
                        className="w-full bg-white/5 border border-[var(--souk-gold-dim)] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[var(--souk-gold)] focus:ring-1 focus:ring-[var(--souk-gold)] transition-all placeholder:text-white/20 resize-none custom-scrollbar group-hover:bg-white/10"
                        placeholder="Type your offer or query..."
                        rows="2"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="absolute bottom-3 right-3 w-8 h-8 bg-[var(--souk-gold)] text-[var(--souk-emerald)] rounded-lg flex items-center justify-center hover:scale-105 transition-transform active:scale-95 shadow-[0_0_10px_rgba(238,186,43,0.4)]"
                    >
                        <span className="material-icons text-sm">send</span>
                    </button>
                </div>
                <div className="mt-3 flex justify-between items-center text-[10px] text-[var(--souk-gold)] opacity-60 uppercase tracking-widest px-1 font-medium">
                    <span>Negotiation Level: Intermediate</span>
                    <span>12.5% Discount Possible</span>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;
