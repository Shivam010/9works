import { MouseEventHandler, PropsWithChildren } from 'react';

export default function FunctionButton({
    action,
    title,
    children,
    className,
}: PropsWithChildren<{
    action: MouseEventHandler<HTMLButtonElement>;
    title?: string;
    className?: string;
    isExternal?: boolean;
}>) {
    className = className ? className : 'w-64 mx-auto';
    return (
        <button
            title={title}
            onClick={action}
            className={
                ' font-logo text-2xl text-center ' +
                className +
                ' p-6 rounded-md ' +
                ' bg-rang-0 dark:bg-rang-800 ' +
                ' hover:text-rang-700 hover:dark:text-rang-200 ' +
                ' shadow-lg hover:shadow-md dark:shadow-sm hover:dark:shadow-inner ' +
                ' shadow-rang-200 dark:shadow-rang-700' +
                ' hover:bg-gradient-to-tl hover:from-rang-100 hover:via-rang-0 hover:to-rang-0 ' +
                ' hover:dark:from-rang-800 hover:dark:via-rang-900 hover:dark:to-rang-800 '
            }
        >
            {children}
        </button>
    );
}
