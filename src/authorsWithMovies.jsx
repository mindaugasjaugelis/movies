import React from 'react';
import update from './immutability-helper';

import Authors from './authors';
import Movies from './movies';

export default class AuthortsWithMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [{
        key: 1,
        name: "Quentin Tarantino",
        movies: [
          { key: 1, name: "Love Birds in Bondage" },
          { key: 2, name: "My Best Friend's Birthday" },
          { key: 3, name: "Reservoir Dogs" },
          { key: 4, name: "True Romance" },
          { key: 5, name: "Pulp Fiction" },
          { key: 6, name: "Natural Born Killers" }]
      }, {
        key: 2,
        name: "James Cameron",
        movies: [
          { key: 4, name: "Aliens" },
          { key: 5, name: "The Abyss" },
          { key: 6, name: "Avatar" }]
      }, {
        key: 3,
        name: "Rob Cohen",
        movies: [
          { key: 7, name: "The running man" },
          { key: 8, name: "Mummy" },
          { key: 9, name: "Stealth" },
          { key: 10, name: "Dragon heart" }]
      }]
    };
  }

  getAuthorByKey(key, authors) {
    return authors[this.getAuthorIndexByKey(key, authors)];
  }

  getAuthorIndexByKey(key, authors) {
    for (let i = 0; i < authors.length; i++) {
      if (authors[i].key === key) {
        return i;
      }
    }
  }

  getMovieByKey(key, movies) {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].key === key) {
        return movies[i];
      }
    }
  }

  getNextAuthorKey() {
    var authors = this.state.authors;
    var maxKey = authors.length > 0
      ? Number(authors[0].key)
      : 1;
    for (let i = 0; i < authors.length; i++) {
      if (Number(authors[i].key) > maxKey) {
        maxKey = Number(authors[i].key);
      }
    }

    return maxKey + 1;
  }

  getNextMovieKey() {
    if (this.state.selectedAuthor == null) {
      return;
    }

    var movies = this.state.selectedAuthor.movies;
    var maxKey = movies.length > 0
      ? Number(movies[0].key)
      : 1;
    for (let i = 0; i < movies.length; i++) {
      if (Number(movies[i].key) > maxKey) {
        maxKey = Number(movies[i].key);
      }
    }

    return maxKey + 1;
  }

  setFavoriteAuthor(key) {
    var authors = update(this.state.authors, {});
    var authorToSetAsFavorite = this.getAuthorByKey(key, authors);
    authorToSetAsFavorite.isFavorite = !authorToSetAsFavorite.isFavorite;

    // for (let i = 0; i < authorToSetAsFavorite.movies.length; i++) {
    //   authorToSetAsFavorite.movies[i].isFavorite = authorToSetAsFavorite.isFavorite;
    // }

    this.setState({
      authors: authors
    });
  }

  setFavoriteMovie(key) {
    var authors = update(this.state.authors, {});
    var selectedAuthor = this.getAuthorByKey(this.state.selectedAuthor.key, authors);
    var movieToSetAsFavorite = this.getMovieByKey(key, selectedAuthor.movies);
    movieToSetAsFavorite.isFavorite = !movieToSetAsFavorite.isFavorite;

    //TODO: Kodlel nekeiciant selectedAuthor vistiek pasimato pakeitimai???
    this.setState({
      authors: authors
    });
  }

  setSelectedAuthor(key) {
    var authors = update(this.state.authors, {});
    var selectedAuthor = this.getAuthorByKey(key, authors);
    this.setState({
      authors: authors,
      selectedAuthor: selectedAuthor
    });
  }

  addAuthor(name) {
    if (name === null || name === undefined || name.length === 0) {
      return;
    }

    var author = {
      key: this.getNextAuthorKey(),
      name: name,
      movies: []
    };

    var authors = update(this.state.authors, { $push: [author] });
    this.setState({
      authors: authors,
      selectedAuthor: author
    });
  }

  removeAuthor(key) {
    var authors = this.state.authors.filter(a => {
      return a.key !== key;
    });

    var newState = {
      authors: authors
    };

    if (key === this.state.selectedAuthor.key) {
      newState.selectedAuthor = null;
    }

    this.setState(newState);
  }

  addMovie(name) {
    if (this.state.selectedAuthor == null || name === null || name === undefined || name.length === 0) {
      return;
    }

    var movie = {
      key: this.getNextMovieKey(),
      name: name
    };

    var authors = update(this.state.authors, {});
    var selectedAuthor = this.getAuthorByKey(this.state.selectedAuthor.key, authors);
    selectedAuthor.movies.push(movie);

    this.setState({
      authors: authors,
      selectedAuthor: selectedAuthor
    });
  }

  removeMovie(key) {
    // Delete at a specific index, no matter what value is in it
    //update(state, { items: { $splice: [[index, 1]] } });
    var authors = update(this.state.authors, {});
    var selectedAuthor = this.getAuthorByKey(this.state.selectedAuthor.key, authors);
    selectedAuthor.movies = selectedAuthor.movies.filter((m) => {
      return m.key !== key;
    });

    //TODO: Kodlel nekeiciant selectedAuthor vistiek pasimato pakeitimai???
    this.setState({
      authors: authors
    });
  }

  render() {
    return (
      <table className="authors-with-movies">
        <tbody>
          <tr>
            <td className="authors-with-movies-td">
              <Authors
                authors={this.state.authors}
                selectedAuthor={this.state.selectedAuthor}
                setSelectedAuthor={this.setSelectedAuthor.bind(this)}
                setFavoriteAuthor={this.setFavoriteAuthor.bind(this)}
                removeAuthor={this.removeAuthor.bind(this)}
                add={this.addAuthor.bind(this)} />
            </td>
            <td className="authors-with-movies-td">
              <Movies
                selectedAuthor={this.state.selectedAuthor}
                setFavoriteMovie={this.setFavoriteMovie.bind(this)}
                removeMovie={this.removeMovie.bind(this)}
                add={this.addMovie.bind(this)} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}