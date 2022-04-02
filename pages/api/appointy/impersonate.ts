import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function Impersonate(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method !== 'POST') {
        res.status(405).json({
            error: 'Method not allowed',
        });
        return;
    }
    const env = req.query['env'];
    const email = req.query['email'];
    if (email == '') {
        res.status(412).json({
            error: 'Email is required',
        });
        return;
    }
    if (env == '') {
        return res.status(412).json({
            error: 'Invalid env provided',
        });
    }

    const session = await getSession({ req });
    if (!session) {
        return res.status(401).json({
            link: '',
            error: 'You are not authorized',
        });
    }
    if (!session.user.allowedActions.includes('impersonate')) {
        return res.status(403).json({
            link: '',
            error: 'You are not authorized',
        });
    }

    res.status(501).json({
        link: '',
        error: 'Unimplemented',
        ...session.user,
    });
}
