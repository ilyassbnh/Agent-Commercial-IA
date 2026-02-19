import React from 'react';

const MessageBubble = ({ message }) => {
    const isUser = message.sender === 'User';

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${isUser
                ? 'bg-[var(--souk-gold)] text-[var(--souk-emerald)] rounded-tr-none font-medium'
                : 'bg-[var(--souk-emerald)] text-gray-200 border border-[var(--souk-gold-dim)] rounded-tl-none font-light'
                }`}>
                {message.text}
            </div>
        </div>
    );
};

export default MessageBubble;
