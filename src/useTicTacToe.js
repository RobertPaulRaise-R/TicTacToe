import { useState } from "react";

const initialBoard = () => Array.from({ length: 9 }).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  console.log(initialBoard);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function calcWinner(currentBoard) {
    for (let i = 0; i < winningPatterns.length; i++) {
      let [a, b, c] = winningPatterns[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    const winner = calcWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }
  function getStatusMessage() {
    const winner = calcWinner(board);
    if (winner) return `${winner} wins`;
    if (!board.includes(null)) return `Match is draw`;
    return `Player ${isXNext ? "X" : "O"} turn`;
  }

  function reset() {
    setBoard(initialBoard());
    setIsXNext(true);
  }

  return { board, handleClick, calcWinner, getStatusMessage, reset };
};

export default useTicTacToe;
