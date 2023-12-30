import Link from "next/link";

interface Props {
    children:string;
    title:string;
    href:string;
}

const Modal = ({children, title, href}:Props) => {
    return(
        <div className="bg-gray-500/75 w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="bg-white max-h-96 max-w-4xl py-8 px-6 rounded-md flex flex-col justify-center items-center gap-2">
                <h2 className="text-2xl font-bold text-justify">{title}</h2>
                <p>{children}</p>
                <Link href={href} className="bg-slate-800 text-white p-2 rounded-md w-36 flex items-center justify-center text-center hover:bg-slate-600">Continuar</Link>
            </div>
        </div>
    );
}

export { Modal };
