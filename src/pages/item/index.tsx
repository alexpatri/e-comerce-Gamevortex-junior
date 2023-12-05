import { ItemDetailContainer } from "@/components/itemDetailContainer";
import { NavBar } from "@/components/navBar";
import { useRouter } from "next/router";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <NavBar />
      <ItemDetailContainer id={Number(id)} />
    </>
  );
};

export default Item;
