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
            <div className="container my-4">
                <h1 className="text-center mb-4">Dettagli Personaggio</h1>

                <div className="row justify-content-center mb-4">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="row g-0">
                                {/* Immagine a sinistra */}
                                <div className="col-md-4">
                                    <img 
                                        src={character.image} 
                                        alt={character.name} 
                                        className="img-fluid rounded-start" 
                                    />
                                </div>
                                {/* Informazioni a destra */}
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h2 className="card-title">{character.name}</h2>
                                        <p className="card-text">Specie: {character.species}</p>
                                        <p className="card-text">Genere: {character.gender}</p>
                                        <p className="card-text">Status: {character.status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8 d-flex justify-content-between">
                        <button
                            onClick={() => navigate(`/characters/${id - 1}`)}
                            disabled={id === 1}
                            className="btn btn-primary"
                        >
                            Precedente
                        </button>
                        
                        <button
                            onClick={() => navigate(`/characters/${id + 1}`)}
                            className="btn btn-primary"
                        >
                            Successivo
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailCharacter