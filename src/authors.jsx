import React from 'react';

function Author(props) {
  return (
    <tr>
      <td className="item" onClick={props.onClick}>{props.name}</td>
      <td>
        <div className={props.isFavorite ? "item-fav item-fav-true" : "item-fav"} onClick={props.setAsFavorite}>
        </div>
      </td>
    </tr>
  );
}

class NewAuthor extends React.Component {
  constructor(props){
    super(props);
    this.state = {inputValue: ""};
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
          <div className="add-btn" onClick={this.addClick.bind(this)}>+</div>
        </td>
      </tr>
    );
  }
}

export default class Authors extends React.Component {
  render() {
    var authorsToPrint = this.props.authors.map(author => {
      return <Author 
        name={author.name} 
        key={author.key.toString()} 
        isFavorite={author.isFavorite}
        onClick={() => this.props.setMoviesToShow(author.key)} 
        setAsFavorite={() => this.props.setFavoriteAuthor(author.key)}/>;
    });

    return (
      <table className="authors">
        <thead>
          <tr>
            <th>
              Author
              </th>
          </tr>
        </thead>
        <tbody>
          {authorsToPrint}
          <NewAuthor add={this.props.add} />
        </tbody>
      </table>
    );
  }
}