import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useGA = () => {
    const router = useRouter();
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
            page_path: window.location.pathname,
        });
        console.log('d', process.env.NEXT_PUBLIC_GA_ID);

        const track = (url) => {
            if (window.gtag) {
                console.log('d', url);
                gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
                    page_path: url,
                });
            }
        };

        router.events.on('routeChangeComplete', track);
        return () => {
            router.events.off('routeChangeComplete', track);
        };
    }, [router.events]);
};
