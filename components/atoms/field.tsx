import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    id: string;
    label: string;
    required: boolean;
}>;

export default function Field({ label, id, children }: Props) {
    return (
        <div className="rounded-md border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-zinc-900 focus-within:ring-1 focus-within:ring-zinc-900">
            <label htmlFor={id} className="block text-xs font-medium lowercase text-zinc-500">
                {label}
            </label>
            {children}
        </div>
    );
}
