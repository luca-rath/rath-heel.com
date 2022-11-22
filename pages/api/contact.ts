import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const schema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email(),
    message: z.string(),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // TODO send confirmation email
    const payload = schema.parse(req.body);
    res.status(200).json(payload);
}
