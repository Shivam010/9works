import { NextRequest, NextResponse } from 'next/server';

const Username = process.env.APPOINTY_BASIC_USER;
const Password = process.env.APPOINTY_BASIC_PASS;

export async function middleware(req: NextRequest) {
    const basicAuth = req.headers.get('authorization');
    const is401 = req.nextUrl.pathname.endsWith('/401');

    // Appointy Home
    if (req.nextUrl.pathname.endsWith('/appointy')) {
        return NextResponse.next();
    }
    // Appointy Home
    if (req.nextUrl.pathname.endsWith('/appointy/secure')) {
        const u = req.nextUrl.clone();
        u.pathname = u.pathname.slice(0, -'/secure'.length);
        u.searchParams.set('tag', 'secure');
        console.log(u);
        return NextResponse.redirect(u, 308);
    }

    if (basicAuth) {
        const auth = basicAuth.split(' ')[1];
        const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');
        if (user === Username && pwd === Password) {
            // Logged in request for 401 should be moved to Home
            if (is401) {
                const u = req.nextUrl.clone();
                u.pathname = u.pathname.slice(0, -'/401'.length);
                return NextResponse.redirect(u, 308);
            }
            return NextResponse.next();
        }
    }

    // Allow 401 request
    if (is401) return NextResponse.next();

    // Unauthorized refresh to 401 page
    return new Response(
        `<html><head><title>401 Unauthorized</title><meta http-equiv="refresh" content="0; URL=/projects/appointy/401"></head></html>`,
        {
            status: 401,
            headers: {
                'content-type': 'text/html',
                'WWW-Authenticate': 'Basic realm="Secure Area"',
            },
        },
    );
}
