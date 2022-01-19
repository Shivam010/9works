import { BigButton, ExternalLink } from 'components/Others';
import Layout from 'components/Layout';
import Link from 'next/link';

export default function UtterNuisance() {
    const heading = (
        <>
            <span className="text-pink-700">utter</span> Nuisance
        </>
    );

    return (
        <Layout heading={heading} metadata={{ title: 'utter nuisance' }}>
            <div>
                <blockquote className="mb-5" title="wiki.org/nuisance">
                    <ExternalLink href="https://en.wikipedia.org/wiki/Don%27t_judge_a_book_by_its_cover">
                        <h2 className="inline font-bold text-pink-700">
                            Don't judge a book by its cover,
                        </h2>
                    </ExternalLink>
                    <h3>
                        "An English metaphorical phrase that means one should
                        not judge the worth or value of something by its outward
                        appearance alone."
                    </h3>
                </blockquote>
                <blockquote className="mb-5" title="wiki.org/nuisance">
                    <h2 className="inline font-bold text-pink-700">
                        <Link href="/shivam">By Shivam Rathore,</Link>
                    </h2>
                    <h3>
                        "Even the smallest creatures like Ants can kill, so
                        don't underestimate anyone."
                    </h3>
                </blockquote>
                <blockquote className="mb-5" title="twitter/010Shivam">
                    <ExternalLink href="https://twitter.com/010Shivam/status/1481720479442698241 ">
                        <h2 className="inline font-bold text-pink-700">
                            010Shivam believes,
                        </h2>
                    </ExternalLink>
                    <h3>
                        "The thing that I liked the most in this multiverse is
                        'the end', becase it is what marks the new beginning"
                    </h3>
                </blockquote>
                <blockquote>
                    <h2 className="inline font-bold text-pink-700">
                        <Link href="/shivam">About Me,</Link>
                    </h2>
                    <h3>
                        It's not that I am weird. It's just that everyone else
                        is a way more normal ~ Living at work
                    </h3>
                </blockquote>
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
