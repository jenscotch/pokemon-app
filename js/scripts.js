let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

    function showDetails() {
        modalContainer.classList.add('is-visible');
        button.addEventListener('click', function () {
            loadDetails(item)
    });
        loadDetails(item).then(function () {
            showModal(item)
        });
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
        })
    }
    
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            showModal(item);
        }).catch(function (e) {
            console.error(e);
        });
    }

    let modalContainer = document.querySelector('#modal-container');
    let modal = document.querySelector('modal');

    function showModal() {

        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'X';
        closeButtonElement.eventListener('click', hideModal);

        let title = document.querySelector('.name');
        title.classList.add('modal-h2');
        title.innerText = (item.name);

        let content = document.querySelector('.height', '.types');
        content.classList.add('modal-p');
        content.innerText = 'Height:' + (item.height);
        content.innerText = 'Type:' + (item.types);

        modal.appendChild(closeButtonElement);
        modal.appendChild(title);
        modal.appendChild(content);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');

        document.querySelector('#show-modal').addEventListener('click', () => {
            showModal(item);
        });
    }

    function hideModal() {
            modalContainer.classList.remove('is-visible');
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                hideModal();
            }
        });

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });
    
        
    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
        showDetails: showDetails,
        showModal: showModal,
        hideModal: hideModal,
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
