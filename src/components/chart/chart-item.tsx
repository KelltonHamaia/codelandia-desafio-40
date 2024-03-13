import { ReactNode } from "react";

type Props = {
    title: string,
    children: ReactNode
}
export const Chartitem = ({ title, children }: Props) => {

    return (
        <div className="h-full max-h-[363px] py-8 bg-indigo-50 dark:bg-transparent dark:border dark:rounded-lg dark:border-zinc-700 grid-cols-1 px-4 rounded my-2">
            <h1 className='text-xl tracking-tight font-semibold my-2 ml-2 text-indigo-600'>{title}</h1>
            {children}
        </div>
    );

}


