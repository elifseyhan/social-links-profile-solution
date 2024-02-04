/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                base: "14px",
            },
            colors: {
                primary: "hsl(75, 94%, 57%)",
                grey: "hsl(0, 0%, 20%)",
                "dark-grey": "hsl(0, 0%, 12%)",
                "off-black": "hsl(0, 0%, 8%)",
            },
        },
    },
    plugins: [],
};
