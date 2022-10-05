const axios = require('axios');
const { Character, Episode } = require('../db.js');

const getApiInfo = async () => {
   const api = await axios.get('https://rickandmortyapi.com/api/character')
   const apiCharacter = api.data.results.map(c => {
    const char = {
    id: c.id,
    name: c.name,
    species: c.species,
    origin: c.origin.name,
    created: c.created,
    image: c.image
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
    const infoTotal = apiInfo.concat(DbInfo);
    return infoTotal
}

module.exports = {
    getApiInfo, 
    getDbInfo, 
    getAllCharacters
}