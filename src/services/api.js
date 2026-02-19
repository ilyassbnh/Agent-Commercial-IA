
// API Service for Midnight Souk
// Handles communication with n8n webhooks for product data and chat interactions

const API_BASE_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://n8n.webhook.placeholder';

export const api = {
    /**
     * Fetches the catalog of products from the n8n webhook
     * @returns {Promise<Array>} List of products
     */
    getProducts: async () => {
        try {
            // In a real scenario, this would fetch from the n8n webhook
            // const response = await fetch(`${API_BASE_URL}/products`);
            // return await response.json();

            // Mock data for development/verification
            return [
                {
                    id: 1,
                    name: "Lanterne Royale",
                    price: "1,200 MAD",
                    category: "Lighting",
                    image: "https://images.unsplash.com/photo-1542202229-7d9377a53c0c?q=80&w=3540&auto=format&fit=crop",
                    description: "Hand-forged brass lantern with geometric shadows."
                },
                {
                    id: 2,
                    name: "Tapis Berbère",
                    price: "3,500 MAD",
                    category: "Carpets",
                    image: "https://images.unsplash.com/photo-1596435966779-c5c8f8fafe6d?q=80&w=3000&auto=format&fit=crop",
                    description: "Authentic wool carpet from the Atlas Mountains, displaying tribal symbols of protection."
                },
                {
                    id: 3,
                    name: "Céramique de Fès",
                    price: "850 MAD",
                    category: "Ceramics",
                    image: "https://images.unsplash.com/photo-1565193566173-7a641d763269?q=80&w=3540&auto=format&fit=crop",
                    description: "Blue and white ceramic plate, hand-painted by master artisans in Fes."
                }
            ];
        } catch (error) {
            console.error("Failed to fetch products:", error);
            return [];
        }
    },

    /**
     * Sends a message to the AI agent via n8n
     * @param {string} message User message
     * @param {object} context Product context (optional)
     * @returns {Promise<object>} AI response
     */
    sendMessage: async (message, context = {}) => {
        try {
            // Placeholder for chat API call
            console.log("Sending message to n8n:", message, context);
            return { response: "I am the Souk Guardian. How may I assist you with this artifact?" };
        } catch (error) {
            console.error("Chat error:", error);
            throw error;
        }
    }
};
