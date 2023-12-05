import { ItemListContainer } from "@/components/itemListContainer";
import { NavBar } from "@/components/navBar";
import { getCategory } from "@/utils/getCategory";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Category = () => {
    const router = useRouter();
    const { id } = router.query;

    const [title, setTitle] = useState("");

    useEffect(() => {
        if (id) {
            getCategory(Number(id)).then((result) => setTitle(result[0].name));
        }
    }, [id]);

    return (
        <>
            <NavBar />
            <main className="px-20 pt-20 h-screen">
                <h1 className="text-3xl pb-4">Jogos Para {title}</h1>
                <ItemListContainer key={Number(id)} categoryId={Number(id)}/>
            </main>
        </>
    );
};

export default Category;