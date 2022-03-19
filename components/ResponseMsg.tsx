export type ResponseMsgProps = { message: string; isError?: boolean };

export default function ResponseMsg({ message, isError }: ResponseMsgProps) {
    return (
        <p
            className={
                ' flex items-center text-sm font-bold ' +
                (isError
                    ? ' text-red-700 dark:text-red-500 '
                    : ' text-green-700 dark:text-green-500 ')
            }
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 h-4 w-4"
            >
                <path
                    fillRule="evenodd"
                    d={
                        isError
                            ? /* failure symbol */ 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                            : /* success symbol */ 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    }
                    clipRule="evenodd"
                />
            </svg>
            {message}
        </p>
    );
}
