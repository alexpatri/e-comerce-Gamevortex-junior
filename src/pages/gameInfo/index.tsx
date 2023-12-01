import { ItemDetailContainer } from "@/components/itemDetailContainer";
import { NavBar } from "@/components/navBar";
import { useRouter } from "next/router";

const GameInfo = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <NavBar />
      <ItemDetailContainer id={Number(id)} />
    </>
  );
};

export default GameInfo;
