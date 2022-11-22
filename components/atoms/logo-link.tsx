import { cva, type VariantProps } from 'class-variance-authority';

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
} & Omit<VariantProps<typeof logoVariants>, 'size'> &
    Required<Pick<VariantProps<typeof logoVariants>, 'size'>>;

export default function LogoLink({ label, url, Component, ...variants }: Props) {
    return (
        <a
            href={url}
            target="_blank"
            rel="nofollow noreferrer"
            className="group/logowall-link outline-none transition focus-visible:scale-105"
            aria-label={label}
        >
            <Component role="img" className={logoVariants({ ...variants })} />
        </a>
    );
}
