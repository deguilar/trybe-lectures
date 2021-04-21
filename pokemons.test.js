const { beforeEach, expect } = require("@jest/globals");
const { async } = require("rsvp");

let starterPokemons  = [
    { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
    { name: 'Charmander', type: 'Fire', speed: 65 },
    { name: 'Squirtle', type: 'Water', speed: 43 },
    { name: 'Pikachu', type: 'Electric', speed: 90 },
];

const filterBySpeed = minimumSpeed => new Promise((resolve, reject) => {
    setTimeout(() => {
        const bySpeed = starterPokemons
            .filter(pokemons => pokemons.speed >= minimumSpeed)
            .map(pokemon => pokemon.name);
        if (bySpeed.length > 0) resolve(bySpeed);
        return reject('Nenhum pokemon encontrado');
    }, 500);
});

beforeEach(() => {
    starterPokemons  = [
        { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
        { name: 'Charmander', type: 'Fire', speed: 65 },
        { name: 'Squirtle', type: 'Water', speed: 43 },
        { name: 'Pikachu', type: 'Electric', speed: 90 },
    ];
})


test('Pokémons com velocidades maiores que 50', () => {
    expect.assertions(2);

    const callBack = (data) => {
        expect(data[0]).toStrictEqual('Charmander');
        expect(data).toStrictEqual(['Charmander', 'Pikachu']);
    }

    return filterBySpeed(50)
        .then(callBack)
});

test('Adicionando mais um pokemon com velocidade maior que 99', () => {
    starterPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 })
    expect.assertions(1);
    return filterBySpeed(50).then((data) => {
        expect(data).toStrictEqual(['Charmander', 'Pikachu', 'Charizard']);
    });
});

test('Pokémons com velocidades maiores que 99', () => {
    expect.assertions(1);
    return filterBySpeed(99).catch((data) => {
        expect(data).toBe("Nenhum pokemon encontrado");
    });
});

test('Pokémons com velocidades maiores que 50 (Async/await)', async () => {

    const response = await filterBySpeed(50);
    
    expect.assertions(1);

    expect(response).toEqual(['Charmander', 'Pikachu']);

});

test('Pokémons com velocidades maiores que 99 (Async/Await)', async () => {
    expect.assertions(1);
    
    try {
      await filterBySpeed(99);
    }
    catch (error) {
      expect(error).toBe("Nenhum pokemon encontrado");
    }
});

test('teste sem nada',  () => {

});