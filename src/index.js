import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Library extends React.Component {
  render() {
    return (
      <div>
        <h1>Movies library</h1>
        <table>
          <thead>
            <tr>
              <th>
                Author
            </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quentin Tarantino</td>
            </tr>
            <tr>
              <td>James Cameron</td>
            </tr>
            <tr>
              <td>Rob Cohen</td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Library />,
  document.getElementById('root')
);
