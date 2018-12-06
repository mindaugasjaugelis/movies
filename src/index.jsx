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

//TODO: Remove item
// Delete at a specific index, no matter what value is in it
//update(state, { items: { $splice: [[index, 1]] } });

//Remove immutability-helper and install it from npm
//TODO: convert to ts file