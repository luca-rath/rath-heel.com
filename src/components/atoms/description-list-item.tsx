import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    title: string;
}>;

export default function DescriptionListItem({ title, children }: Props) {
    return (
        <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">{title}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{children}</dd>
        </div>
    );
}
