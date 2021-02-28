import React from 'react';
import ChessLib from 'react-chess';

class Chess extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.onMovePieces = this.onMovePieces.bind(this);
    this.state = {
      allowMoves: 'true',
      puzzleuri: [{
        piese: ['r@a8', 'n@b8', 'r@d8', 'k@g8',
          'p@b7', 'q@c7', 'p@f8', 'p@h7',
          'p@a6', 'p@d6', 'b@f6', 'p@g6',
          'B@h6', 'P@d5', 'P@a4', 'Q@e4',
          'P@c3', 'B@d3', 'P@f2', 'P@g2',
          'P@h2', 'R@c1', 'R@e1', 'K@g1'],
        solutie: { fromSquare: 'e4', toSquare: 'e8' },
      },
      {
        piese: ['r@b8', 'r@h8', 'k@e8',
          'b@e7', 'p@f7', 'p@g7', 'p@h7',
          'p@e6', 'q@g6', 'p@b5', 'n@f4',
          'N@e4', 'P@c3', 'P@b2', 'Q@e2',
          'P@h2', 'P@f2', 'P@g2', 'R@a7',
          'R@d1', 'K@g1'],
        solutie: { fromSquare: 'e2', toSquare: 'b5' },
      },
      {
        piese: ['r@a8', 'n@b8', 'k@g8',
          'p@b7', 'q@c7', 'p@f8', 'p@h7',
          'p@a6', 'p@d6', 'b@f6', 'p@g6',
          'B@h6', 'P@d5', 'P@a4', 'Q@e2',
          'P@c3', 'B@d3', 'P@f2', 'P@g2',
          'P@h2', 'R@c1', 'R@e1', 'K@g1'],
        solutie: { fromSquare: 'e1', toSquare: 'e2' },
      },
      {
        piese: [],
        solutie: { fromSquare: '', toSquare: '' },
      },
      ],
      puzzle_curent: 0,
      lightSquareColors: 'palevioletred',
      darkSquareColors: '#b51866',
      fromSquares: ' ',
      toSquares: ' ',
      timp_trecut: 0,
      mesaj: ' ',
      allowMovess: true,
      endGame: false,

    };
    const myvar = setInterval(() => {
      this.setState(
        {
          timp_trecut: this.state.timp_trecut + 1,
        },

      );
      if (this.state.timp_trecut === 20) {
        clearInterval(myvar);
        this.setState({
          mesaj: ' timpul s-a scurs ! ',
          allowMovess: false,
          endGame: true,
        });
      }
    }, 1000);
  }

  onMovePieces(piece, fromSquare, toSquare) {
    console.log(piece, fromSquare, toSquare);
    this.setState({
      fromSquares: fromSquare,
      toSquares: toSquare,
      variabila: `${fromSquare} s-a mutat la ${toSquare}`,

    });
    if (fromSquare === this.state.puzzleuri[this.state.puzzle_curent].solutie.fromSquare
      && toSquare === this.state.puzzleuri[this.state.puzzle_curent].solutie.toSquare
      || this.state.endGame === true) {
      // console.log('schimb');
      this.setState({
        mesaj: 'Felicitari ati facut cea mai optima mutare',
        puzzle_curent: this.state.puzzle_curent + 1,
        timp_trecut: 0,
      });
      if (this.state.puzzle_curent === 3) {
        this.setState({
          mesaj: 'Felicitari, ati castigat!',
          endGame: true,
          allowMovess: false,
        });
      }
    } else {
      this.setState({
        mesaj: 'Mai incearca',
      });
    }
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        'flex-directions': 'row',
        width: 800,
        'font-size': '30px',
        'justify-content': 'space-around',
      }}
      >
        <div1>
          {this.state.timp_trecut}
          {/* {this.state.variabila} */}
          {this.state.mesaj}
          {/* {this.state.puzzle_curent} */}

        </div1>

        <ChessLib
          pieces={this.state.puzzleuri[this.state.puzzle_curent].piese}
          lightSquareColor={this.state.lightSquareColors}
          darkSquareColor={this.state.darkSquareColors}
          onMovePiece={this.onMovePieces}
          allowMoves={this.state.allowMovess}
        />

        <div3>
          
        </div3>

      </div>

    );
  }
}
export default Chess;
