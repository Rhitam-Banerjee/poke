/* eslint-disable react/prop-types */
import { useContext } from "react";
import PokeContext from "../Hooks/PokeContext";
const Stats = ({ stat }) => {
  const { pokeDetailsMain } = useContext(PokeContext);
  return (
    <div className="text-white">
      {stat}: {pokeDetailsMain[`${stat}`]}
    </div>
  );
};

export default Stats;
