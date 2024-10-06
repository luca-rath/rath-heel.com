import { ComponentProps } from 'react';
import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<typeof NextLink>;

export default function Link({ className, ...props }: Props) {
    return (
        <NextLink
            {...props}
            className={twMerge(
                'rounded-sm outline-none transition focus-visible:text-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-4',
                className,
            )}
        />
    );
}
