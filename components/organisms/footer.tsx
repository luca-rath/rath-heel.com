import Link from '../atoms/link';

export default function Footer() {
    return (
        <footer className="mt-auto">
            <div className="mx-auto w-full max-w-6xl border-t border-zinc-100 py-6 sm:py-8">
                <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
                    <div className="flex flex-col gap-x-24 gap-y-2 sm:flex-row sm:items-center sm:justify-between lg:max-w-5xl">
                        <p className="text-center text-sm text-zinc-400">
                            © {new Date().getFullYear()} Luca Rath-Heel. All rights reserved.
                        </p>
                        <nav>
                            <Link
                                className="block text-center text-sm text-zinc-400 hover:text-zinc-500"
                                href="/legal-notice"
                            >
                                Legal Notice
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
