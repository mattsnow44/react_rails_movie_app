import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import MovieForm from './MovieForm';

class Home extends React.Component {
  state = { movies: [] }

  componentDidMount() {
    axios.get('/api/movies')
      .then( res => this.setState({ movies: res.data }))
  }

  deleteMovie = (id) => {
    axios.delete(`api/movies/${id}`)
      .then( () => {
        const { movies } = this.state;
        this.setState({ movies: movies.filter( m => m.id !== id )})
      })
  }

  addMovie = (movie) => {
    const { movies } = this.state;
    this.setState({ movies: [movie, ...movies] })
  }

  render() {
    const { movies } = this.state;
    const movieCards = movies.map( m => <Movie
                                          key={m.id}
                                          {...m}
                                          deleteMovie={this.deleteMovie}
                                        /> );
    return (
      <div>
        <h1>No-Nation Movie DataBase</h1>
        <MovieForm addMovie={this.addMovie}/>
        {movieCards}
      </div>
    )
  }
}

export default Home;
