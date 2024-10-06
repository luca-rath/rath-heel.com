import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const logoVariants = cva(
    'transition group-hover/logowall-link:drop-shadow-lg group-focus-visible/logowall-link:drop-shadow-lg',
    {
        variants: {
            size: {
                xs: 'h-8',
                sm: 'h-10',
                md: 'h-12',
                lg: 'h-14',
            },
        },
    },
);

type Props = {
    label: string;
    url: string;
    Component: React.FC<React.SVGProps<SVGElement>>;
    className?: string;
} & Omit<VariantProps<typeof logoVariants>, 'size'> &
    Required<Pick<VariantProps<typeof logoVariants>, 'size'>>;

export default function LogoLink({ label, url, Component, className, ...variants }: Props) {
    return (
        <a
            href={url}
            target="_blank"
            rel="nofollow noreferrer"
            className={twMerge(
                'group/logowall-link flex h-14 items-center outline-none transition-transform focus-visible:scale-105',
                className,
            )}
            aria-label={label}
        >
            <Component role="img" className={logoVariants({ ...variants })} />
        </a>
    );
}
