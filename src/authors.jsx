import React from 'react';
import NewAuthor from './new-author';

function Author(props) { 
  return (
    <tr>
      <td className={props.isSelected ? "item item-selected" : "item"} onClick={props.onClick}>{props.name}</td>
      <td>
        <div className={props.isFavorite ? "item-fav item-fav-true" : "item-fav"} onClick={props.setAsFavorite}>
        </div>
      </td>
      <td>
        <div className={"btn del-btn"} onClick={props.remove}>-</div>
      </td>      
    </tr>
  );
}

export default class Authors extends React.Component {
  render() {
    var authorsToPrint = this.props.authors.map(author => {
      return <Author 
        name={author.name} 
        key={author.key} 
        isFavorite={author.isFavorite}
        isSelected={this.props.selectedAuthor && this.props.selectedAuthor.key === author.key}
        onClick={() => this.props.setSelectedAuthor(author.key)} 
        setAsFavorite={() => this.props.setFavoriteAuthor(author.key)}
        remove={() => this.props.removeAuthor(author.key)}/>;
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