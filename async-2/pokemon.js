const appendPokemon = (pokemon) => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  let img = document.createElement('img');

  img.src = pokemon.sprites.other.dream_world.front_default;
  li.innerHTML = `${pokemon.name} </br> ${img.outerHTML}`;

  ul.appendChild(li);
};

const fetchPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/squirtle') // Promise
    .then((response) => { // Resposta completa do servidor
      response.json().then((data) => {
        appendPokemon(data);

        fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur') // Promise
        .then((response) => { // Resposta completa do servidor
          response.json().then((data) => {
            appendPokemon(data);

            fetch('https://pokeapi.co/api/v2/pokemon/pikachu') // Promise
            .then((response) => { // Resposta completa do servidor
              response.json().then((data) => {
                appendPokemon(data);

                fetch('https://pokeapi.co/api/v2/pokemon/rattata') // Promise
                .then((response) => { // Resposta completa do servidor
                  response.json().then((data) => {
                    appendPokemon(data);
                  });
                });
              });
            });
          });
        });
      });
    });
};

// JSON - JavaScript Object Notation

// const requestPokemon = (callback) => {
//   setTimeout(() => {
//     callback('Squirtle');
//   }, 3000);
// };

window.onload = fetchPokemon();