let starterPokemons = [
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
    }, 1500);
});


afterEach(() => {
    starterPokemons = [
        { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
        { name: 'Charmander', type: 'Fire', speed: 65 },
        { name: 'Squirtle', type: 'Water', speed: 43 },
        { name: 'Pikachu', type: 'Electric', speed: 90 },
    ]
});

test('Pokémons com velocidades maiores que 50', () => {
    expect.assertions(1);
    return filterBySpeed(50).then((data) => {
        expect(data).toStrictEqual(['Charmander', 'Pikachu']);
    });
});

test('Pokémons com velocidades maiores que 99', () => {
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

test('Pokémons com velocidades maiores que 50 (Async/Await)', async () => {
    starterPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 })
    const data = await filterBySpeed(50);
    expect.assertions(1);
    expect(data).toStrictEqual(['Charmander', 'Pikachu', 'Charizard']);
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