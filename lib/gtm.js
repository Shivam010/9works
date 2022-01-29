import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useGTM = () => {
    const router = useRouter();
    useEffect(() => {
        gtm(
            window,
            document,
            'script',
            'dataLayer',
            process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
        );

        const track = (url) => {
            window.dataLayer.push({
                event: 'pageview',
                page: url,
            });
        };

        router.events.on('routeChangeComplete', track);
        return () => {
            router.events.off('routeChangeComplete', track);
        };
    }, [router.events]);
};

function gtm(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
}
