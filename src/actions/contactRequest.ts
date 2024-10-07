'use server';

import { z } from 'zod';
import { zfd } from 'zod-form-data';
import { headers } from 'next/headers';
import { Resend } from 'resend';

const schema = zfd.formData({
    firstName: zfd.text(
        z
            .string()
            .trim()
            .nullish()
            .transform((v) => v ?? ''),
    ),
    lastName: zfd.text(
        z
            .string()
            .trim()
            .nullish()
            .transform((v) => v ?? ''),
    ),
    email: zfd.text(z.string().email().trim()),
    message: zfd.text(),
    'cf-turnstile-response': zfd.text(),
});

export async function contactRequest(formData: FormData): Promise<{ status: 'success' | 'error' }> {
    try {
        const data = await schema.parseAsync(formData);
        await checkTurnstile(data);
        await sendEmail(data);
    } catch (e: unknown) {
        console.error(e);
        return { status: 'error' };
    }

    return { status: 'success' };
}

async function sendEmail(data: z.infer<typeof schema>): Promise<void> {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
        from: 'noreply@internal.rath-heel.com',
        to: 'luca@rath-heel.com',
        replyTo: data.email,
        subject: 'Website contact request',
        text: `
                First name: ${data.firstName}
                Last name: ${data.lastName}
                Email address: ${data.email}
                Message: ${data.message}`,
        html: `
                <p>
                    <b>First name:</b> ${data.firstName}<br/>
                    <b>Last name:</b> ${data.lastName}<br/>
                    <b>Email address:</b> ${data.email}<br/>
                    <b>Message:</b> ${data.message}
                </p>`,
    });

    if (error) {
        throw new Error(error.message, { cause: error });
    }
}

async function checkTurnstile(data: z.infer<typeof schema>): Promise<void> {
    const token = data['cf-turnstile-response'];
    const ip = headers().get('cf-connecting-ip');
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

    const result = await fetch(url, {
        body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: token,
            remoteip: ip,
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const outcome = (await result.json()) as { success: boolean };

    if (!outcome.success) {
        throw new Error('Failed to verify Turnstile token', { cause: outcome });
    }
}
