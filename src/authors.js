import React from 'react';

function Author(props) {
    return (
      <tr>
        <td className="item" onClick={props.onClick}>{props.name}</td>
        <td className="item-fav"></td>
      </tr>
    );
  }
  
  export default class Authors extends React.Component {
    render() {
      var authorsToPrint = this.props.authors.map(author => {
        return <Author name={author.name} key={author.key.toString()} onClick={() => this.props.setMoviesToShow(author.key)} />;
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
          </tbody>
        </table>
      );
    }
  }