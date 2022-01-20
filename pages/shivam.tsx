import {
    BigButton,
    ExternalLink,
    ImageWithDescription,
} from 'components/Others';
import Layout from 'components/Layout';
import me from 'public/shivam.png';

export default function About() {
    const heading = (
        <ExternalLink
            href="https://shivamrathore.com"
            className="text-6xl leading-relaxed"
        >
            <span className="text-pink-700">Shivam</span> Rathore
        </ExternalLink>
    );

    return (
        <Layout
            heading={heading}
            metadata={{
                title: 'Shivam Rathore - Shivam010',
                description:
                    'Software Developer • Experimentalist • Free Time Doodler',
                image: 'https://9works.tk/shivam/banner.png',
            }}
        >
            <div>
                <ExternalLink href="https://shivamrathore.com">
                    <h1 className="text-center mb-5 italic">
                        "Software Developer • Experimentalist • Free Time
                        Doodler • Paper Plane Pilot"
                    </h1>
                </ExternalLink>
                <div className="mx-auto items-center w-3/4 sm:w-1/2">
                    <ImageWithDescription
                        src={me}
                        placeholder="blur"
                        description="Shivam Rathore at Vagator Beach, Goa, India"
                    />
                </div>
                <p className="mb-4">
                    I am a <span className="italic ">Software Developer</span>{' '}
                    at{' '}
                    <ExternalLink href="https://appointy.com">
                        <span className="font-bold text-pink-700 hover:underline underline-offset-4">
                            Appointy IT Pvt Ltd
                        </span>
                    </ExternalLink>
                    . I love to experiment with different: ideas, technologies,
                    and paper planes. Sometimes, I doodle, mostly when I am
                    borred and/or in any long meeting :P
                </p>
                <p className="mb-4">
                    I can solve{' '}
                    <ExternalLink href="https://en.wikipedia.org/wiki/Rubik's_Cube">
                        <span className="font-bold text-pink-700 hover:underline underline-offset-4">
                            2x2, 3x3, 4x4 and 5x5 Rubik's Cube
                        </span>
                    </ExternalLink>
                    , with 3x3 cube in record time of <i>~1.7 minutes.</i>
                </p>
                <blockquote className="mb-5 italic" title="Shivam010">
                    <ExternalLink href="https://github.com/Shivam010">
                        I believe in Loyalty. I think it is a two-way street.
                        <br /> If I'm asking for it from you then you're getting
                        it from me."
                    </ExternalLink>
                </blockquote>
                <p>Checkout my project works:</p>
            </div>
            <BigButton href="/projects" className="w-64 mx-auto mt-8 -mb-12">
                My Projects
            </BigButton>
        </Layout>
    );
}

export function getStaticProps() {
    return {
        props: {
            strictDarkMode: false,
        },
    };
}
