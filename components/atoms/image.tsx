'use client';

import { default as NextImage, ImageLoader } from 'next/image';

let fallbackLoader: ImageLoader | undefined = undefined;

if (process.env.NEXT_PUBLIC_HOSTING_PROVIDER === 'cloudflare') {
    const normalizeSrc = (src: string) => {
        return src.startsWith('/') ? src.slice(1) : src;
    };

    const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
        const params = [`width=${width}`];
        if (quality) {
            params.push(`quality=${quality}`);
        }
        const paramsString = params.join(',');
        return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
    };

    fallbackLoader = cloudflareLoader;
}

const Image: typeof NextImage = ({ loader, ...props }) => {
    return <NextImage loader={loader || fallbackLoader} {...props} />;
};

export default Image;
