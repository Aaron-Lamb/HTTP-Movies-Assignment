import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const UpdateForm = () => {
    const { id } = useParams();
    const { push } = useHistory();
    const [updatedMovie, setUpdatedMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    })

    const handleChanges = event => {
        setUpdatedMovie({
            ...updatedMovie,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
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
            <input type='text' name='stars' id='stars' value={updatedMovie.stars} onChange={handleChanges} />
            <button type='submit'>Update</button>
        </form>
    )
}

export default UpdateForm;