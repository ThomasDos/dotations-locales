/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            "error-425": "#ce0500",
            "color-primary": "#000091",
            white: "#ffffff",
            "grey-200": "rgb(229 231 235)",
            "grey-625-425": "#929292",
            dark: {
                "grey-600": "rgb(75 85 99)",
                white: "#ffffff",
            },
            "grey-625": "#929292",
        },
        backgroundColor: {
            "grey-975": "#f6f6f6",
            white: "#ffffff",
            "blue-france-113": "#000091",
        },
    },
    plugins: [],
};
