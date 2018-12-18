import React from 'react';
import NewAuthor from './new-author';
import { connect } from "react-redux";
import Author from "./author";

const mapStateToProps = state => {
  return { authors: state.authors };
};

class AuthorsModel extends React.Component {
  render() {
    // if(this.props.authors === undefined){
    //   return "";
    // }

    var authorsToPrint = this.props.authors.map(author => {
      return <Author 
        name={author.name} 
        key={author.key} 
        authorKey={author.key}
        isFavorite={author.isFavorite}/>;
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
          <NewAuthor />
        </tbody>
      </table>
    );
  }
}

var Authors = connect(mapStateToProps)(AuthorsModel);
export default Authors;