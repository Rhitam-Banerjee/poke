import { useEffect, useState } from "react";
import { Stats } from "./";
const PokeStats = () => {
  const [detailsToShow, setDetailsToShow] = useState([]);
  useEffect(() => {
    setDetailsToShow([
      "hp", //255
      "attack", //181
      "defence", //230
      "specialAttack", //150
      "specialDefence", //230
      "speed", //200
    ]);
  }, []);
  return (
    <div className="flex-1 w-full h-[50vh] min-h-[200px] grid place-items-center">
      <ul className="w-full max-w-[700px] m-auto h-[100%] px-4 py-2 flex flex-col rounded-lg shadow-custom backdrop-blur-md">
        {detailsToShow.map((detail, index) => {
          return <Stats key={index} stat={detail} pos={index} />;
        })}
      </ul>
    </div>
  );
};

export default PokeStats;
