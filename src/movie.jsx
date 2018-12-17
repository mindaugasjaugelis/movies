import React from 'react';
import { connect } from "react-redux";
import {
  setAsFavoriteMovie,
  removeMovie
} from "./js/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    setAsFavorite: key => dispatch(setAsFavoriteMovie(key)),
    remove: key => dispatch(removeMovie(key))
  };
};

class MovieModel extends React.Component {
  render() {
    return (
      <tr>
        <td className="item">{this.props.name}</td>
        <td>
          <div
            className={this.props.isFavorite ? "item-fav item-fav-true" : "item-fav"}
            onClick={() => this.props.setAsFavorite(this.props.movieKey)}>
          </div>
        </td>
        <td>
          <div className={"btn del-btn"} onClick={() => this.props.remove(this.props.movieKey)}>-</div>
        </td>
      </tr>
    );
  }
}

var Movie = connect(null, mapDispatchToProps)(MovieModel);
export default Movie;