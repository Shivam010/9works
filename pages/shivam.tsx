import {
    BigButton,
    ExternalLink,
    ImageWithDescription,
} from 'components/Others';
import me from 'public/shivam.png';
import { Container } from 'components/Container';

export default function About() {
    return (
        <Container
            metadata={{
                title: 'Shivam Rathore - Shivam010',
                description:
                    'Software Developer • Cube Solver • Free Time Doodler • Paper Plane Pilot',
                image: 'https://9works.tk/shivam/banner.png',
                canonicalUrlDomain: 'https://shivamrathore.com',
                canonicalUrlPath: '/',
            }}
        >
            <div className="sm:pt-12 mx-auto mb-16 max-w-3xl flex flex-col justify-center items-center">
                <h1 className="font-logo text-[5.5rem] xl:text-8xl mb-3 mx-auto">
                    <ExternalLink href="https://shivamrathore.com">
                        <span className="text-pink-700 leading-relaxed">
                            Shivam
                        </span>{' '}
                        Rathore
                    </ExternalLink>
                </h1>
                <h2 className="text-center mb-5 italic">
                    "Software Developer • Cube Solver • Free Time Doodler •
                    Paper Plane Pilot"
                </h2>
                <div>
                    <blockquote className="mb-5 italic" title="Shivam010">
                        <div title="Belief" className="cursor-default">
                            I believe{' '}
                            <span className="text-pink-700 font-bold">
                                Loyalty
                            </span>{' '}
                            is a two-way street. If I'm asking for it from you
                            then you're getting it from me.
                            <br />
                            Even the smallest creatures like Ants can kill, so
                            don't underestimate anyone. We all are{' '}
                            <span className="text-pink-700 font-bold">
                                equal
                            </span>
                        </div>
                    </blockquote>
                    <p className="mb-4">
                        I am a{' '}
                        <span className="italic ">Software Developer</span> at{' '}
                        <ExternalLink href="https://appointy.com">
                            <span className="font-bold text-pink-700 hover:underline underline-offset-4">
                                Appointy IT Pvt Ltd
                            </span>
                        </ExternalLink>
                        . I love to experiment with different: ideas,
                        technologies, and paper planes. Sometimes, I doodle,
                        mostly when I am borred and/or in any long meeting :P
                    </p>
                    <p className="mb-4">
                        I can solve{' '}
                        <ExternalLink href="https://en.wikipedia.org/wiki/Rubik's_Cube">
                            <span className="font-bold text-pink-700 hover:underline underline-offset-4">
                                2x2, 3x3, 4x4 and even 5x5 Rubik's Cube
                            </span>
                        </ExternalLink>
                        , with 3x3 cube in record time of <i>~1.8 minutes.</i>
                    </p>
                    <div className="mx-auto py-5 items-center w-3/4 sm:w-2/3">
                        <ImageWithDescription
                            src={me}
                            placeholder="blur"
                            description="Shivam Rathore at Vagator Beach, Goa, India"
                        />
                    </div>
                    <p>Checkout my project works:</p>
                </div>
                <BigButton href="/projects" className="w-64 mx-auto mt-8">
                    My Projects
                </BigButton>
            </div>
        </Container>
    );
}

export function getStaticProps() {
    return {
        props: {
            strictDarkMode: true,
        },
    };
}
