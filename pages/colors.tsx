import { Container } from 'components/Container';
import { useTheme } from 'next-themes';

export default function Colors({ slate }) {
    const { theme, setTheme } = useTheme();
    var allColors = '';
    slate.forEach((sc) => {
        allColors += ' bg-[' + sc.color + ']';
    });
    console.log(allColors);

    return (
        <Container>
            <div className="m-5 mx-auto">
                <button
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    toggle
                </button>
            </div>
            <div className="bg-[#ffffff] bg-[#fafafa] bg-[#eaeaea] bg-[#999999] bg-[#888888] bg-[#666666] bg-[#444444] bg-[#333333] bg-[#222222] bg-[#111111]"></div>
            <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mt-8 mb-16">
                <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                    {slate.map((sc) => {
                        return box(sc);
                    })}
                </div>
            </div>
            <article className="max-w-3xl mx-auto mb-16 prose dark:prose-dark">
                <h2 className="text-4xl">Other</h2>
                <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mt-8 mb-16">
                    <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                        {box({ color: 'bg-other-0', other: '#fff' })}
                        {box({ color: 'bg-other-100', other: '#fafafa' })}
                        {box({ color: 'bg-other-200', other: '#eaeaea' })}
                        {box({ color: 'bg-other-300', other: '#999999' })}
                        {box({ color: 'bg-other-400', other: '#888888' })}
                        {box({ color: 'bg-other-500', other: '#666666' })}
                        {box({ color: 'bg-other-600', other: '#444444' })}
                        {box({ color: 'bg-other-700', other: '#333333' })}
                        {box({ color: 'bg-other-800', other: '#222222' })}
                        {box({ color: 'bg-other-900', other: '#111111' })}
                    </div>
                </div>
            </article>
            <article className="mx-auto prose dark:prose-dark max-w-3xl mb-16">
                <h2 className="text-4xl">Mine</h2>
                <div className="flex flex-col items-start justify-center max-w-3xl mx-auto mt-8 mb-16">
                    <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
                        {box({ color: 'bg-rang-0', other: '#ffffff' })}
                        {box({ color: 'bg-rang-100', other: '#fafafa' })}
                        {box({ color: 'bg-rang-200', other: '#eeeeee' })}
                        {box({ color: 'bg-rang-300', other: '#aaaaaa' })}
                        {box({ color: 'bg-rang-400', other: '#777777' })}
                        {box({ color: 'bg-rang-500', other: '#555555' })}
                        {box({ color: 'bg-rang-600', other: '#404040' })}
                        {box({ color: 'bg-rang-700', other: '#303030' })}
                        {box({ color: 'bg-rang-800', other: '#181818' })}
                        {box({ color: 'bg-rang-900', other: '#0a0a0c' })}
                    </div>
                </div>
                <p>Hello this is a friedn fromr work.</p>
                <h2>Hope you enjoy it</h2>
            </article>
        </Container>
    );
}

export async function getStaticProps() {
    var slate = [
        { size: 0.8, color: '#ffffff' },
        { size: 100, color: '#fafafa' },
        { size: 200, color: '#eaeaea' },
        { size: 300, color: '#999999' },
        { size: 400, color: '#888888' },
        { size: 500, color: '#666666' },
        { size: 600, color: '#444444' },
        { size: 700, color: '#333333' },
        { size: 800, color: '#222222' },
        { size: 900, color: '#111111' },
    ];
    return {
        props: {
            slate,
        },
    };
}

var box = (sc: { size?: number; color: string; other?: string }) => {
    var bgCl = 'bg-[' + sc.color + ']';
    if (!sc.size) {
        bgCl = sc.color;
    }
    return (
        <div key={bgCl} className="space-y-1.5">
            <div
                className={`${bgCl} w-full h-10 rounded ring-1 ring-inset ring-white/10 `}
            ></div>
            <div className="flex flex-col items-center tracking-wider ">
                <div className="font-medium text-gray-900 2xl:w-full dark:text-white">
                    {sc.size ? sc.size : sc.other}
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                    {sc.color}
                </div>
            </div>
            <div className="w-fit m-auto text-gray-500 dark:text-gray-400">
                {sc.size ? sc.other : ''}
            </div>
        </div>
    );
};
