export default function Footer() {
    return (
        <footer className="mt-auto">
            <div className="mx-auto w-full max-w-6xl border-t border-zinc-100 py-6 sm:py-8">
                <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                        <p className="text-center text-sm text-zinc-400 dark:text-zinc-500">
                            © {new Date().getFullYear()} Luca Rath-Heel. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
