import { useEffect, useState } from "react";
import { Stats } from "./";
const PokeStats = () => {
  const [detailsToShow, setDetailsToShow] = useState([]);
  useEffect(() => {
    setDetailsToShow([
      "hp",
      "attack",
      "defence",
      "specialAttack",
      "specialDefence",
      "speed",
    ]);
  }, []);
  return (
    <div>
      <div className="text-white">
        {detailsToShow.map((detail, index) => {
          return <Stats key={index} stat={detail} />;
        })}
      </div>
    </div>
  );
};

export default PokeStats;
