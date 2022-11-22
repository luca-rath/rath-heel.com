import { PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const fieldVariants = cva(
    'rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-900',
    {
        variants: {
            disabled: {
                true: 'bg-zinc-100',
            },
        },
    },
);

type Props = PropsWithChildren<{
    id: string;
    label: string;
    required: boolean;
}> &
    VariantProps<typeof fieldVariants>;

export default function Field({ label, id, children, ...props }: Props) {
    return (
        <div className={fieldVariants({ ...props })}>
            <label htmlFor={id} className="block text-xs font-medium lowercase text-zinc-500">
                {label}
            </label>
            {children}
        </div>
    );
}
