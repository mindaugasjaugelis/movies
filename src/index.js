import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header() {
  return (
    <div className="headerContainer">
      Movies library
    </div>
  );
}

class Authors extends React.Component {
  render() {
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
          <tr>
            <td className="item">Quentin Tarantino</td>
            <td className="item-fav"></td>
          </tr>
          <tr>
            <td className="item">James Cameron</td>
            <td className="item-fav item-fav-true"></td>
          </tr>
          <tr>
            <td className="item">Rob Cohen</td>
            <td className="item-fav"></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Movies extends React.Component {
  clickItem(){
    console.log('item was clicked!!!');
  }

  clickItemFav(){
    console.log('item favorite was clicked!!!');
  }

  render() {
    return (
      <table className="movies">
        <thead>
          <tr>
            <th>
              Movie
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="item" onClick={() => this.clickItem()}>Quentin Tarantino</td>
            <td className="item-fav" onClick={() => this.clickItemFav()}></td>
          </tr>
          <tr>
            <td className="item">James Cameron</td>
            <td className="item-fav"></td>
          </tr>
          <tr>
            <td className="item">Rob Cohen</td>
            <td className="item-fav"></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class AuthortsWithMovies extends React.Component {
  render() {
    return (
      <table className="authors-with-movies">
        <tbody>
          <tr>
            <td><Authors /></td>
            <td><Movies /></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

class Library extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <AuthortsWithMovies />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Library />,
  document.getElementById('root')
);
