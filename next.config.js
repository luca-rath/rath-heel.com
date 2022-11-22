/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
        runtime: 'experimental-edge',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: '@svgr/webpack',
        });

        return config;
    },
};

module.exports = nextConfig;
