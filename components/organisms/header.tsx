import Image from 'next/image';
import GitHubIcon from '../../assets/icons/github.svg';
import LinkedInIcon from '../../assets/icons/linkedin.svg';
import SocialLink from '../atoms/social-link';

export default function Header() {
    return (
        <header aria-labelledby="title" aria-describedby="description">
            <div className="mx-auto flex max-w-sm flex-col items-center gap-y-4 sm:max-w-md">
                <Image
                    className="h-32 w-32 rounded-full object-cover drop-shadow-lg"
                    src="/images/luca-rath-heel.png"
                    alt="Luca Rath-Heel"
                    width={128}
                    height={128}
                    loading="eager"
                />

                <h1 id="title" className="text-center text-4xl font-extrabold tracking-tight text-zinc-800 sm:text-5xl">
                    Luca Rath-Heel
                </h1>

                <p id="description" className="prose prose-xl prose-zinc text-center sm:prose-2xl">
                    Hi 👋🏻 I&apos;m Luca and I work as a full&nbsp;stack software&nbsp;engineer.
                </p>

                <div className="mt-4 flex gap-4">
                    <SocialLink label="Find me on GitHub" url="https://github.com/luca-rath">
                        <GitHubIcon className="h-10 w-10" role="img" />
                    </SocialLink>

                    <SocialLink label="Follow me on LinkedIn" url="https://linkedin.com/in/luca-rath">
                        <LinkedInIcon className="h-10 w-10" role="img" />
                    </SocialLink>
                </div>
            </div>
        </header>
    );
}
