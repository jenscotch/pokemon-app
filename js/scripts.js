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

    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'height' in pokemon &&
            'type' in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('pokemon is not correct');
        }
    }
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon){
            let pokemonList = document.querySelector('.pokemon-list');
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('button');
            listItem.appendChild(button);
            pokemonList.appendChild(listItem);
            button.addEventListener('click', function () {
                showDetails(pokemon)
            });
    }

    function showDetails(pokemon) {
        let showDetails = pokemon 
        console.log(showDetails);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
    };

 /* another way to code above?? maybe?? 
    return {
        add: function(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function() {
        return pokemonList;
        }
    }; */

})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {  
    pokemonRepository.addListItem(pokemon);
});


/*
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll());


function addListItem(pokemon) {
    let ul = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = (pokemon.name);
    button.classList.add('.button');
    listItem.appendChild(button);
    ul.appendChild(listItem);
    console.log(pokemon.name + pokemon.height + pokemon.type);
}; */



