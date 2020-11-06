import React from 'react';
import Row from './Row.jsx';

const Board = (props) => {
  return (
    <table className="table">
      <tbody>
      {props.board.map((row, index) => <Row row={row} rowNumber={index} key={index}/>)}
      </tbody>
    </table>
  )
}

export default Board;