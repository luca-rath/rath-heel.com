import { PropsWithChildren } from 'react';
import Footer from '@/components/organisms/footer';
import '@/styles/globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en" className="scroll-pt-8 scroll-smooth">
            <body className="flex h-full flex-col bg-zinc-50">
                <div className="fixed inset-0 flex justify-center sm:px-8 md:px-12 lg:px-16">
                    <div className="flex w-full max-w-6xl">
                        <div className="w-full bg-white ring-1 ring-zinc-100"></div>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex min-h-screen flex-col sm:px-8 md:px-12 lg:px-16">
                        <div className="mx-auto w-full max-w-6xl">
                            <div className="relative px-6 sm:px-8 md:px-12 lg:px-16">
                                <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
