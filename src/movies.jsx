import React from 'react';

function Movie(props) {
  return (
    <tr>
      <td className="item">{props.name}</td>
      <td>
        <div className={props.isFavorite ? "item-fav item-fav-true" : "item-fav"} onClick={props.setFavoriteMovie}>
        </div>
      </td>
      <td>
        <div className={"btn del-btn"} onClick={props.removeMovie}>-</div>
      </td>
    </tr>
  );
}

class NewMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  clearInputValue() {
    this.setState({ inputValue: "" });
  }

  addClick() {
    this.props.add(this.state.inputValue);
    this.clearInputValue();
  }

  render() {
    return (
      <tr>
        <td>
          <input
            value={this.state.inputValue}
            onChange={this.updateInputValue.bind(this)}
            className="new-item"
            type="text"
            name="newAuthorInput"></input>
        </td>
        <td>
          <div className="btn add-btn" onClick={this.addClick.bind(this)}>+</div>
        </td>
      </tr>
    );
  }
}

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