import React from 'react';
import Authors from './authors';
import Movies from './movies';

export default class AuthortsWithMoviesModel extends React.Component {
  render() {
    return (
      <table className="authors-with-movies">
        <tbody>
          <tr>
            <td className="authors-with-movies-td">
              <Authors />
            </td>
            <td className="authors-with-movies-td">
              <Movies />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}