/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            "error-425": "#ce0500",
            "color-primary": "#000091",
            white: "#ffffff",
            "gray-200": "rgb(229 231 235)",
            dark: {
                "gray-600": "rgb(75 85 99)",
                white: "#ffffff",
            },
        },
        backgroundColor: {
            "grey-975": "#f6f6f6",
            white: "#ffffff",
        },
    },
    plugins: [],
};
