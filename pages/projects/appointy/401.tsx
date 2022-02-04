import Layout from 'components/Layout';
import BigButton from 'components/BigButton';

export default function NotFound() {
    const heading = (
        <>
            <span className="text-pink-700">401</span> - unauthorized
        </>
    );
    return (
        <Layout heading={heading} metadata={{ title: '401 - unauthorized' }}>
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
            <BigButton
                href="/projects/appointy"
                className="w-64 mx-auto mt-10 -mb-10"
            >
                Return to Home
            </BigButton>
        </Layout>
    );
}
