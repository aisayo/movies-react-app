import React, { Component } from 'react';

import MovieList from './MovieList'
import NewMovieForm from './NewMovieForm';

const movieData = [
  {title: "test1", release_date: "2019", category: "horror"},
  {title: "test2", release_date: "2018", category: "comedy"},
  {title: "test3", release_date: "2017", category: "drama"},
  {title: "test4", release_date: "2016", category: "romantic"},
  {title: "test5", release_date: "2015", category: "action"}
]

class App extends Component {

  constructor(){
    super()

    this.state = {
      movies: [],
      loading: true
    }
  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({
        loading: false,
        movies: movieData
      })
    }, 1500);
  }

  createMovie = (movie) => {
    this.setState({
      movies: this.state.movies.concat(movie)
    })
  }

  render() {

    if (this.state.loading & this.state.movies.length === 0){
      return <p>Loading...</p>
    }

    return (
      <div>
        <MovieList movies={this.state.movies}/>
        <NewMovieForm createMovie={this.createMovie}/>
      </div>
    )
  }
}


export default App;
