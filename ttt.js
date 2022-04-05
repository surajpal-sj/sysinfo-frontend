import {useState} from 'react'
console.log("hello Kingo!")



function Square({props}) {
  let [state,setState] = useState(0);

    
      return (
        <button
        className="square"
        onClick={() => setState({value: 'X'})}
        >
          {state.value}
      </button>
      );
    }
  
    
  function Board(){
    let State = {
      squares: Array(9).fill(null),
    };

    function renderSquare(i) {
        return <Square props={{value:i}} />;
    }
  
  
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
    }
  

  function Game() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>          
           
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  
  
  export default Game;







  