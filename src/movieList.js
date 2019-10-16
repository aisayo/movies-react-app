import React from 'react';


const MovieList = ( { movies }) => (
    <div >
        {movies.map(movie => {
            return (
            <p key={movie.title}>
                Title: {movie.title}
                <br/>
                Release Date: {movie.release_date}
                <br/>
                Category: {movie.category}
            </p>
            )
        })}
    </div>
)


export default MovieList;