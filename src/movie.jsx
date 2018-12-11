import React from 'react';
import { connect } from "react-redux";
// import {
//     setSelectedAuthor,
//     setAsFavoriteAuthor,
//     removeAuthor,
//     addAuthor
// } from "./js/actions/index";

// const mapDispatchToProps = dispatch => {
//     return {
//         setSelectedAuthor: key => dispatch(setSelectedAuthor(key)),
//         setAsFavoriteAuthor: key => dispatch(setAsFavoriteAuthor(key)),
//         remove: key => dispatch(removeAuthor(key)),
//         add: name => dispatch(addAuthor(name))
//     };
// };

// const mapStateToProps = state => {
//     return {
//         selectedAuthorKey: state.selectedAuthor ? state.selectedAuthor.key : null
//     };
// };

class Movie {
    render(){
        return (
            <tr>
              <td className="item">{this.props.name}</td>
              <td>
                <div className={this.props.isFavorite ? "item-fav item-fav-true" : "item-fav"} onClick={this.props.setFavoriteMovie}>
                </div>
              </td>
              <td>
                <div className={"btn del-btn"} onClick={this.props.removeMovie}>-</div>
              </td>
            </tr>
          );
    }
}

export default Movie;