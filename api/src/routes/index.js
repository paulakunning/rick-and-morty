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
                    name: e.name
                }
            })
        })
        const allEpisodes = await Episode.findAll()
        res.send(allEpisodes)
    } catch (error) {
        console.log('hubo un error')
    }
})

module.exports = router;
