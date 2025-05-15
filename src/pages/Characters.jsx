import React, { useState, useEffect } from 'react'
//importo MainNavbar
import MainNavbar from '../components/MainNavbar'
//importo Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
//importo axios
import axios from 'axios'


const Characters = () => {
    const [characters, setCharacters] = useState([])
    const endpoint = 'https://rickandmortyapi.com/api/character'


    useEffect(() => {
        axios.get(endpoint).then((resp) => {
            setCharacters(resp.data.results)
        }).catch(error => {
            console.error('Error fetching characters:', error)
        });
    }, []);


    return (
        <>
            <div className="container d-flex justify-content-around">
                <h1>Characters: </h1>
                <MainNavbar />
            </div>

            <main>
                {characters.map((character) => {
                    return (
                        <div className="container">
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-image-top">
                                        <img src={character.image} className='img-fluid' alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{character.name}</h3>
                                        <p>{character.species}</p>
                                        <p>{character.gender}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </main>
        </>
    )
}

export default Characters