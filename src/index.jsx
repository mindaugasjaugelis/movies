import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AuthortsWithMovies from './authorsWithMovies';

function Header() {
  return (
    <div className="headerContainer">
      Movies library
    </div>
  );
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

//TODO: Redux

//TODO: convert to ts file
//TODO: Add watchlist