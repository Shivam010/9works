/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    swcMinify: true,
    trailingSlash: false,
    reactStrictMode: true,
    headers,
    rewrites: async () => {
        return [
            {
                source: '/favicon.ico',
                destination: '/favicons/favicon.ico',
            },
            {
                source: '/creator',
                destination: '/shivam.png',
            },
            {
                source: '/author',
                destination: '/shivam.png',
            },
            {
                source: '/shivam',
                destination: '/shivam.png',
            },
        ];
    },
};

async function headers() {
    const res = [
        {
            source: '/:slug*',
            headers: [
                {
                    key: 'x-author',
                    value: 'Shivam Rathore',
                },
            ],
        },
        {
            source: '/license',
            headers: [
                {
                    key: 'content-type',
                    value: 'text/plain; charset=utf-8',
                },
            ],
        },
    ];
    const cachedSources = [
        '/shivam:slug*',
        '/shivam/:slug*',
        '/fonts/:slug*',
        '/images/:slug*',
        '/creator',
        '/author',
        '/license',
    ];
    res.push(
        ...cachedSources.map((s) => ({
            source: s,
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=31536000, immutable',
                },
            ],
        })),
    );
    return res;
}
