import { createContext } from "react";

const PokeContext = createContext({
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
  types: [],
  setPoke: () => {},
});

export default PokeContext;
