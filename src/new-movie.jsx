import React from 'react';
import { connect } from "react-redux";
import { addMovie } from "./js/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    add: name => dispatch(addMovie(name))
  };
};

class NewMovieModel extends React.Component {
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

var NewMovie = connect(null, mapDispatchToProps)(NewMovieModel);
export default NewMovie;