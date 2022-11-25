'use client';

import { FormEvent, useState } from 'react';
import Button from '../atoms/button';
import Input from '../atoms/input';
import TextArea from '../atoms/textarea';
import Section from '../molecules/section';

enum FormState {
    IS_SUBMITTING,
    ERROR,
    SUCCESS,
}

export default function ContactSection() {
    const [formState, setFormState] = useState<FormState | undefined>(undefined);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        setFormState(FormState.IS_SUBMITTING);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                cache: 'no-cache',
                body: new FormData(form),
            });

            if (!response.ok) {
                setFormState(FormState.ERROR);
                return;
            }

            setFormState(FormState.SUCCESS);
        } catch (e) {
            setFormState(FormState.ERROR);
        }
    };

    const handleClickTryAgain = () => {
        setFormState(undefined);
    };

    return (
        <Section title="Contact">
            <form
                onSubmit={(event) => void handleSubmit(event)}
                className="mx-auto flex max-w-lg flex-col gap-3 aria-hidden:hidden sm:gap-4"
                method="POST"
                action="/api/contact"
                target="_blank"
                aria-hidden={undefined !== formState && FormState.IS_SUBMITTING !== formState}
                hidden={undefined !== formState && FormState.IS_SUBMITTING !== formState}
            >
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <div className="flex-1">
                        <Input
                            name="firstName"
                            type="text"
                            label="First name"
                            required={false}
                            disabled={formState === FormState.IS_SUBMITTING}
                        />
                    </div>

                    <div className="flex-1">
                        <Input
                            name="lastName"
                            type="text"
                            label="Last name"
                            required={false}
                            disabled={formState === FormState.IS_SUBMITTING}
                        />
                    </div>
                </div>

                <Input
                    name="email"
                    type="email"
                    label="Email"
                    required={true}
                    disabled={formState === FormState.IS_SUBMITTING}
                />

                <TextArea
                    name="message"
                    label="Message"
                    required={true}
                    disabled={formState === FormState.IS_SUBMITTING}
                />

                <div className="flex">
                    <Button type="submit" disabled={formState === FormState.IS_SUBMITTING}>
                        Submit
                    </Button>
                </div>

                <div className="sr-only">
                    <label htmlFor="honung" className="sr-only">
                        Email
                    </label>
                    <input id="honung" type="email" name="honung" className="sr-only" tabIndex={-1} />
                </div>
            </form>

            {formState === FormState.ERROR && (
                <p className="prose prose-lg prose-zinc mx-auto max-w-xl text-center sm:prose-xl">
                    An error has occurred.
                    <br />
                    Do you want to{' '}
                    <Button size="sm" onClick={handleClickTryAgain}>
                        try again?
                    </Button>
                </p>
            )}

            {formState === FormState.SUCCESS && (
                <p className="prose prose-lg prose-zinc mx-auto max-w-xl text-center sm:prose-xl">
                    Thank you for your message!
                    <br />
                    I&apos;ll get back to you as soon as possible.
                </p>
            )}
        </Section>
    );
}
