import Button from '../atoms/button';
import Input from '../atoms/input';
import TextArea from '../atoms/textarea';
import Section from '../molecules/section';

export default function ContactSection() {
    return (
        <Section title="Contact">
            <form
                className="mx-auto flex max-w-lg flex-col gap-3 sm:gap-4"
                method="POST"
                action="/api/contact"
                target="_blank"
            >
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <div className="flex-1">
                        <Input name="firstName" type="text" label="First name" required={false} />
                    </div>

                    <div className="flex-1">
                        <Input name="lastName" type="text" label="Last name" required={false} />
                    </div>
                </div>

                <Input name="email" type="email" label="Email" required={true} />

                <TextArea name="message" label="Message" required={true} />

                <div className="flex">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Section>
    );
}
