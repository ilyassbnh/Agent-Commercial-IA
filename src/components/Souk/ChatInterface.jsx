import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { api } from '../../services/api';
import MessageBubble from './Chat/MessageBubble';
import ChatInput from './Chat/ChatInput';
import TypingIndicator from './Chat/TypingIndicator';

const ChatInterface = ({ isOpen, onClose, context }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Welcome to the Midnight Souk. I am your concierge. What artifact do you seek?", sender: 'AI' }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const containerRef = useRef();
    const messagesEndRef = useRef(null);

    // Initial Entry Animation
    useGSAP(() => {
        if (!containerRef.current) return;

        if (isOpen) {
            gsap.fromTo(containerRef.current,
                { y: 100, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.2)' }
            );
        }
    }, { scope: containerRef, dependencies: [isOpen] });

    // Handle Context (e.g. User clicked "Ask Agent" on a product)
    useEffect(() => {
        if (context && context.initialMessage) {
            // We'll handle context pre-filling differently with the new input component if needed,
            // but for now let's just use the message directly if it's meant to be sent immediately,
            // or pass it to the input.
            // The previous logic setInputValue directly.
            // Let's assume we want to auto-populate the input.
            // We'll pass it as a prop to ChatInput.
        }
    }, [context]);

    // Animate new messages
    useEffect(() => {
        if (messagesEndRef.current) {
            gsap.fromTo(messagesEndRef.current.previousElementSibling,
                { opacity: 0, y: 20, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
            );
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    const handleSend = async (text) => {
        if (!text.trim()) return;

        const userText = text;
        const newUserMsg = { id: Date.now(), text: userText, sender: 'User' };

        setMessages(prev => [...prev, newUserMsg]);
        setIsTyping(true);

        try {
            // Call the API service
            const response = await api.sendMessage(userText, context);

            const newAiMsg = {
                id: Date.now() + 1,
                text: response.response || "The spirits are silent...",
                sender: 'AI'
            };

            setMessages(prev => [...prev, newAiMsg]);
        } catch (error) {
            setMessages(prev => [...prev, { id: Date.now() + 1, text: "The connection to the Souk is disrupted.", sender: 'System' }]);
        } finally {
            setIsTyping(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div ref={containerRef} className="fixed bottom-6 right-6 w-96 glass-panel rounded-2xl flex flex-col overflow-hidden shadow-2xl z-50 border border-souk-gold/20">
            {/* Header */}
            <div className="bg-[var(--souk-emerald)] p-4 border-b border-[var(--souk-gold-dim)] flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[var(--souk-gold)] font-serif font-bold tracking-wide">Souk AI Concierge</span>
                </div>
                <button onClick={onClose} className="text-[var(--souk-gold-dim)] hover:text-[var(--souk-gold)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4 bg-black/80 backdrop-blur-md">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}

                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <ChatInput onSend={handleSend} initialValue={context?.initialMessage || ""} />
        </div>
    );
};

export default ChatInterface;
