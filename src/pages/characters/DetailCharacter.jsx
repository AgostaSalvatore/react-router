import React from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const DetailCharacter = () => {
    const params = useParams();
    const id = parseInt(params.id);
    const navigate = useNavigate();

    const [character, setCharacter] = useState({})

    const getSingleCharacter = () => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((resp) => {
            setCharacter(resp.data)
        });
    }

    useEffect(() => {
        getSingleCharacter();
    }, [id])


    return (
        <>
            <h1>Dettagli Personaggio</h1>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="image-container">
                            <img src={character.image} alt="" className='img-fluid' />
                        </div>
                        <h1>
                            {character.name}
                        </h1>
                        <span>
                            {character.species}
                        </span>
                        <span>
                            {character.gender}
                        </span>
                        <span>
                            {character.status}
                        </span>
                    </div>
                    <button
                        onClick={() => {
                            navigate(`/characters/${id - 1}`)
                        }} disabled={id === 1 ? true : false}
                    >
                        Torna indietro
                    </button>


                    <button
                        onClick={() => {
                            navigate(`/characters/${id + 1}`)
                        }}
                    >
                        Vai avanti
                    </button>
                </div>
            </div>
        </>
    )
}

export default DetailCharacter