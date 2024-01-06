import { useState } from "react";
import Header from "./Containers/Header";
import PokeContext from "./HOC/PokeContext";
const App = () => {
  const [pokeDetailsMain, setPokeDetailsMain] = useState({});
  const value = { pokeDetailsMain, setPokeDetailsMain };
  return (
    <PokeContext.Provider value={value}>
      <Header />;
    </PokeContext.Provider>
  );
};

export default App;
