import { createContext } from "react";

const PokeContext = createContext({
  name: "",
  image: "",
  hp: "",
  attack: "",
  defence: "",
  specialAttack: "",
  specialDefence: "",
  height: "",
  weight: "",
  speed: "",
  types: [],
  setPoke: () => {},
});

export default PokeContext;
