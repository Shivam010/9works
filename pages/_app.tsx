import 'styles/globals.css';

import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useAnalytics } from 'lib/analytics';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    useAnalytics();
    return (
        <SessionProvider session={session}>
            <ThemeProvider
                attribute="class"
                forcedTheme={pageProps.strictDarkMode ? 'dark' : null}
            >
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
}

export default MyApp;
