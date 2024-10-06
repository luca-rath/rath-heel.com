'use server';

import { z } from 'zod';
import { zfd } from 'zod-form-data';
import { mailer } from '@/lib/mailer';
import { headers } from 'next/headers';
import assert from 'assert';

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

        await checkTurnstile(data['cf-turnstile-response']);

        await mailer.sendMail({
            from: {
                address: 'noreply@rath-heel.com',
                name: 'noreply@rath-heel.com',
            },
            to: {
                address: 'luca@rath-heel.com',
                name: 'Luca Rath-Heel',
            },
            replyTo: {
                address: data.email,
                name: `${data.firstName} ${data.lastName}`.trim(),
            },
            subject: 'Website contact request',
            text: `
First name: ${data.firstName}
Last name: ${data.lastName}
Email address: ${data.email}
Message: ${data.message}`.trim(),
            html: `
<p>
    <b>First name:</b> ${data.firstName}<br/>
    <b>Last name:</b> ${data.lastName}<br/>
    <b>Email address:</b> ${data.email}<br/>
    <b>Message:</b> ${data.message}
</p>`.trim(),
        });
    } catch {
        return { status: 'error' };
    }

    return { status: 'success' };
}

async function checkTurnstile(token: string): Promise<void> {
    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(url, {
        body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: token,
            remoteip: headers().get('cf-connecting-ip'),
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const outcome = (await result.json()) as { success: boolean };
    assert(outcome.success, 'Failed to verify Turnstile token');
}
