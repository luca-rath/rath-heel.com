import type { Config } from 'tailwindcss';
import twForms from '@tailwindcss/forms';
import twTypography from '@tailwindcss/typography';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [twForms, twTypography],
};
export default config;
