import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ExternalLink = ({ href, children }) => (
    <a
        className="text-rang-500 hover:text-rang-600 transition"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
    >
        {children}
    </a>
);

export default function Footer() {
    const { forcedTheme, resolvedTheme } = useTheme();
    // After mounting, we have access to the theme
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    let themeMode: string;
    if (mounted) {
        themeMode = resolvedTheme === 'dark' ? 'Dark' : 'Light';
        themeMode = forcedTheme === 'dark' ? 'Dark' : themeMode;
        themeMode += ' Mode';
        console.log(themeMode);
    }

    return (
        <footer className="flex flex-col justify-center items-center max-w-3xl mx-auto w-full mb-4 mt-16">
            <hr className="w-full border-1 border-rang-200 dark:border-rang-800 mb-8" />
            <div className="w-full px-5 flex flex-row">
                <div className="grow max-w-3xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
                    <div className="flex flex-col space-y-4">
                        <Link href="/">
                            <a className="text-rang-500 hover:text-rang-600 transition">
                                Home
                            </a>
                        </Link>
                        <Link href="/appointy/calendars">
                            <a className="text-rang-500 hover:text-rang-600 transition">
                                Appointy / Calendar
                            </a>
                        </Link>
                        <Link href="/colors">
                            <a className="text-rang-500 hover:text-rang-600 transition">
                                Colors
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <ExternalLink href="https://twitter.com/010shivam">
                            Twitter
                        </ExternalLink>
                        <ExternalLink href="https://github.com/Shivam010">
                            GitHub
                        </ExternalLink>
                    </div>
                </div>
                <div className="text-rang-500">{themeMode}</div>
            </div>
        </footer>
    );
}
