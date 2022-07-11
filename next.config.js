/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: { ssr: true, displayName: true },
    },
};

module.exports = nextConfig;
