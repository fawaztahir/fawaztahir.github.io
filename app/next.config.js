/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    trailingSlash: true,
    experimental: {
        webVitalsAttribution: ['CLS', 'LCP'],
    },
};

module.exports = nextConfig;
