import { NextRequest } from 'next/server';
import { z } from 'zod';
import { zfd } from 'zod-form-data';
import { classes as SendgridClasses } from '@sendgrid/helpers';
const { Mail } = SendgridClasses;

const schema = zfd.formData({
    firstName: zfd.text(z.string().optional()),
    lastName: zfd.text(z.string().optional()),
    email: zfd.text(z.string().email()),
    message: zfd.text(),
    honung: zfd.text(z.string().optional()),
});

export default async function handler(req: NextRequest) {
    if (req.method !== 'POST') {
        return new Response(null, { status: 404, statusText: 'Not Found' });
    }

    let data;
    try {
        const formData = await req.formData();
        data = schema.parse(formData);
    } catch (e) {
        return new Response(null, { status: 400, statusText: 'Bad Request' });
    }

    if (data.honung) {
        return new Response(null, { status: 400, statusText: 'Bad Request' });
    }

    try {
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${process.env.SENDGRID_API_KEY}`);
        headers.append('Content-Type', 'application/json');

        const mail = new Mail({
            from: 'Luca Rath-Heel <noreply@rath-heel.com>',
            to: 'Luca Rath-Heel <luca@rath-heel.com>',
            replyTo: data.email,
            subject: 'Website contact request',
            text: `First name: ${data.firstName || ''}
Last name: ${data.lastName || ''}
Email address: ${data.email || ''}
Message: ${data.message || ''}`,
            html: `<p>
<b>First name:</b> ${data.firstName || ''}<br/>
<b>Last name:</b> ${data.lastName || ''}<br/>
<b>Email address:</b> ${data.email || ''}<br/>
<b>Message:</b> ${data.message || ''}</p>`,
        });

        const mailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(mail.toJSON()),
        });

        if (!mailResponse.ok) {
            return new Response(null, { status: 500, statusText: 'Internal Server Error' });
        }

        return new Response(null, { status: 200, statusText: 'OK' });
    } catch (e) {
        return new Response(null, { status: 500, statusText: 'Internal Server Error' });
    }
}
