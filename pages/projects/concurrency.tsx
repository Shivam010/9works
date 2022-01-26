import Layout from 'components/Layout';
import {
    BigButton,
    ExternalLink,
    ImageWithDescription,
} from 'components/Others';
import Image from 'next/image';
import problemImage from 'public/images/concurrency/problem.png';
import solutionImage from 'public/images/concurrency/solution_with_concurrency.png';

export default function Concurrency() {
    const heading = (
        <>
            Concurrency <span className="text-pink-700">vs</span> Parallelism
        </>
    );
    return (
        <Layout
            metadata={{ title: 'Concurrency vs Parallelism' }}
            heading={heading}
        >
            <div>
                <blockquote className="mb-12" title="go.dev/talks">
                    <ExternalLink href="https://go.dev/talks/2012/waza.slide#1">
                        <h2 className="inline font-bold text-pink-700">
                            Concurrency is not Parallelism
                        </h2>
                    </ExternalLink>
                    <h3>Presentation By Robe Pike At Waza Jan 11, 2012</h3>
                </blockquote>

                <h2 className="font-logo text-3xl mb-8">
                    <span className="text-pink-700">W</span>ork in hand :
                </h2>
                <div className="mb-16">
                    <ImageWithDescription
                        description="One Gopher doing all the work"
                        height="102"
                        width="759"
                        placeholder="blur"
                        src={problemImage}
                    />
                </div>

                <h2 className="font-logo text-3xl mb-8">
                    Using <span className="text-pink-700">P</span>
                    arallelism :
                </h2>
                <div
                    className="mb-16"
                    title="Multiple Groups of Gophers doing all of their separate works"
                >
                    <Image
                        alt="First Group"
                        height="102"
                        width="759"
                        placeholder="blur"
                        src={problemImage}
                    />
                    <Image
                        alt="Second Group"
                        height="102"
                        width="759"
                        placeholder="blur"
                        src={problemImage}
                    />
                    <Image
                        alt="Thrid Group"
                        height="102"
                        width="759"
                        placeholder="blur"
                        src={problemImage}
                    />
                    <ImageWithDescription
                        alt="Fourth Group"
                        description="Multiple Groups of Gophers doing all of their separate works"
                        height="102"
                        width="759"
                        placeholder="blur"
                        src={problemImage}
                    />
                </div>

                <h2 className="font-logo text-3xl mb-8">
                    Using <span className="text-pink-700">C</span>
                    oncurrency :
                </h2>
                <div className="mb-10">
                    <ImageWithDescription
                        description="Multiple Gophers trying to complete one task at a time - Concurrency"
                        height="186"
                        width="759"
                        placeholder="blur"
                        src={solutionImage}
                    />
                </div>
            </div>
            <p className=" w-full ml-6">
                Check out it's{' '}
                <ExternalLink href="https://github.com/Shivam010/concurrency-vs-parallelism">
                    <span className="font-bold text-pink-700 align-middle hover:underline underline-offset-4">
                        Code here
                    </span>
                </ExternalLink>{' '}
            </p>
            <BigButton href="/projects" className="w-64 mx-auto mt-8 -mb-12">
                Other Projects
            </BigButton>
        </Layout>
    );
}

function golangTalk() {
    return (
        <ExternalLink href="https://talks.golang.org/2013/bestpractices.slide#2">
            <div className="mb-5 underline underline-offset-4">
                Golang talk "bestpractices.slide"
            </div>
        </ExternalLink>
    );
}
