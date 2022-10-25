import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, getEpisodes } from "../../redux/actions";
import Character from "../Character/Character";
import Navbar from "../Navbar/Navbar";

export default function Home(){
    const dispatch = useDispatch();
    const allCharacters = useSelector(state => state.characters)
    const allEpisodes = useSelector(state => state.episodes)


    useEffect(() => {
        dispatch(getCharacters())
        dispatch(getEpisodes())
    }, [dispatch])

    if(allCharacters.length){
        return(
            <div>
                <Navbar/>
            {allCharacters.map(ch => <Character key={ch.id} ch={ch} name ={ch.name} img={ch.image} episodes={ch.episodes} />)}
            </div>
        )
    } else {
        return(
            <div>
                <Navbar/>
            <h1>Loading characters...</h1>
            </div>
        )
    }
}