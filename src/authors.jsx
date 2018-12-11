import React from 'react';
import NewAuthor from './new-author';
import { connect } from "react-redux";
import Author from "./author";

const mapStateToProps = state => {
  return { authors: state.authors };
};


class AuthorsModel extends React.Component {
  render() {
    var authorsToPrint = this.props.authors.map(author => {
      return <Author author={author} key={author.key} />;
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