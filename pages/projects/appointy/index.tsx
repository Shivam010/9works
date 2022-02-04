import Container from 'components/Container';
import ExternalLink from 'components/ExternalLink';
import Layout from 'components/Layout';
import Link from 'next/link';

export default function Appointy() {
    const heading = (
        <>
            <div
                className={
                    ' mx-auto max-w-3xl flex flex-col justify-center items-center ' +
                    ' select-none font-logo text-3xl xs:text-5xl grow '
                }
            >
                <span className="capsized mb-4">Welcome to appointy </span>
                <Link href="/">
                    <a className="capsized text-pink-700"> at 9works </a>
                </Link>
                <span className="capsized">The Micro Space</span>
            </div>
        </>
    );
    return <Layout heading={heading}></Layout>;
}
