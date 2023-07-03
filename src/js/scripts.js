let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let searchInput = document.querySelector('#search-input');
    //above is necessary for search function to work

    function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon &&
            'detailsUrl' in pokemon
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
            pokemonList.classList.add('list-group-item');

            let button = document.createElement('button');
            button.innerText = pokemon.name.toUpperCase;
            button.classList.add('btn');
            button.classList.add('btn-primary');
            button.setAttribute('data-toggle', 'modal');
            button.setAttribute('data-target', '#exampleModal');
            listItem.appendChild(button);

            pokemonList.appendChild(listItem);

            button.addEventListener('click', function () {
                showDetails(pokemon);
            });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }
    
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            showModal(item);

            let pokemonTypes = [];
            details.types.forEach(function (item) {
                pokemonTypes.push(item.type.name);
            });
            item.types = pokemonTypes.join(', ');

            let pokemonAbilities = [];
            details.abilities.forEach(function (item) {
                pokemonAbilities.push(item.ability.name);
            });
            item.abilities = pokemonAbilities.join(', ');
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(item) {
        loadDetails(item).then(function(){
            showModal(item);
        });
}

    function showModal(item) {
        let modalBody = document.querySelector('.modal-body');
        let modalImage = document.querySelector('.pokemon-image')
        modalBody.innerHTML = '';
         
        let pokemonName = document.querySelector('.pokemon-name');
        pokemonName.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);


        let pokemonHeight = document.querySelector('.pokemon-height');
        pokemonHeight.innerText = 'Height: ' + item.height / 10 + 'meters';

        let typesPokemon = document.querySelector('.pokemon-type');
        typesPokemon.innerText = 'Type: ' + item.types;

        let abilitiesPokemon = document.querySelector('.pokemon-abilities');
        abilitiesPokemon.innerText = 'Abilities: ' + item.abilities;

        let pokemonImage = document.querySelector('.pokemon-image');
        pokemonImage.src = item.imageUrl;

        modalBody.appendChild(pokemonHeight);
        modalBody.appendChild(typesPokemon);
        modalBody.appendChild(abilitiesPokemon);
        modalImage.appendChild(pokemonImage);

    }

    //search function
    searchInput.addEventListener('input', function () {
        pokemonRepository.filterSearch(searchInput);
    });

    function filterSearch (searchInput) { 
        let filterValue = searchInput.value.toLowerCase();

        //filter array
        let filteredPokemon = pokemonList.filter(function (pokemon) {
            return pokemon.name.toLowerCase().indexOf(filterValue) > -1;
        });

        //update list of pokemon based on filter
        let pokemonListElement = document.querySelector('.pokemon-list');
        pokemonListElement.innerHTML = '';
        filteredPokemon.forEach(function (item) {
            pokemonRepository.addListItem(item);
        });

    }
    
        
    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
        showDetails: showDetails,
        showModal: showModal,
        filterSearch: filterSearch,
    };

})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {  
    pokemonRepository.addListItem(pokemon);
    });
});


/*
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll()); */
