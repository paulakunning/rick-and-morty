const axios = require('axios');
const { Character, Episode } = require('../db.js');

const getApiInfo = async () => {
    const api = await axios.get('https://rickandmortyapi.com/api/character')
    const r = api.data.results
    let episodesList = r.map((el) => {
        return el.episode.map(e => e.split('/').pop())
    })
    episodesList = episodesList.join(',')
    let episodes = await axios.get('https://rickandmortyapi.com/api/episode/' + episodesList)
    
    const apiCharacter = r.map((c) => { 
    const char = {
    id: c.id,
    name: c.name,
    species: c.species,
    origin: c.origin.name,
    created: c.created,
    image: c.image, 
    episodes: episodes.data.map(el=> el.name)
    
   }
   return char
})
    return apiCharacter
    
}

const getDbInfo = async () => {
    return await Character.findAll({
        include:{
            model: Episode, 
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
}

const getAllCharacters = async () => {
    const apiInfo = await getApiInfo();
    const DbInfo = await getDbInfo();
    const infoTotal = [...apiInfo, ...DbInfo]
    return infoTotal
}


module.exports = {
    getApiInfo, 
    getDbInfo, 
    getAllCharacters, 
}