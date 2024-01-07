import { useState } from "react";
import { Header, Details } from "./Containers";
import PokeContext from "./Hooks/PokeContext";
const App = () => {
  const [pokeDetailsMain, setPokeDetailsMain] = useState({});
  const value = { pokeDetailsMain, setPokeDetailsMain };
  return (
    <PokeContext.Provider value={value}>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Details />
      </div>
    </PokeContext.Provider>
  );
};

export default App;
