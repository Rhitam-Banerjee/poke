import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { pokeApi } from "../Constants";
import PokeContext from "../Hooks/PokeContext";
const SearchInput = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokeDetails, setPokeDetails] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defence: "",
    specialAttack: "",
    specialDefence: "",
    hieght: "",
    weight: "",
    speed: "",
    bg: "",
    pokeTypes: [],
  });
  const { pokeDetailsMain, setPokeDetailsMain } = useContext(PokeContext);
  const getPokemon = async (e) => {
    try {
      e.preventDefault();
      const req = await axios.get(`${pokeApi}/${pokeName}`);
      const { name, sprites, stats, height, weight, types } = req.data;
      let typePoke = [];
      types.map((type) => typePoke.push(type.type.name));
      setPokeDetails({
        name: name,
        image: sprites.other["official-artwork"].front_default,
        hp: stats[0].base_stat,
        attack: stats[1].base_stat,
        defence: stats[2].base_stat,
        specialAttack: stats[3].base_stat,
        specialDefence: stats[4].base_stat,
        height: height,
        weight: weight,
        speed: stats[5].base_stat,
        pokeTypes: [...typePoke],
      });
      setPokeName("");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setPokeDetailsMain({ ...pokeDetails });
  }, [pokeDetails]);
  return (
    <form
      onSubmit={(e) => getPokemon(e)}
      className="mt-[30px] flex justify-center items-center sm:flex-col w-1/2 max-w-[600px] sm:w-full sm:max-w-[300px]"
    >
      <input
        className="flex-1 w-full text-center text-white px-4 py-2 outline-none rounded-xl shadow-custom bg-transparent transition-all focus:bg-transparent focus:rounded-none focus:border-b-2 focus:border-red-500 focus:shadow-none placeholder:text-gray-300"
        type="text"
        placeholder="Enter Pokemon Name"
        value={pokeName}
        onChange={(e) => setPokeName(e.target.value.toLowerCase())}
      />
      <button
        type="submit"
        className="text-red-500 font-black px-4 py-1 sm:mt-4 sm:ml-0 ml-8 bg-white rounded-xl"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
