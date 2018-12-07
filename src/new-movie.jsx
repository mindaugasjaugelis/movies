import React from 'react';

export default class NewMovie extends React.Component {
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