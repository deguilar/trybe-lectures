const fetchPokemon = () => {

};

const requestPokemon = (callback) => {
  setTimeout(() => {
    callback('Squirtle');
  }, 3000);
};

window.onload = fetchPokemon();