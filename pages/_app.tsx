import 'styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useGTM } from 'lib/gtm';
import { useAnalytics } from 'lib/analytics';

function MyApp({ Component, pageProps }: AppProps) {
    useGTM();
    useAnalytics();
    return (
        <ThemeProvider
            attribute="class"
            forcedTheme={pageProps.strictDarkMode ? 'dark' : null}
        >
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
