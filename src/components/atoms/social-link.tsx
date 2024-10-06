import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    label: string;
    url: string;
}>;

export default function SocialLink({ label, url, children }: Props) {
    return (
        <a
            className="text-zinc-600 outline-none drop-shadow transition hover:text-zinc-900 focus-visible:scale-105 focus-visible:text-zinc-900"
            aria-label={label}
            target="_blank"
            rel="nofollow noreferrer noopener"
            href={url}
        >
            {children}
        </a>
    );
}
