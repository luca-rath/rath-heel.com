import { PropsWithChildren } from 'react';
import slugger from 'slugger';

type Props = PropsWithChildren<{
    title: string;
}>;

export default function Section({ title, children }: Props) {
    const slug = slugger(title);

    return (
        <section aria-labelledby={slug} className="space-y-12 lg:space-y-16">
            <h2 id={slug} className="flex justify-center">
                <a
                    href={`#${slug}`}
                    className="group/headline block -skew-x-6 rounded-lg bg-zinc-900 px-8 py-4 text-center text-3xl font-black lowercase text-white shadow-sm outline-none transition hover:-skew-x-12 focus-visible:-skew-x-12 focus-visible:ring-4 focus-visible:ring-zinc-900 focus-visible:ring-offset-4 sm:text-4xl"
                >
                    <span className="block skew-x-6 transition group-hover/headline:skew-x-12 group-focus-visible/headline:skew-x-12">
                        {title}
                    </span>
                </a>
            </h2>

            {children}
        </section>
    );
}
