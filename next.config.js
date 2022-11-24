// eslint-disable-next-line @typescript-eslint/no-var-requires
const { EnvironmentPlugin } = require('webpack');

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

        config.plugins.push(new EnvironmentPlugin(['SENDGRID_API_KEY', 'SENTRY_DSN']));

        return config;
    },
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
