import { ItemCount } from "../itemCount";

interface Props {
    greeting: string;
}

const ItemListContainer = ({greeting}:Props) => {
    return (
        <div className="w-1/6 h-1/2 shadow border border-gray-300 bg-gray-50 rounded-md grid grid-rows-4">
            <div className="flex justify-between border-t border-gray-300 row-start-4 p-2">
                <p>{greeting}</p>
                <ItemCount stock={5} initial={1}/>
            </div>
        </div>
    );
}

export { ItemListContainer };