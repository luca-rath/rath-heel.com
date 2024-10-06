import { PropsWithChildren } from 'react';

export default function DescriptionList({ children }: PropsWithChildren) {
    return (
        <div className="sm:border-t sm:border-gray-200">
            <dl className="sm:divide-y sm:divide-gray-200">{children}</dl>
        </div>
    );
}
