import { Container, Logo } from 'components/Container';
import { BigButton } from 'components/Others';
import Link from 'next/link';

export default function Index() {
    return (
        <Container>
            <div className="pt-8 mb-24 flex flex-col justify-center items-center mx-auto max-w-3xl">
                <h1
                    title="Shivam's Micro Space"
                    className="select-none flex flex-col mx-auto justify-center items-center font-logo text-4xl xs:text-5xl mb-12"
                >
                    <span className="capsized">Welcome to 9works </span>
                    <Link href="/shivam">
                        <a className="capsized text-pink-700">Shivam's </a>
                    </Link>
                    <span className="capsized -translate-x-2">Micro Space</span>
                </h1>
                <p className="mb-16">
                    <span className="text-5xl -ml-2 -mt-6 pr-2 float-left animate-hi">
                        👋
                    </span>{' '}
                    Hi, I am Shivam Rathore, a Software Developer.{' '}
                    <span className="font-logo align-middle">9works</span> is my
                    micro space for tinkering with new technologies, and
                    experimenting different ideas, and lots more. It is a small
                    home of my experiments. It works like a{' '}
                    <span className="align-middle font-logo text-pink-700">
                        space station
                    </span>{' '}
                    for the multiverse of my imagination.
                </p>
                <h2
                    id="why"
                    className="w-full font-logo text-2xl xs:text-4xl sm:text-5xl mb-8"
                >
                    why 9works ?
                </h2>
                <p className="mb-16">
                    Well, there isn't any valid explanation or reason for why
                    this name.{' '}
                    <code className="align-middle font-logo">9works</code> is
                    space station of my work-space, so it's just for fun. But It
                    will be safe to assume that the number{' '}
                    <code className="customCode">9</code> in the name is from
                    the nine planets (yes, I am among those who still considers
                    Pluto as a planet) and the{' '}
                    <code className="customCode">works</code> - it is self
                    explanatory.
                </p>
                <BigButton href="/projects">Explore Projects</BigButton>
            </div>
        </Container>
    );
}

export function getStaticProps() {
    return {
        props: {
            strictDarkMode: false,
        },
    };
}
