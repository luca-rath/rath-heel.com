import Section from '../molecules/section';

export default function AboutMeSection() {
    return (
        <Section title="About Me">
            <p className="prose prose-lg prose-zinc mx-auto max-w-xl text-center sm:prose-xl">
                I&apos;m a <b>full stack</b> web developer.
                <br />
                Strongly interested in new <b>trends</b> and <b>technologies</b>.
                <br />
                Enthusiastic <b>open source</b> contributor.
                <br />
                Love to <b>work & travel</b>.
                <br />
                Enjoy building <b>business software</b> the most.
                <br />
                Passionate <b>skier</b> in the <b>Austrian Alps</b>.
            </p>
        </Section>
    );
}
