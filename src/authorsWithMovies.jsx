import React from 'react';

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
  
    getAuthorByKey(key) {
      var authors = this.state.authors;
      for (let i = 0; i < authors.length; i++) {
        if (authors[i].key === key) {
          return authors[i];
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

      return maxKey+1;
    }

    getNextMovieKey() {
      if(this.state.selectedAuthor == null) {
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

      return maxKey+1;
    }   
    
    setFavoriteAuthor(key) {
      var author = this.getAuthorByKey(key);
      author.isFavorite = !author.isFavorite;
      this.setState({
        authors: this.state.authors
      });
    }
  
    setMoviesToShow(key) {
      this.setState({
        selectedAuthor: this.getAuthorByKey(key)
      });
    }
  
    addAuthor(name) { 
      if(name === null || name === undefined || name.length === 0){
        return;
      }

      var newAuthor = { 
        key: this.getNextAuthorKey(), 
        name: name, 
        movies: [] 
      };

      var authors = this.state.authors.concat(newAuthor);
      this.setState({
        authors: authors,
        selectedAuthor: newAuthor
      });
    }

    addMovie(name) { 
      if(this.state.selectedAuthor == null || name === null || name === undefined || name.length === 0){
        return;
      }

      var selectedAuthor = this.state.selectedAuthor;
      var selectedAuthorMovies = selectedAuthor.movies.concat({
        key: this.getNextMovieKey(),
        name: name
      });

      //Kaip keisti duomenis objekte, kad nekeisti tiesiai steite??????????????
      this.setState({
        selectedAuthor: {
          key: selectedAuthor.key,
          name: selectedAuthor.name,
          movies: selectedAuthorMovies
        }
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
                  setMoviesToShow={this.setMoviesToShow.bind(this)}
                  setFavoriteAuthor={this.setFavoriteAuthor.bind(this)}
                  add={this.addAuthor.bind(this)}/>
              </td>
              <td className="authors-with-movies-td">
                <Movies 
                  selectedAuthor={this.state.selectedAuthor}
                  add={this.addMovie.bind(this)} />
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }