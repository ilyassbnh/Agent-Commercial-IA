/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                souk: {
                    gold: '#eeba2b',
                    'gold-dim': 'rgba(238, 186, 43, 0.2)',
                    emerald: '#022c22',
                    'emerald-glass': 'rgba(2, 44, 34, 0.6)',
                    light: '#f8f7f6',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', '"Space Grotesk"', 'serif'],
                sans: ['"Plus Jakarta Sans"', '"Manrope"', 'sans-serif'],
            },
            backgroundImage: {
                'souk-gradient': 'radial-gradient(circle at 0% 0%, rgba(238, 186, 43, 0.08) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(238, 186, 43, 0.08) 0%, transparent 40%)',
            }
        },
    },
    plugins: [],
}
