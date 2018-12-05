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
          movies: [{ key: 1, name: "M1" }, { key: 2, name: "M2" }, { key: 3, name: "M3" }]
        }, {
          key: 2,
          name: "James Cameron",
          movies: [{ key: 4, name: "M4" }, { key: 5, name: "M5" }, { key: 6, name: "M6" }]
        }, {
          key: 3,
          name: "Rob Cohem",
          movies: [{ key: 7, name: "M7" }, { key: 8, name: "M8" }, { key: 9, name: "M9" }]
        }]
      };
    }
  
    getAuthorByKey(key) {
      var authors = this.state.authors;
      for (let i = 0; i <= authors.length; i++) {
        if (authors[i].key === key) {
          return authors[i];
        }
      }
    }
  
    setMoviesToShow(key) {
      this.setState({
        authors: this.state.authors,
        selectedAuthor: this.getAuthorByKey(key)
      });
    }
  
    addAuthor() {
      //var authors = this.state.authors;
      //authors.push();
  
      var auth = this.state.authors.concat({ key: "22", name: "gggg", movies: [] });
      this.setState({
        authors: auth,
        movies: this.state.movies
      });
    }
  
    render() {
      return (
        <table className="authors-with-movies">
          <tbody>
            <tr>
              <td className="authors-with-movies-td">
                <Authors authors={this.state.authors} setMoviesToShow={this.setMoviesToShow.bind(this)} />
              </td>
              <td className="authors-with-movies-td"><Movies selectedAuthor={this.state.selectedAuthor} /></td>
            </tr>
            <tr>
              <td>
                <button onClick={() => this.addAuthor()}>Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      );
    }
  }