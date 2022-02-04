import { useTheme } from 'next-themes';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useState } from 'react';
import Footer from './Footer';

export type Metadata = {
    title?: string;
    description?: string;
    image?: string;
    ogType?: 'website' | 'article';
    publishedOn?: Date;
    canonicalUrlPath?: string;
    canonicalUrlDomain?: string;
};

export default function Container({
    metadata,
    children,
    hideLogo,
    hideThemeButton,
}: PropsWithChildren<{
    metadata?: Metadata;
    hideLogo?: boolean;
    hideThemeButton?: boolean;
}>) {
    const { forcedTheme, resolvedTheme, setTheme } = useTheme();
    const router = useRouter();

    // After mounting, we have access to the theme
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    let strictDarkMode: boolean;
    if (mounted && forcedTheme) {
        strictDarkMode = true;
    }

    const meta: Metadata = {
        title: '9works - A Micro Space of Shivam for tinkering with ideas',
        description: `A Micro Space for tinkering and experimenting with ideas and new technologies. A part of the multiverse of Shivam Rathore's imagination.`,
        image: 'https://9works.tk/banner.png',
        ogType: 'website',
        canonicalUrlPath: router.asPath,
        canonicalUrlDomain: 'https://9works.tk',
        ...metadata,
    };
    if (meta.canonicalUrlDomain.endsWith('/'))
        meta.canonicalUrlDomain = meta.canonicalUrlDomain.slice(0, -1);
    if (!meta.canonicalUrlPath.startsWith('/'))
        meta.canonicalUrlPath = '/' + meta.canonicalUrlPath;

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="author" content="Shivam Rathore" />
                <meta name="creator" content="Shivam Rathore" />
                <meta name="publisher" content="Shivam Rathore" />
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta name="color-scheme" content="dark light" />
                <meta
                    property="og:url"
                    content={meta.canonicalUrlDomain + meta.canonicalUrlPath}
                />
                <link
                    rel="canonical"
                    href={meta.canonicalUrlDomain + meta.canonicalUrlPath}
                />
                <meta property="og:type" content={meta.ogType} />
                <meta property="og:site_name" content="9works" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@010shivam" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.publishedOn && (
                    <meta
                        property="article:published_time"
                        content={meta.publishedOn.toISOString()}
                    />
                )}
            </Head>
            <div className="flex flex-col justify-center px-8">
                <nav className="flex items-center justify-between w-full relative max-w-[64rem] mx-auto md:px-2 pt-8 pb-10 bg-opacity-60">
                    {Logo(hideLogo)}
                    {ToggleDarkModeButton(
                        strictDarkMode,
                        mounted,
                        resolvedTheme,
                        setTheme,
                        hideThemeButton,
                    )}
                </nav>
            </div>
            <main id="skip" className="flex flex-col justify-center px-8 grow ">
                {children}
                <Footer />
            </main>
        </>
    );
}

function Logo(hideLogo: boolean) {
    return hideLogo ? (
        <span></span>
    ) : (
        <Link href={'/'}>
            <a className=" inline-block -ml-2 font-bold font-logo text-3xl select-none hover:scale-125 -rotate-6 duration-700">
                <span className="select-none hidden sm:block">
                    9works.
                    <span className="text-pink-700">tk </span>
                </span>
                <span className="select-none block sm:hidden mt-3">
                    {/* <Image
                        alt="9w"
                        src={'/logo.png'}
                        width={'64'}
                        height={'64'}
                    ></Image> */}
                    9w
                </span>
            </a>
        </Link>
    );
}

function ToggleDarkModeButton(
    strictDarkMode: boolean,
    mounted: boolean,
    resolvedTheme: string,
    setTheme: (theme: string) => void,
    hideButton: boolean,
) {
    return (
        !strictDarkMode &&
        !hideButton && (
            <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="w-9 h-9 bg-rang-200 rounded-lg dark:bg-rang-600 flex items-center justify-center  hover:ring-2 ring-rang-300 transition-all"
                onClick={() =>
                    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                }
            >
                {mounted && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        stroke="currentColor"
                        className="w-5 h-5 text-rang-800 dark:text-rang-200"
                    >
                        <path
                            d={
                                resolvedTheme === 'dark'
                                    ? /* sun */ 'M128 56a72 72 0 1 0 72 72a72.1 72.1 0 0 0-72-72zm0 120a48 48 0 1 1 48-48a48 48 0 0 1-48 48zM116 28v-8a12 12 0 0 1 24 0v8a12 12 0 0 1-24 0zm74.2 37.8a12 12 0 0 1 0-17l5.7-5.7a12 12 0 0 1 17 17l-5.7 5.7a12 12 0 0 1-8.5 3.5a12.2 12.2 0 0 1-8.5-3.5zM248 128a12 12 0 0 1-12 12h-8a12 12 0 0 1 0-24h8a12 12 0 0 1 12 12zm-35.1 67.9a12.2 12.2 0 0 1 0 17a12.4 12.4 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5l-5.7-5.7a12 12 0 0 1 17-17zM140 228v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0zm-74.2-37.8a12 12 0 0 1 0 17l-5.7 5.7a12 12 0 0 1-8.5 3.5a12.4 12.4 0 0 1-8.5-3.5a12.2 12.2 0 0 1 0-17l5.7-5.7a12 12 0 0 1 17 0zM40 128a12 12 0 0 1-12 12h-8a12 12 0 0 1 0-24h8a12 12 0 0 1 12 12zm3.1-67.9a12 12 0 0 1 17-17l5.7 5.7a12 12 0 0 1 0 17a12.2 12.2 0 0 1-8.5 3.5a12 12 0 0 1-8.5-3.5z'
                                    : /* moon */ 'M228.1 149.1a12 12 0 0 0-11.6-8.5a11.4 11.4 0 0 0-3.3.6a80 80 0 0 1-98.3-98.4a13.5 13.5 0 0 0 .4-2.8a12 12 0 0 0-7.5-11.8a12.6 12.6 0 0 0-7.9-.4A104 104 0 1 0 228.2 156a12.5 12.5 0 0 0-.1-6.9zM128 208A80 80 0 0 1 88.1 58.6a104.2 104.2 0 0 0 109.3 109.3A80.4 80.4 0 0 1 128 208z'
                            }
                            fill="currentColor"
                        ></path>
                    </svg>
                )}
            </button>
        )
    );
}
