'use client';

import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';
import TextArea from '@/components/atoms/textarea';
import Section from '@/components/molecules/section';
import { contactRequest } from '@/actions/contactRequest';
import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { useFormState, useFormStatus } from 'react-dom';

type ActionState = { status: 'success' | 'error' } | undefined;

type TurnstileStatus = {
    status: 'success' | 'error' | 'expired' | 'required';
    message: string | undefined;
};

export default function ContactSection() {
    const [actionState, formAction, pending] = useFormState(
        async (_prevState: unknown, formData: FormData | null): Promise<ActionState> => {
            if (formData === null) {
                return undefined;
            }

            const result = await contactRequest(formData);

            return result;
        },
        undefined,
    );

    const handleClickTryAgain = () => {
        formAction(null);
    };

    return (
        <Section title="Contact">
            <form
                action={formAction}
                className="mx-auto flex max-w-lg flex-col gap-3 aria-hidden:hidden sm:gap-4"
                aria-hidden={actionState !== undefined}
                hidden={actionState !== undefined}
            >
                <InnerForm />
            </form>

            {actionState?.status === 'error' && (
                <p className="prose prose-lg prose-zinc mx-auto max-w-xl text-center sm:prose-xl">
                    An error has occurred.
                    <br />
                    Do you want to{' '}
                    <Button size="sm" onClick={handleClickTryAgain}>
                        try again?
                    </Button>
                </p>
            )}

            {actionState?.status === 'success' && (
                <p className="prose prose-lg prose-zinc mx-auto max-w-xl text-center sm:prose-xl">
                    Thank you for your message!
                    <br />
                    I&apos;ll get back to you as soon as possible.
                </p>
            )}
        </Section>
    );
}

function InnerForm() {
    const { pending } = useFormStatus();
    const [renderTurnstile, setRenderTurnstile] = useState(false);
    const [turnstileStatus, setTurnstileStatus] = useState<TurnstileStatus>({ status: 'required', message: undefined });

    function handleTouch() {
        if (!renderTurnstile) {
            setRenderTurnstile(true);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <div className="flex-1">
                    <Input
                        name="firstName"
                        type="text"
                        label="First name"
                        required={false}
                        disabled={pending}
                        onInput={handleTouch}
                    />
                </div>

                <div className="flex-1">
                    <Input
                        name="lastName"
                        type="text"
                        label="Last name"
                        required={false}
                        disabled={pending}
                        onInput={handleTouch}
                    />
                </div>
            </div>

            <Input
                name="email"
                type="email"
                label="Email address"
                required={true}
                disabled={pending}
                onInput={handleTouch}
            />

            <TextArea name="message" label="Message" required={true} disabled={pending} onInput={handleTouch} />

            {renderTurnstile && (
                <>
                    <Turnstile
                        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                        onSuccess={() => setTurnstileStatus({ status: 'success', message: undefined })}
                        onError={() =>
                            setTurnstileStatus({
                                status: 'error',
                                message: 'An error occurred while solving the captcha. Please try again.',
                            })
                        }
                        onExpire={() =>
                            setTurnstileStatus({ status: 'expired', message: 'Captcha expired. Please try again.' })
                        }
                    />

                    {!!turnstileStatus.message && (
                        <p className="text-red-600 text-sm" role="alert">
                            {turnstileStatus.message}
                        </p>
                    )}
                </>
            )}

            <div className="flex">
                <Button type="submit" disabled={pending || turnstileStatus.status !== 'success'}>
                    {pending ? 'Submitting...' : 'Submit'}
                </Button>
            </div>
        </>
    );
}
