import axios from "axios";
import { useState } from "react";
import { pokeApi } from "../Constants";
const SearchInput = () => {
  const [pokeName, setPokeName] = useState("");
  const getPokemon = async (e) => {
    e.preventDefault();

    const req = await axios.get(`${pokeApi}/${pokeName}`);
    const { data } = req;
    console.log(data);
    setPokeName("");
  };
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
      <button type="submit">Get Info</button>
    </form>
  );
};

export default SearchInput;
