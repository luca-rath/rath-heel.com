import { NextRequest } from 'next/server';
import { zfd } from 'zod-form-data';

export const config = {
    runtime: 'experimental-edge',
};

const schema = zfd.formData({
    firstName: zfd.text().optional(),
    lastName: zfd.text().optional(),
    email: zfd.text(),
    message: zfd.text(),
});

export default async function handler(req: NextRequest) {
    if (req.method !== 'POST') return new Response(null, { status: 404, statusText: 'Not Found' });

    try {
        const formData = await req.formData();
        const data = schema.parse(formData);

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (e) {
        return new Response(null, { status: 400, statusText: 'Bad Request' });
    }
}
