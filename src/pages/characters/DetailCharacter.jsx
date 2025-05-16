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

    return (
        <div>DetailCharacter</div>
    )
}

export default DetailCharacter