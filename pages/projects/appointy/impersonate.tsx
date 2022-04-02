import ExternalLink from 'components/ExternalLink';
import Layout from 'components/Layout';
import ResponseMsg from 'components/ResponseMsg';
import { readFileSync } from 'fs';
import Link from 'next/link';
import { FormEvent, ReactNode, useRef, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import GoogleLoginButton from 'components/GoogleLoginButton';
import { useEffect } from 'react';

export default function Impersonate(envs: AllowedEnvs) {
    const { data: session, status } = useSession();
    const [hasAccess, setHasAccess] = useState<boolean>(false);

    const envRef = useRef<HTMLSelectElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const [loader, setLoader] = useState(false);
    const [response, setResponse] = useState<{
        msg?: ReactNode;
        isError?: boolean;
    }>({});

    useEffect(() => {
        let isAuthenticated = false;
        if (session && session.user)
            isAuthenticated = status === 'authenticated';
        if (isAuthenticated) {
            let access = session.user.allowedActions.includes('impersonate');
            setHasAccess(access);
            if (access) {
                setResponse({});
            } else {
                setResponse({
                    msg: 'You do not have access to this page.',
                    isError: true,
                });
            }
        } else {
            setResponse({});
            setHasAccess(false);
        }
    }, [session, status]);
    console.log(session, hasAccess, response);
    console.log(session?.user);

    const impersonate = async (e: FormEvent) => {
        e.preventDefault();
        setResponse({});
        setLoader(true);
        emailRef.current.blur();

        const { link, error } = await fetch(
            `/api/appointy/impersonate?email=${emailRef.current.value}&env=${envRef.current.value}`,
            {
                headers: {
                    Accept: 'application/json',
                },
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
            },
        ).then((r) => r.json());
        console.log(link, error);

        setLoader(false);
        setResponse(responseMessage(link, error));
    };

    return (
        <Layout
            heading={
                <>
                    Im<span className="text-pink-700">per</span>sonation
                </>
            }
            metadata={{
                title: 'Impersonation',
                description: 'Impersonate your developer account',
            }}
        >
            {pageInfo()}
            <div className="w-full flex flex-col items-center justify-center">
                <form
                    onSubmit={impersonate}
                    className="mb-2 flex flex-col items-center justify-center"
                >
                    <div id="selector">
                        <label htmlFor="email" className="">
                            Impersonation Email for{' '}
                        </label>
                        <select
                            ref={envRef}
                            onChange={(e) => {
                                envRef.current.blur();
                            }}
                            className="w-24 vxs:w-28 rounded-md bg-transparent font-bold italic"
                        >
                            {Object.keys(envs).map((e) => {
                                return (
                                    <option key={e} value={e}>
                                        {envs[e]}
                                    </option>
                                );
                            })}
                        </select>{' '}
                    </div>
                    <div className="flex">
                        <input
                            id="email"
                            ref={emailRef}
                            aria-label="Email for impersonation"
                            placeholder="Enter the email id"
                            type="email"
                            autoComplete="off"
                            required
                            disabled={!hasAccess}
                            className={
                                // ' pl-4 pr-14 vxs:pr-20 ' +
                                ' pl-3 pr-10 w-72 vxs:w-80 ' +
                                ' mr-2 my-3 mx-auto py-2 border-rang-300 rounded-md bg-transparent' +
                                ' bg-rang-0 dark:bg-rang-800 ' +
                                ' focus:text-rang-700 focus:dark:text-rang-200 ' +
                                ' shadow-lg focus:shadow-md dark:shadow-sm focus:dark:shadow-inner ' +
                                ' shadow-rang-200 dark:shadow-rang-700 ' +
                                ' focus:bg-gradient-to-tl focus:from-rang-100 focus:via-rang-0 focus:to-rang-0 ' +
                                ' focus:dark:from-rang-800 focus:dark:via-rang-900 focus:dark:to-rang-800 '
                            }
                        />
                        <button disabled={!hasAccess} type="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={
                                    '  -ml-14 h-6 w-6 inline hover:dark:fill-rang-500 hover:fill-rang-200 ' +
                                    (hasAccess
                                        ? ' dark:fill-rang-400 fill-rang-300 '
                                        : ' dark:fill-rang-500 fill-rang-200 ')
                                }
                                viewBox="0 0 32 32"
                            >
                                <path d="M27.45 15.11l-22-11a1 1 0 0 0-1.08.12a1 1 0 0 0-.33 1L6.69 15H18v2H6.69L4 26.74A1 1 0 0 0 5 28a1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78z"></path>
                                {/* <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"></path> */}
                            </svg>
                        </button>
                    </div>
                </form>
                {loader ? (
                    <svg
                        className="ml-2 animate-spin h-5 w-5 block"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                ) : (
                    <></>
                )}
                {response.msg ? (
                    <ResponseMsg
                        message={response.msg}
                        isError={response.isError}
                    />
                ) : (
                    <></>
                )}
                {status === 'unauthenticated' ? (
                    <div className="">
                        <GoogleLoginButton />
                    </div>
                ) : (
                    <div className="italic text-left w-full text-xs mt-6 text-rang-300">
                        * Note, Use it in professional spirit.
                        <br /> * Signed in as {session?.user?.email}
                        {'. '}
                        <button
                            onClick={() => signOut()}
                            className="underline font-bold italic text-pink-700 "
                        >
                            Sign out
                        </button>
                        <br />{' '}
                        {response
                            ? '** And Remember to logout from the env before using the link'
                            : ''}
                    </div>
                )}
            </div>
            <p className="-mb-16 w-full mt-5">
                Check out{' '}
                <Link href="/projects/appointy">
                    <a className="font-bold text-pink-700 align-middle hover:underline underline-offset-4">
                        other appointy projects
                    </a>
                </Link>{' '}
                and for code base check out{' '}
                <ExternalLink href="https://github.com/Shivam010">
                    <span className="font-bold text-pink-700 align-middle hover:underline underline-offset-4">
                        my GitHub profile
                    </span>
                </ExternalLink>
            </p>
        </Layout>
    );
}

function responseMessage(link: string, error: string) {
    return {
        msg: error ? (
            <span>Uhh, {error} !</span>
        ) : (
            <span>
                Your login link is{' '}
                <ExternalLink
                    className="underline underline-offset-4"
                    href={link}
                >
                    here
                </ExternalLink>
            </span>
        ),
        isError: error ? true : false,
    };
}

function pageInfo() {
    return (
        <blockquote className="mb-8 mt-2" title="wiki/impersonation">
            <ExternalLink href="https://support.google.com/admanager/answer/1241070">
                <h2 className="inline font-bold text-pink-700">
                    Google Support says,
                </h2>
            </ExternalLink>
            <h3>
                User impersonation allows you to temporarily sign in as a
                different user in your network. And can perform actions on their
                behalf and sees things as the User.
            </h3>
            <br />
            <ExternalLink href="https://www.social-engineer.org/framework/attack-vectors/impersonation/">
                <h2 className="inline font-bold text-pink-700">
                    Wikipedia says,
                </h2>
            </ExternalLink>
            <h3>
                "Impersonation is an act of pretending to be another person for
                the purpose of entertainment or support work. It should only be
                done with the consent of the owner. <br /> Use it in
                professional spirit."
            </h3>
            <br />
            <ExternalLink href="https://www.social-engineer.org/framework/attack-vectors/impersonation/">
                <h2 className="inline font-bold text-pink-700">
                    Social-Engineer defines,
                </h2>
            </ExternalLink>
            <h3>
                "Impersonation as the practice of pretexting as another person
                with the goal of obtaining information or access to a person,
                company, or computer system. <br />
                And marked it as a possible scam."
            </h3>
        </blockquote>
    );
}

type AllowedEnvs = { [key: string]: string };

export async function getStaticProps() {
    const data = readFileSync('./public/o/appointy/allowed-env.json');
    const envs: AllowedEnvs = JSON.parse(data.toString());
    return {
        props: envs,
    };
}
