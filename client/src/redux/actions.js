import axios from "axios"

export const GET_CHARACTERS = "GET_CHARACTERS"
export const GET_EPISODES = "GET_EPISODES"

export function getCharacters(){
    return async function(dispatch){
        var api = await axios.get("http://localhost:3001/characters");
        return dispatch({
            type: GET_CHARACTERS,
            payload: api.data
        })
    }
}
export function getEpisodes(){
    return async function(dispatch){
        var api = await axios.get("http://localhost:3001/episodes");
        return dispatch({
            type: GET_EPISODES,
            payload: api.data
        })
    }
}