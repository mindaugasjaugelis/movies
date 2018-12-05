import React from 'react';

function Movie(props) {
    return (
      <tr>
        <td className="item">{props.name}</td>
        <td className="item-fav"></td>
      </tr>
    );
  }
  
  export default class Movies extends React.Component {
    render() {
      var moviesToShow = this.props.selectedAuthor ? this.props.selectedAuthor.movies.map(movie => {
        return <Movie name={movie.name} key={movie.key.toString()} />
      }) : "";
  
      var header = this.props.selectedAuthor ? this.props.selectedAuthor.name + " movies" : "";
  
      return (
        <table className="movies">
          <thead>
            <tr>
              <th>{header}</th>
            </tr>
          </thead>
          <tbody>{moviesToShow}</tbody>
        </table>
      );
    }
  }