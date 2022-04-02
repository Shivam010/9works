import Layout from 'components/Layout';
import BigButton from 'components/BigButton';
import { PropsWithChildren } from 'react';

export default function UnauthorizedPage({
    buttonUrl,
    buttonText,
    children,
}: PropsWithChildren<{ buttonUrl?: string; buttonText?: string }>) {
    const heading = (
        <>
            <span className="text-pink-700">401</span> - unauthorized
        </>
    );
    buttonUrl = buttonUrl ? buttonUrl : '/projects?security';
    buttonText = buttonText ? buttonText : 'Return to Home';
    return (
        <Layout
            heading={heading}
            metadata={{
                title: '401 - unauthorized',
                description:
                    "It seems you're not authorized to access something",
            }}
        >
            <blockquote>
                <div className="mb-2">
                    It seems you're not authorized to access something or you
                    spelled something wrong. My guess is, you{' '}
                    <span className="md:underline underline-offset-4">
                        spelled something wrong
                    </span>
                    . Check your credentials that you have used, you must have.
                </div>
            </blockquote>
            <BigButton href={buttonUrl} className="w-64 mx-auto mt-10 -mb-10">
                {buttonText}
            </BigButton>
            {children}
        </Layout>
    );
}
