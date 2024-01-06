import { useContext } from "react";
import PokeContext from "../Hooks/PokeContext";
const PokeImage = () => {
  const { pokeDetailsMain } = useContext(PokeContext);
  const { pokeTypes, image, name, height, weight } = pokeDetailsMain;

  return (
    <div className={`text-white flex flex-col justify-center items-center`}>
      <div className="">
        <img src={image} alt={name} />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1>{name.toUpperCase()}</h1>
        <div className="w-full flex flex-row justify-between items-center">
          <div>
            <h3>Height</h3>
            <h4>{height}</h4>
          </div>
          <div>
            <h3>Weight</h3>
            <h4>{weight}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeImage;
