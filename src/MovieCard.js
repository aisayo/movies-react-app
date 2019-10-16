import React from 'react'


const MovieCard = ({ movie }) => (
    <p>
        Title: {movie.title}
                <br/>
        Release Date: {movie.release_date}
                <br/>
        Category: {movie.category}
    </p>
)

export default MovieCard;