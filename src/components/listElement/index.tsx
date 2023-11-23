interface Props {
    children: React.ReactNode;
    href: string;
}

const ListElement = ({children, href}:Props) => {
    return (
        <li className="list-none hover:underline"><a href={href}>{children}</a></li>
    );
}

export { ListElement };