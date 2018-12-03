// function Square(props) {
//   return (
//     <button 
//       className="square" 
//       onClick={props.onClick}>
//     {props.value}
//   </button>
//   );
// }

// function RestartButton(props) {
//   return (
//     <button onClick={props.onClick}>Restart</button>
//   );
// }

// class Board extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true
//     };
//   }

//   handleClick(i) {
//     var winner = this.checkWinner();
//     if(winner){
//       return;
//     }

//     const sqrs = this.state.squares.slice();
//     if(sqrs[i] !== null){
//       return;
//     }

//     sqrs[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       squares: sqrs,
//       xIsNext: !this.state.xIsNext
//     });
//   }

//   renderSquare(i) {
//     return <Square 
//       value={this.state.squares[i]}
//       onClick={() => this.handleClick(i)} />;
//   }

//   checkWinner() {
//     var sqrs = this.state.squares;
//     var lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ];
   
//     for(var i=0; i<lines.length; i++){
//       var [a, b, c] = lines[i];
//       if(sqrs[a] && sqrs[a] === sqrs[b] && sqrs[a] === sqrs[c]) {
//         return sqrs[a];
//       }
//     }
//   }

//   restart() {
//     var winner = this.checkWinner();
//     this.setState({
//       squares: Array(9).fill(null),
//       xIsNext: winner != null 
//         ? this.state.xIsNext
//         : !this.state.xIsNext
//     });
//   }

//   render() {
//     var winner = this.checkWinner();
//     var status = winner 
//       ? 'Winner is ' + winner 
//       : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//         <div className="status">
//           <RestartButton onClick={() => this.restart()} />
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }