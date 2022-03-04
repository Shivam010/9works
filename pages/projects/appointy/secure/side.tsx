import Layout from 'components/Layout';

export default function Slots() {
    return (
        <Layout metadata={{ title: 'secure vs client Side' }}>
            <h1 className="font-logo text-5xl leading-relaxed mx-auto mb-12">
                secure <span className="text-pink-700">vs</span>{' '}
                <span className="inline-block xs:inline">client side</span>
            </h1>
            <blockquote>
                <div className="mb-2">
                    Secure vs Client Side is for comparing Appointy's
                    Availability Responses for same input from admin and client
                    side{' '}
                    <span className="md:underline underline-offset-4">
                        simultaneously
                    </span>
                    .
                </div>
            </blockquote>
        </Layout>
    );
}
