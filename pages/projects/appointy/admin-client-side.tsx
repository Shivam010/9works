import BigButton from 'components/BigButton';
import Layout from 'components/Layout';

export default function Slots() {
    return (
        <Layout
            metadata={{
                title: 'admin vs client Side',
                description: 'Comparison between Admin and Client side',
            }}
        >
            <h1 className="font-logo text-5xl leading-relaxed mx-auto mb-12">
                admin <span className="text-pink-700">vs</span>{' '}
                <span className="inline-block xs:inline">client side</span>
            </h1>
            <blockquote className="mb-12 mt-2" title="wiki/comparison">
                <h3 className="">
                    Admin vs Client Side is for comparing Appointy's
                    Availability Responses for same input from admin and client
                    side{' '}
                    <span className="md:underline underline-offset-4">
                        simultaneously
                    </span>
                    .
                </h3>
            </blockquote>
            <BigButton href="/projects/appointy">T.B.D.</BigButton>
        </Layout>
    );
}
