const express = require('express');
const pokemon = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Pokemon = require('./models/pokemon');

mongoose.connect('mongodb://localhost/pokemon');
const db = mongoose.connection;

pokemon.get('/', function(req, res) {
    res.send('Hello world!');
});

pokemon.get('/api/pokemons', function(req, res) {
    Pokemon.getPokemons(function(err, pokemons) {
        if(err) {
            throw err;
        }
        res.json(pokemons);
    });
});

pokemon.get('/api/pokemons/:id', function(req, res) {
    Pokemon.getPokemonsById(req.params._id, function(err, pokemon) {
        if(err) {
            throw err;
        }
        res.json(pokemon);
    });
});

pokemon.post('/api/pokemons', function(req, res) {
    const pokemon = req.body;
    Pokemon.addPokemon(pokemon, function(err, pokemon) {
        if(err) {
            throw err;
        }
        res.json(pokemon);
    });
});

pokemon.listen(3000);
console.log('Start application on port 3000');