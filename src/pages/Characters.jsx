import React from 'react'
import MainNavbar from '../components/MainNavbar'
import "bootstrap/dist/css/bootstrap.min.css"


const Characters = () => {
    return (
        <>
            <div className="container d-flex justify-content-around">
                <h1>Characters: </h1>
                <MainNavbar />
            </div>
        </>
    )
}

export default Characters