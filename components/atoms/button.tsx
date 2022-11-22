import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    type?: 'button' | 'submit';
    children: string;
}>;

export default function Button({ type = 'button', children }: Props) {
    return (
        <button
            type={type}
            className="group/button text-md inline-flex -skew-x-6 items-center rounded-md border border-transparent bg-zinc-900 px-4 py-2 font-bold lowercase tracking-tight text-white shadow-sm outline-none transition hover:-skew-x-12 focus-visible:-skew-x-12 focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
        >
            <span className="block skew-x-6 transition group-hover/button:skew-x-12 group-focus-visible/button:skew-x-12">
                {children}
            </span>
        </button>
    );
}
