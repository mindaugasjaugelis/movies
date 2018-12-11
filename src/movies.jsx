import React from 'react';
import NewMovie from './new-movie';
import Movie from './movie'

export default class Movies extends React.Component {
  render() {
    var moviesToShow = this.props.selectedAuthor ? this.props.selectedAuthor.movies.map(movie => {
      return <Movie
        name={movie.name}
        key={movie.key.toString()}
        isFavorite={movie.isFavorite}
        setFavoriteMovie={() => this.props.setFavoriteMovie(movie.key)} 
        removeMovie={() => this.props.removeMovie(movie.key)} />
    }) : null;

    var header = this.props.selectedAuthor ? this.props.selectedAuthor.name + " movies" : null;
    var inputLine = this.props.selectedAuthor
      ? <NewMovie add={this.props.add} />
      : null;

    return (
      <table className="movies">
        <thead>
          <tr>
            <th>{header}</th>
          </tr>
        </thead>
        <tbody>
          {moviesToShow}
          {inputLine}
        </tbody>
      </table>
    );
  }
}