
// Basic API service for the Midnight Souk
// Currently points to a placeholder endpoint

const API_BASE_URL = 'http://localhost:5678/webhook/midnight-souk-chat'; // Example n8n webhook

export const api = {
    sendMessage: async (message, context) => {
        try {
            console.log('Sending message to API:', { message, context });

            // Allow for simulation without a real backend for now if fetch fails
            // This is just a placeholder until the real n8n backend is ready
            // simulating a network delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Start fetch but fall back to mock response on error for demo purposes
            /*
            const response = await fetch(API_BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, context }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
            */

            // Mock response for now to ensure UI works
            return {
                response: "The artifact you seek has many stories. What specifically draws you to it?"
            };

        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
};
