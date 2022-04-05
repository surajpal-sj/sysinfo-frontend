console.log("hello World!")



function Square({props}) {
       let state = {
          value: null,
        };

    
      return (
        <button className="square" onClick={() => console.log('click')}>
           {props.value}
        </button>
      );
    }
  
    
  function Board(){
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
  
  
function Name ({props}){
    console.log()
    return (

    
        <p>{props.name}: {props.age} </p>
        )
}

function Sum ({props}){
    console.log(a)
       return(
   
           <p>{props.a}: {props.b} </p>
   
       )
   
   }

  function Game() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
         

          <Name props ={{
              name: "Suraj",
              age: 23

          }}
          />

           <Name props ={{
              name: "Deevakar",
              age: 29

          }}
          />
           <Name props ={{
              name: "garima",
              age: 27

          }}
          />

          <Sum  props={{
              a:10,
              b:20
            }}
            />

          
           
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  
  
  export default Game;







  