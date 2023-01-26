import Section from '../molecules/section';

export default function AboutMeSection() {
    return (
        <Section title="About Me">
            <p className="prose prose-lg prose-zinc mx-auto max-w-xl text-center sm:prose-xl">
                I&apos;m a <b>web&nbsp;developer</b> and <b>solution&nbsp;architect</b>.
                <br />
                Strongly interested in new <b>trends</b> and <b>technologies</b>.
                <br />
                Enthusiastic <b>open&nbsp;source</b> contributor.
                <br />
                Love to <b>work&nbsp;&&nbsp;travel</b>.
                <br />
                Enjoy building <b>business&nbsp;software</b> the most.
                <br />
                Passionate <b>skier</b> in the <b>Austrian&nbsp;Alps</b>.
            </p>
        </Section>
    );
}
