import { useState } from "react";
import { Header, Details } from "./Containers";
import PokeContext from "./Hooks/PokeContext";
const App = () => {
  const [pokeDetailsMain, setPokeDetailsMain] = useState({});
  const value = { pokeDetailsMain, setPokeDetailsMain };
  return (
    <PokeContext.Provider value={value}>
      <div className="overflow-x-hidden pt-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh]">
        <div className="max-w-7xl mx-auto h-full">
          <Header />
          {pokeDetailsMain.name && <Details />}
        </div>
      </div>
    </PokeContext.Provider>
  );
};

export default App;
