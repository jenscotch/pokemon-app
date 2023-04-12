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

/* Above lists the Pokemon inside an array called "pokemonList". The array contains objects with
characteristics for each Pokemon.*/

let pokemonLarge = ' - Wow, that\'s a big Pokemon!';

for (let i=0; i < pokemonList.length; i++) {
   if (pokemonList[i].height >= 3) {
      document.write(pokemonList[i].name + ' (height: ' + (pokemonList[i].height) + ')' + (pokemonLarge) + ' <br>');}
   else {
      document.write(pokemonList[i].name + ' (height: ' + (pokemonList[i].height) + ')<br>');
   }
}

/*this 'for' loop has an 'if...else' statement that will identify any Pokemon that is taller than or equal to 3 and will display
'wow that's a big pokemon' */ 
