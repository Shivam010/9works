import { Container } from 'components/Container';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Container>
            <div className="py-8 flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
                <h1 className="font-logo text-4xl mx-auto esm:text-5xl tracking-tight mb-12">
                    <span className="text-pink-600">418</span> - i'm a teapot
                </h1>
                <p className="text-rang-600 dark:text-rang-300 mb-5">
                    Why stick with a common NOT FOUND page - 404 page when you
                    can add the <i>Symfony of Nature</i> to it?
                </p>
                <p className="text-rang-600 dark:text-rang-300 mb-5">
                    Any attempt to brew coffee or milk with a teapot should
                    result in the error code "418 I'm a teapot". The resulting
                    entity body may be short and stout. More info on this{' '}
                    <a
                        className="hover:underline underline-offset-1 dark:text-rang-200 transition"
                        href="https://httpstatuses.com/418"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>
                </p>
                <p className="text-rang-600 dark:text-rang-300 mb-5">
                    It seems you've found something that used to exist, or you
                    spelled something wrong. I'm guessing you spelled something
                    wrong. Can you double check that URL?
                </p>
                <Link href="/">
                    <a className="font-logo text-2xl p-6 w-64 font-bold mx-auto mt-8 bg-rang-200 dark:bg-rang-800 text-center rounded-md text-rang-900 dark:text-rang-0">
                        Home Page
                    </a>
                </Link>
            </div>
        </Container>
    );
}

export function getStaticProps() {
    return { props: { strictDarkMode: false } };
}
