import { useContext } from "react";
import { PokeImage, PokeStats } from "../Components";
import PokeContext from "../Hooks/PokeContext";

const Details = () => {
  const { pokeDetailsMain } = useContext(PokeContext);
  return (
    <>
      {pokeDetailsMain.name && (
        <section className="px-8 py-2 flex md:flex-row sm:flex-col justify-center items-center">
          <PokeImage />
          <PokeStats />
        </section>
      )}
    </>
  );
};

export default Details;
