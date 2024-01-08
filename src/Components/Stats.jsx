/* eslint-disable react/prop-types */
import { useContext } from "react";
import PokeContext from "../Hooks/PokeContext";
const Stats = ({ stat, pos }) => {
  const pokeStatVal = [255, 181, 230, 150, 230, 200];
  const { pokeDetailsMain } = useContext(PokeContext);
  return (
    <li className="text-white w-full h-full list-none flex items-center justify-between">
      <span className="min-w-[123px] sm:text-[0.7rem] sm:min-w-[86px]">
        {stat.toUpperCase()}
      </span>
      <span className="mx-4 min-w-[30px] sm:text-[0.7rem] sm:min-w-[20px]">
        {pokeDetailsMain[`${stat}`]}
      </span>
      <div className="flex-1 h-2 bg-white_transp rounded-lg">
        <div
          className={`${
            pokeDetailsMain[`${stat}`] > 50 ? "!bg-grass" : "!bg-[red]"
          } h-2 rounded-lg`}
          style={{
            width: `${(pokeDetailsMain[`${stat}`] / pokeStatVal[pos]) * 100}%`,
          }}
        ></div>
      </div>
    </li>
  );
};

export default Stats;
