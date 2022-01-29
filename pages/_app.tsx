import 'styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useGA } from 'lib/ga';
import { useAnalytics } from 'lib/analytics';

function MyApp({ Component, pageProps }: AppProps) {
    useGA();
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
