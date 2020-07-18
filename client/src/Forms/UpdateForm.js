import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const UpdateForm = (props) => {
    const { id } = useParams();
    const { push } = useHistory();
    const [updatedMovie, setUpdatedMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movies/${id}`)
        .then(response => {
            setUpdatedMovie(response.data)
        })
        .catch(error => console.log(error))
    }, [id])

    const handleChanges = event => {
        setUpdatedMovie({
            ...updatedMovie,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/movies/${id}`, updatedMovie)
        .then(response => {
            props.moviesList(response.data)
            push('/')
        })
        .catch(error => console.log(error))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title: </label>
            <input type='text' name='title' id='title' value={updatedMovie.title} onChange={handleChanges} />
            <label htmlFor='director'>Director: </label>
            <input type='text' name='director' id='director' value={updatedMovie.director} onChange={handleChanges} />
            <label htmlFor='metascore'>Metascore: </label>
            <input type='text' name='metascore' id='metascore' value={updatedMovie.metascore} onChange={handleChanges} />
            <label htmlFor='stars'>Stars: </label>
            <textarea name='stars' id='stars' value={updatedMovie.stars} onChange={handleChanges} />
            <button type='submit'>Update</button>
        </form>
    )
}

export default UpdateForm;