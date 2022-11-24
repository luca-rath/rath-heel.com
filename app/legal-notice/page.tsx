import Link from '../../components/atoms/link';
import ArrowLeft from '../../assets/icons/arrow-left.svg';

export default function LegalNoticePage() {
    return (
        <div className="mx-auto max-w-xl">
            <header>
                <nav>
                    <Link href="/" className="flex max-w-max items-center gap-2 text-zinc-700 hover:text-zinc-900">
                        <ArrowLeft className="-ml-0.5 h-6 w-6" role="img" />
                        <span>Back</span>
                    </Link>
                </nav>

                <h1 className="mt-8 text-3xl font-semibold sm:mt-12">Legal Notice</h1>
            </header>

            <main className="mt-5 sm:mt-8">
                <div className="sm:border-t sm:border-gray-200">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Luca Rath-Heel</dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500">Address</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                Alte Landstraße 8c
                                <br />
                                6832 Röthis
                                <br />
                                Austria
                            </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                            <dt className="text-sm font-medium text-gray-500">Contact</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                luca@rath-heel.com
                                <br />
                                +43 650 8434824
                            </dd>
                        </div>
                    </dl>
                </div>

                <div className="prose prose-zinc mt-8 sm:mt-16">
                    <h3>Disclaimers</h3>

                    <p>
                        All the information on this website - rath-heel.com - is published in good faith and for general
                        information purpose only. Luca Rath-Heel does not make any warranties about the completeness,
                        reliability and accuracy of this information. Any action you take upon the information you find
                        on this website is strictly at your own risk. Luca Rath-Heel will not be liable for any losses
                        and/or damages in connection with the use of this website.
                    </p>

                    <p>
                        From this website, you can visit other websites by following hyperlinks to such external sites.
                        While we strive to provide only quality links to useful and ethical websites, we have no control
                        over the content and nature of these sites. These links to other websites do not imply a
                        recommendation for all the content found on these sites. Site owners and content may change
                        without notice and may occur before we have the opportunity to remove a link which may have gone
                        &lsquo;bad&rsquo;.
                    </p>

                    <p>
                        Please be also aware that when you leave this website, other sites may have different privacy
                        policies and terms which are beyond our control. Please be sure to check the Privacy Policies of
                        these sites as well as their &ldquo;Terms of Service&rdquo; before engaging in any business or
                        uploading any information.
                    </p>

                    <h3>Consent</h3>

                    <p>By using this website, you hereby consent to this disclaimer and agree to its terms.</p>

                    <h3>Update</h3>

                    <p>
                        Should we update, amend or make any changes to this document, those changes will be prominently
                        posted here.
                    </p>
                </div>
            </main>
        </div>
    );
}
