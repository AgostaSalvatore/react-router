import React from 'react'
import { NavLink } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'
import "bootstrap/dist/css/bootstrap.min.css"

const Homepage = () => {
    return (
        <>
            <div className="container">
                <MainNavbar />
                <h1>Homepage</h1>
            </div>

        </>
    )
}

export default Homepage