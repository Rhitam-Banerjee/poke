import { useContext, useEffect } from "react";
import PokeContext from "../Hooks/PokeContext";
import * as images from "../assets";
const PokeImage = () => {
  const { pokeDetailsMain } = useContext(PokeContext);
  const { pokeTypes, image, name, height, weight } = pokeDetailsMain;
  useEffect(() => {
    pokeTypes.forEach((type) => {
      console.log(images[`${type}`]);
    });
  }, [pokeTypes]);
  return (
    <div className={`text-white flex flex-col justify-center items-center`}>
      <div className="saturate-200">
        <img src={image} alt={name} />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1>{name.toUpperCase()}</h1>
        <div className="w-full flex flex-row items-center justify-evenly">
          {pokeTypes.map((type, index) => {
            return (
              <div key={index}>
                <img src={images[`${type}`]} alt={pokeTypes[index]} />
              </div>
            );
          })}
        </div>
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
