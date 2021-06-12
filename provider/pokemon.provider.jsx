import React, { useEffect, useState } from "react";

export const PokemonContext = React.createContext({
  add: (key, data) => { },
  pokemons: {},
  find: (id, name) => { },
  remove: (id, name) => { },
});

const key = "pokemons";

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    if (global.localStorage.getItem(key)) {
      setPokemons(JSON.parse(global.localStorage.getItem(key)));
    }
  }, []);

  useEffect(() => {
    if (pokemons) {
      global.localStorage.setItem(key, JSON.stringify(pokemons));
    }
  }, [pokemons]);

  const addPokemon = (key, data) => {
    let newPokemon = JSON.parse(JSON.stringify(pokemons));
    if (newPokemon[key]) {
      newPokemon[key].push(data);
    } else {
      newPokemon[key] = []
      newPokemon[key].push(data)
    }
    setPokemons(newPokemon);
  };

  const remove = (id, name) => {
    let newPokemon = JSON.parse(JSON.stringify(pokemons));
    if (newPokemon[id]) {
      const idx = newPokemon[id].findIndex(x => x.custom_name == name)
      newPokemon[id].splice(idx, 1)
      if (newPokemon[id].length == 0) {
        delete newPokemon[id]
      }
    }
    setPokemons(newPokemon)
  }
  const find = (id, name) => {
    return pokemons[id]?.some((x) => x.custom_name == name);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        add: addPokemon,
        find,
        remove
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
