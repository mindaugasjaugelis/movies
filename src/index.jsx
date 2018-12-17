import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './js/store/index';
import AuthortsWithMovies from './authorsWithMovies';

import './index.css';

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
  <Provider store={store}>
    <Library />
  </Provider>,
  document.getElementById('root'));

//TODO: Combine reducers

//TODO: immutability-helper?????
//TODO: Add watchlist