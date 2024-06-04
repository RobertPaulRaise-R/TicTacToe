import useTicTacToe from "./useTicTacToe";

function App() {
  const { board, handleClick, getStatusMessage, reset } = useTicTacToe();

  console.log(board);

  return (
    <div className="app">
      <div className="header">
        <h1>X-O-Game</h1>
        <div className="game-status">
          <h3>{getStatusMessage()}</h3>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>

      <div className="board">
        {board.map((box, index) => {
          return (
            <button
              className="box"
              key={index}
              onClick={() => handleClick(index)}
              disabled={box !== null}
            >
              {box}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
