import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import Webpack from 'webpack';

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/main/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.plugins.push(new Webpack.EnvironmentPlugin(['NEXT_PUBLIC_TURNSTILE_SITE_KEY']));
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;
