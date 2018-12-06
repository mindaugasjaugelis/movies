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

//TODO: NEkeisti duomenu steite!!! pvz setFavoriteAuthor
//TODO: Remove item
//TODO: Mark/Unmark as favorite
//TODO: convert to ts file