import Layout from 'components/Layout';

export default function Index({ username, password }) {
    return (
        <Layout
            heading={
                <>
                    Basic <span className="text-pink-700">Secure</span>
                </>
            }
            metadata={{
                title: 'secured with basic auth',
                description:
                    'This page follows the basic auth security protocol',
            }}
        >
            <p className="mt-5">
                <span className="text-[3.5rem] leading-8 mt-2 pr-1 float-left">
                    T
                </span>
                his page is a demo of basic auth security protocol in{' '}
                <span
                    className="font-logo tracking-widest align-bottom"
                    title="next.js"
                >
                    Next.js
                </span>{' '}
                which makes the content of this page{' '}
                <span className="font-logo tracking-wider align-bottom">
                    password protected.
                </span>
            </p>
            <div className="mt-8 -mb-8 mx-auto font-bold text-center">
                <h2 className="">Your 'username {'&'} password' were:</h2>
                <div className="italic items-center ">
                    <span className="text-pink-700">{username}</span>{' '}
                    <span className="select-none dark:text-rang-600 text-rang-300">
                        @
                    </span>{' '}
                    <span className="text-pink-700">{password}</span>
                </div>
            </div>
        </Layout>
    );
}

export function getStaticProps() {
    return {
        props: {
            username: process.env.DEMO_BASIC_USER,
            password: process.env.DEMO_BASIC_PASS,
        },
    };
}
