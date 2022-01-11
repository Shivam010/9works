import { Container } from 'components/Container';
import Link from 'next/link';

export default function Index() {
    return (
        <Container>
            <div className="py-8 flex flex-col justify-center items-center mx-auto max-w-2xl">
                <h1
                    title="Shivam's Tech-Garage Workspace"
                    className="select-none flex flex-col mx-auto justify-center items-center font-logo text-3xl esm:text-5xl sm:text-6xl mb-12"
                >
                    <a
                        href="https://shivamrathore.com/"
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="capsized">Welcome to Shivam's </span>
                    </a>
                    <span className="capsized text-pink-600">Tech-Garage </span>
                    <span className="capsized">Workstation </span>
                    {/* <span className="capsized text-pink-600">Tool Kit</span> */}
                </h1>
                <p className="mb-12 first-letter:ml-1">
                    <span className="text-5xl -ml-2 -mt-6 pr-2 float-left animate-hi">
                        👋
                    </span>{' '}
                    Hi, I am Shivam Rathore, Senior Software Developer at
                    Appointy. This web app is like a Tech Garage Workstation for
                    me to tinker with new technologies, implement and experiment
                    different ideas. It works like a{' '}
                    <span className="underline underline-offset-1 text-pink-600">
                        garage station
                    </span>{' '}
                    for me.
                </p>
                <hr className="w-1/2 border-1 border-rang-200 dark:border-rang-800 mb-12" />
                <h2
                    id="why"
                    className="w-full font-logo text-2xl esm:text-4xl sm:text-5xl mb-8"
                >
                    why 9works ?
                </h2>
                <p className="mb-16">
                    Well, there isn't any valid explanation or reason for this.
                    It's like{' '}
                    <a
                        href="https://httpstatuses.com/418"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Status code - 418 I'm a teapot
                    </a>
                    , <code className="customCode">9works</code> exists but for
                    fun. One can assume that, the number{' '}
                    <code className="customCode">9</code> in{' '}
                    <code className="customCode">9works</code> is from the nine
                    planets and the <code className="customCode">works</code> -
                    it is self explanatory.
                </p>
                <Link href="https://shivamrathore.com/">
                    <a className="p-4 w-64 font-bold mx-auto bg-rang-200 dark:bg-rang-800 text-center rounded-md text-black dark:text-white">
                        Explore this too
                    </a>
                </Link>
            </div>
        </Container>
    );
}

export function getStaticProps() {
    return { props: { strictDarkMode: true } };
}
