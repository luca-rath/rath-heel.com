import NextLink from 'next/link';

export default function NotFound() {
    return (
        <div className="mx-auto max-w-xl pt-6 sm:pt-12">
            <header>
                <main className="grid min-h-full place-items-center bg-white mt-6 sm:mt-24">
                    <div className="text-center">
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                            Page not found
                        </h1>
                        <p className="mt-4 sm:mt-6 text-base leading-7 text-zinc-700">
                            Sorry, we couldn&apos;t find the page you&apos;re looking for.
                        </p>
                        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6 gap-y-4 flex-wrap">
                            <NextLink
                                href="/"
                                className="rounded-md bg-zinc-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
                            >
                                Go back home
                            </NextLink>
                            <a
                                href="mailto:luca@rath-heel.com"
                                className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition"
                            >
                                Contact me <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </main>
            </header>
        </div>
    );
}
