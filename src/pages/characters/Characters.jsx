import React, { useState, useEffect } from 'react'
//importo MainNavbar
import MainNavbar from '../../components/MainNavbar'
//importo Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
//importo axios
import axios from 'axios'
//import NavLink
import { NavLink } from 'react-router-dom'

const Characters = () => {
    const [characters, setCharacters] = useState(null)
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
            <div className="container d-flex justify-content-around  mb-5">
                <h1>Characters: </h1>
                <MainNavbar />
            </div>

            <main>
                {characters === null ? (
                    <div>Loading...</div>
                ) : (
                    <div className="row">
                        {characters.map((character) => {
                            return (
                                <div className="col-12 col-md-6" key={character.id}>
                                    <NavLink to={`/characters/${character.id}`}>
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={character.image} className='img-fluid' alt="" />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h3>{character.name}</h3>
                                                        <p>{character.species}</p>
                                                        <p>{character.gender}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </>
    )
}

export default Characters