import Layout from 'components/Layout';
import BigButton from 'components/BigButton';
import ExternalLink from 'components/ExternalLink';
import Link from 'next/link';

export default function Appointy({ projects }: { projects: Project[] }) {
    // const headingFull = (
    //     <>
    //         <div
    //             className={
    //                 ' mx-auto max-w-3xl flex flex-col justify-center items-center ' +
    //                 ' select-none font-logo text-3xl xs:text-5xl grow '
    //             }
    //         >
    //             <span className="capsized mb-4">Welcome to appointy </span>
    //             <Link href="/">
    //                 <a className="capsized text-pink-700"> at 9works </a>
    //             </Link>
    //             <span className="capsized">The Micro Space</span>
    //         </div>
    //     </>
    // );
    const heading = (
        <>
            <span className="text-pink-700">appointy</span> at 9works
        </>
    );

    return (
        <Layout
            heading={heading}
            metadata={{
                title: 'Appointy at 9works',
                description: 'An undertaking of work for appointy at 9works',
            }}
        >
            <p className="mb-5">
                <span className="text-[3.5rem] leading-8 mt-2 pr-1 float-left">
                    T
                </span>
                his is an undertaking of work related to{' '}
                <span className="font-logo align-middle">appointy</span> It
                includes some projects which are mostly to reduce redundant task
                or to automate them. Some of them are behind Basic
                Authentication, while others are made available to public. These
                also includes some serverless functions.
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
                    <span className="font-bold text-pink-700 align-middle hover:underline underline-offset-4">
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
    const base = '/projects/appointy';
    let projects: Project[] = [
        {
            title: 'admin vs client side',
            endpoint: '/admin-client-side',
        },
    ];
    projects.push({
        title: 'and many more to come...',
        endpoint: '#',
    });
    projects = projects.map((p) => {
        p.endpoint = base + p.endpoint;
        return p;
    });
    return {
        props: {
            projects: projects,
        },
    };
}
