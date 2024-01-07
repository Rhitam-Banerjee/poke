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
        hp: stats[0],
        attack: stats[1],
        defence: stats[2],
        specialAttack: stats[3],
        specialDefence: stats[4],
        height: height,
        weight: weight,
        speed: stats[5],
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
        className="flex-1"
        type="text"
        placeholder="Enter Pokemon Name"
        value={pokeName}
        onChange={(e) => setPokeName(e.target.value.toLowerCase())}
      />
      <button type="submit" className="text-white">
        Get Info
      </button>
    </form>
  );
};

export default SearchInput;
