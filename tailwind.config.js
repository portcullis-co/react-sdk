/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{ts,tsx}"],
    plugins: [require("tailwindcss-animate")],
    theme: {
        extend: {
            animation: {
                'gradient': 'gradient 8s linear infinite',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    }
}