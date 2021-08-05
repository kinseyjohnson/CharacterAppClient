import React, { useEffect, useState } from 'react'
import APIURL from '../../../helpers/environment';
import CharacterDisplay from './CharacterDisplay';
import './findCharacter.css'

const FindCharacters = (props) => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = () => {
        fetch(`${APIURL}/character/findAll`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => res.json())
        .then((characterData) => {
            // console.log(characterData)
            setCharacters(characterData)
        })
    }

    useEffect(() => {
        fetchCharacters();
    }, [])


    return(
        <div className="mainDiv">
            <div className="wrapper">
            <p className='p1'>Having trouble coming up with a character yourself?</p>
            <p className='p2'>How about you take a look at other's characters for inspiration!</p>
            <button onClick={fetchCharacters} className='findChar'>Find Characters</button>
            </div>
            <CharacterDisplay/>
        </div>
    )
}

export default FindCharacters;