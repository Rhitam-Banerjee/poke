import { useState } from "react";
import { Header, Details } from "./Containers";
import PokeContext from "./Hooks/PokeContext";
const App = () => {
  const [pokeDetailsMain, setPokeDetailsMain] = useState({});
  const value = { pokeDetailsMain, setPokeDetailsMain };
  return (
    <PokeContext.Provider value={value}>
      <Header />
      <Details />
    </PokeContext.Provider>
  );
};

export default App;
