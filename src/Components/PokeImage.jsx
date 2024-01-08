import { useContext } from "react";
import { bgStyles } from "../styles";
import PokeContext from "../Hooks/PokeContext";
import * as images from "../assets";
const PokeImage = () => {
  const { pokeDetailsMain } = useContext(PokeContext);
  const { pokeTypes, image, name, height, weight } = pokeDetailsMain;
  return (
    <div
      className={`w-1/2 md:w-full text-white flex flex-col justify-center items-center`}
    >
      <div className="!relative max-w-[300px]">
        <img src={image} alt={name} className="w-full saturate-200" />
      </div>
      <div className="w-full max-w-[200px] flex flex-col justify-center items-center">
        <h1 className="font-black text-[3rem] text-white">
          {name.toUpperCase()}
        </h1>
        <div className="w-full flex flex-row items-center justify-evenly">
          {pokeTypes.map((type, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row items-center justify-between w-max px-2 py-1 rounded-xl bg-[${
                  bgStyles[`${type}`]
                }]`}
              >
                <div>
                  <img src={images[`${type}`]} alt={pokeTypes[index]} />
                </div>
                <h3 className="ml-2">{type}</h3>
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-row justify-between items-center my-8">
          <div className="flex flex-row items-center justify-center">
            <div>
              <img
                className="mr-2 w-[20px]"
                src={images.height}
                alt="height-Icon"
              />
            </div>
            <h4>{`${height}` / 10} m</h4>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div>
              <img
                className="mr-2 w-[20px]"
                src={images.weight}
                alt="weight-Icon"
              />
            </div>
            <h4>{`${weight}` / 10} kg</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeImage;
