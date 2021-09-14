let pokemon = {
    firstName:'Pika',
    lastName:'Chu',

    getPokeName : function(){
        let fullName = this.firstName + ' '+ this.lastName;
        return fullName
    }
}

let pokemonName = function(snack, hobby){
    console.log(this.getPokeName()+' I choose you')
    console.log(this.getPokeName()+' love '+snack+' and '+hobby)
}

//BIND
// let logPokemon = pokemonName.bind(pokemon)
// //sometime
// logPokemon('sushi', 'javascript')

//CALL
// pokemonName.call(pokemon, 'sushi', 'javascript')

//APPLY
pokemonName.apply(pokemon, ['sushi', 'javascript'])