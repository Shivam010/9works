import ExternalLink from 'components/ExternalLink';
import Layout from 'components/Layout';
import Link from 'next/link';

export default function Slots() {
    const heading = (
        <>
            admin <span className="text-pink-700">vs</span> client side
        </>
    );
    return (
        <Layout
            metadata={{ title: 'Admin vs Client Side' }}
            heading={heading}
        ></Layout>
    );
}
