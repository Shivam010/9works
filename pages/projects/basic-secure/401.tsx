import UnauthorizedPage from 'components/401';

export default function Unauthorized({ username, password }) {
    return (
        <UnauthorizedPage
            buttonUrl="/projects/basic-secure"
            buttonText="Try Again"
        >
            <div className="mt-20 -mb-10 mx-auto font-bold text-center">
                <h2 className="">Here's the 'username {'&'} password':</h2>
                <div className="italic items-center ">
                    <span className="text-pink-700">{username}</span>{' '}
                    <span className="select-none dark:text-rang-600 text-rang-300">
                        @
                    </span>{' '}
                    <span className="text-pink-700">{password}</span>
                </div>
            </div>
        </UnauthorizedPage>
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
