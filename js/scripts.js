let pokemonRepository = (function () {
    let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 2.04,
        type: ['grass', 'poison']
    },

    {
        name: 'Butterfree',
        height: 3.07,
        type: ['bug', 'flying']
    },

    {
        name: 'Caterpie',
        height: 1,
        type: ['bug']
    },

    {
        name: 'Chancey',
        height: 3.07,
        type: ['normal']
    },

    {
        name: 'Charmander',
        height: 2,
        type: ['fire']
    },

    {
        name: 'Jigglypuff',
        height: 1.08,
        type: ['normal', 'fairy']
    },

    ];

    return {
        add: function(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function() {
        return pokemonList;
        }
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());


pokemonRepository.getAll().forEach (function(pokemon) {
    console.log(pokemon.name + pokemon.height + pokemon.type);
});


