import Layout from 'components/Layout';
import { BigButton, ExternalLink } from 'components/Others';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Projects({ projects }: { projects: Project[] }) {
    const heading = (
        <>
            <span className="text-pink-700">Pro</span>jects at 9works
        </>
    );

    return (
        <Layout metadata={{ title: 'Projects at 9works' }} heading={heading}>
            <blockquote className="mb-5" title="wiki.org/project">
                <ExternalLink href="https://en.wikipedia.org/wiki/Project">
                    <h2 className="inline font-bold text-pink-700">
                        Wikipedia says,
                    </h2>
                </ExternalLink>
                <p>
                    "A Project (or Program) is an undertaking, carried out
                    individually or collaboratively and possibly involving
                    research or design, that is carefully planned to achieve a
                    particular aim."
                </p>
            </blockquote>
            <p className="mb-5">
                <span className="text-[3.5rem] leading-8 mt-2 pr-1 float-left">
                    B
                </span>
                ut, any Project at{' '}
                <span className="font-logo align-middle">9works</span> is mostly
                carried out individually by{' '}
                <ExternalLink href="https://shivamrathore.com">
                    <span className="text-pink-700 hover:underline underline-offset-4">
                        Shivam Rathore
                    </span>
                </ExternalLink>
                , just for the sack of fun - learning and experiments. These
                projects are mostly UI design related, or some test suits which
                I decided to include, along with any serverless actions.
            </p>
            <h2 className="mt-5 font-bold w-full">
                Here are some of the Projects:
            </h2>
            <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center w-full">
                {projects.map((p) => (
                    <ProjectItem key={p.title} {...p} />
                ))}
            </div>
            <p className="-mb-16 w-full ml-6">
                Check out{' '}
                <ExternalLink href="https://github.com/Shivam010">
                    <span className="text-pink-700 align-middle hover:underline underline-offset-4">
                        my GitHub profile
                    </span>
                </ExternalLink>{' '}
                for code base.
            </p>
        </Layout>
    );
}

const ProjectItem = ({ title, endpoint, isExternal }: Project) => {
    return (
        <BigButton
            href={endpoint}
            title={title}
            isExternal={isExternal}
            className="flex justify-center items-center min-h-[8rem] w-64 md:w-56 leading-10 overflow-auto"
        >
            {title}
        </BigButton>
    );
};

export type Project = {
    title: string;
    endpoint: string;
    isExternal?: boolean;
};

export function getStaticProps() {
    let projects: Project[] = [
        {
            title: 'This Project',
            endpoint: '/',
        },
        {
            title: 'utter Nuisance',
            endpoint: '/utter-nuisance',
        },
        {
            title: 'Graphql Playground',
            endpoint: 'https://gql.rathore.ml/',
            isExternal: true,
        },
        {
            title: 'Concurrency vs Parallelism',
            endpoint: '/projects/concurrency',
        },
        {
            title: 'Popup and Response',
            endpoint: '/o/opener/index.html',
        },
        {
            title: "418 - i'm a teapot",
            endpoint: '/418',
        },
    ];
    projects.push({
        title: 'and many more to come...',
        endpoint: '#',
    });
    return {
        props: {
            strictDarkMode: false,
            projects: projects,
        },
    };
}
