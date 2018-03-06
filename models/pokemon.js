const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    base_experience: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
    },
    is_default: {
        type: Boolean,
    },
    order: {
        type: Number,
    },
    weight: {
        type: Number,
    },
});

const Pokemon = module.exports = mongoose.model('Pokemon', pokemonSchema);

module.exports.getPokemons = function(callback, limit) {
    Pokemon.find(callback).limit(limit);
};

module.exports.getPokemonById = function(book, callback) {
    Pokemon.findById(id, callback);
};

module.exports.addPokemon = function(pokemon, callback) {
    Pokemon.create(pokemon, callback);
};