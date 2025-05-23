import React from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

const links = [
    {
        path: '/',
        label: 'Homepage'
    },
    {
        path: '/characters',
        label: 'Characters'
    },
    {
        path: '/about_us',
        label: 'About Us'
    },

]

const MainNavbar = () => {
    return (
        <header>
            <nav>
                <ul className='list-unstyled d-flex justify-content-around'>
                    {links.map((link, index) => {
                        return (
                            <li key={index} className='mx-2'>
                                <NavLink className='custom-links' to={link.path}>{link.label}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar