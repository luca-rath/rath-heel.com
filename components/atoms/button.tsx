import { cva, VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

const buttonVariants = cva(
    'group/button inline-flex -skew-x-6 align-bottom leading-[inherit] items-center rounded-md border border-transparent bg-zinc-900 font-bold lowercase tracking-tight text-white shadow-sm outline-none transition hover:-skew-x-12 focus-visible:-skew-x-12 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:select-none disabled:bg-zinc-600',
    {
        variants: {
            size: {
                sm: 'px-2 py-1 text-sm',
                md: 'px-4 py-2 text-md',
            },
        },
        defaultVariants: {
            size: 'md',
        },
    },
);

type Props = PropsWithChildren<{
    type?: 'button' | 'submit';
    children: string;
    disabled?: boolean;
    onClick?: () => void;
}> &
    VariantProps<typeof buttonVariants>;

export default function Button({ type = 'button', children, disabled = false, onClick, ...props }: Props) {
    return (
        <button type={type} disabled={disabled} onClick={onClick} className={buttonVariants({ ...props })}>
            <span className="transitio-transform block skew-x-6 text-white group-hover/button:skew-x-12 group-focus-visible/button:skew-x-12">
                {children}
            </span>
        </button>
    );
}
