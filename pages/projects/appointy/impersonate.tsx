import Layout from 'components/Layout';
import ResponseMsg from 'components/ResponseMsg';
import { readFileSync } from 'fs';
import { FormEvent, useRef, useState } from 'react';

export default function Impersonate(envs: AllowedEnvs) {
    const envRef = useRef(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const [loader, setLoader] = useState(false);
    const [impLink, setImpLink] = useState('');

    console.log(envs);
    const impersonate = async (e: FormEvent) => {
        e.preventDefault();
        setImpLink('');
        setLoader(true);
        emailRef.current.blur();
        console.log(
            loader,
            impLink,
            emailRef.current.value,
            envRef.current.value,
        );
        // todo: api call to update link
        setTimeout(() => {
            setLoader(false);
            setImpLink(
                'Your login link is here: https://example.com/link/example.com/link/example.com/link',
            );
        }, 1000);
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
            <blockquote>
                <div className="mb-2">
                    Impersonation is an act of pretending to be another person
                    for the purpose of entertainment or support work. It should
                    only be done with the consent of the owner. Use it in
                    professional spirit.
                </div>
            </blockquote>
            <form onSubmit={impersonate} className="mt-10 ">
                <label htmlFor="email" className="">
                    Impersonation Email for{' '}
                </label>
                <select
                    ref={envRef}
                    className="w-24 vxs:w-28 rounded-md bg-transparent"
                >
                    {Object.keys(envs).map((e) => {
                        return (
                            <option key={e} value={e}>
                                {envs[e].name}
                            </option>
                        );
                    })}
                </select>{' '}
                <div className="flex justify-between items-center">
                    <input
                        id="email"
                        ref={emailRef}
                        aria-label="Email for impersonation"
                        placeholder="Enter the email id"
                        type="email"
                        autoComplete="off"
                        required
                        className={
                            ' mr-2 my-3 pl-4 pr-20 mx-auto py-2 border-rang-300 rounded-md bg-transparent' +
                            ' bg-rang-0 dark:bg-rang-800 ' +
                            ' focus:text-rang-700 focus:dark:text-rang-200 ' +
                            ' shadow-lg focus:shadow-md dark:shadow-sm focus:dark:shadow-inner ' +
                            ' shadow-rang-200 dark:shadow-rang-700 ' +
                            ' focus:bg-gradient-to-tl focus:from-rang-100 focus:via-rang-0 focus:to-rang-0 ' +
                            ' focus:dark:from-rang-800 focus:dark:via-rang-900 focus:dark:to-rang-800 '
                        }
                    />
                    <button type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={
                                ' h-9 w-9 inline dark:fill-rang-400 fill-rang-300' +
                                ' hover:dark:fill-rang-500 hover:fill-rang-200 '
                            }
                            viewBox="0 0 24 24"
                        >
                            {/* <path d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16zm6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8z"></path> */}
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38z"></path>
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
            {impLink ? <ResponseMsg message={impLink} /> : <></>}
        </Layout>
    );
}

type AllowedEnvs = { [key: string]: { name: string } };

export async function getStaticProps() {
    const data = readFileSync('./api/appointy/allowed-env.json');
    const envs: AllowedEnvs = JSON.parse(data.toString());
    return {
        props: envs,
    };
}
