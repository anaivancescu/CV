import React from 'react';
import ChessLib from 'react-chess';


class Chess extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.onMovePieces = this.onMovePieces.bind(this);
    this.state = {
      allowMoves: 'true',
      lineup: ['R@h1', 'P@f2', 'q@d8', 'R@a1', 'P@a2', 'P@c2', 'b@c8', 'p@d7', 'Q@d1', 'n@g8'],
      lightSquareColors: 'palevioletred',
      darkSquareColors: '#570535',
      fromSquares: ' ',
      toSquares: ' ',

    };
  }

  onMovePieces(piece, fromSquare, toSquare) {
    console.log('s-a mutat');
    console.log(piece, fromSquare, toSquare);
    this.setState({
      fromSquares: fromSquare,
      toSquares: toSquare,
      variabila: `${fromSquare} s-a mutat la ${toSquare}`,
    });
  }

  render() {
    return (
      <div style={{ 'max-width': 450, margin: 'auto' }}>
        <ChessLib
          pieces={this.state.lineup}
          lightSquareColor={this.state.lightSquareColors}
          darkSquareColor={this.state.darkSquareColors}
          onMovePiece={this.onMovePieces}
          fromSquare={this.fromSquares}
          toSquare={this.fromSquares}
        />

        <div1 style={{ margin: 100, 'font-size': '30px' }}>
          {this.state.variabila}
        </div1>
      </div>
    );
  }
}
export default Chess;
