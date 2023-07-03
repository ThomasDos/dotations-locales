/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            "error-425": "#ce0500",
            "color-primary": "#000091",
            white: "#ffffff",
            "grey-mayback": "#666666",
            "grey-200": "rgb(229 231 235)",
            "grey-625-425": "#929292",
            "grey-200-850": "#3A3A3A",
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
            "blue-france-950": "#ECECFE",
            "green-tilleul-verveine-975": "#FEF7DA",
        },
        borderColor: {
            "grey-200": "#E6E6E6",
        },
    },
    plugins: [],
};
