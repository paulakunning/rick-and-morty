const { default: axios } = require("axios");
const { Router } = require("express");
const { Character, Episode } = require("../db");
const { getAllCharacters } = require("../middlewares/middlewares");

const router = Router();

// Configurar los routers

// Ruta para obtener todos los personajes
router.get('/characters', async (req, res) => {
    try {
        let allCharacters = await getAllCharacters();
        res.status(200).send(allCharacters)
    } catch (error) {
        res.status(400).send('Ocurrió un error')
    }
})

// Ruta para obtener todos los episodios
router.get('/episodes', async (req, res) => {
    try {
        const epApi = await axios.get('https://rickandmortyapi.com/api/episode')
        const epEach = epApi.data.results.forEach (e => {
            Episode.findOrCreate({
                where :{
                    id: e.id,
                    name: e.name,
                }
            })
        })
        const allEpisodes = await Episode.findAll()
        res.send(allEpisodes)
    } catch (error) {
        console.log('hubo un error')
    }
})

// Ruta para obtener los personajes por ID
router.get('/character/:id', async (req, res) => {
    const { id } = req.params
    const allCharacters = await getAllCharacters();
    if(id){
        let charId = allCharacters.filter( c => c.id.toString() === id)
        charId.length? res.status(200).json(charId): res.status(400).send("No se encontró un personaje con ese id")
    }
})

// Ruta para crear personajes
router.post('/character', async (req, res) => {
    try {
        const { name, species, origin, image } = req.body;
        const newChar = await Character.create({name, species, origin, image})
        res.status(201).send("Personaje creado con éxito")
    } catch (error) {
        res.status(400).send({error: error.message})
    }
    
})

module.exports = router;
