import React from 'react';
import Square from './Square.jsx';

const Row = (props) => {
  return (
    <tr className="row">
     {props.row.map((value, index) => <Square column={index} key={index + props.rowNumber} row={props.row} rowNumber={props.rowNumber} />)}
    </tr>
  )
}

export default Row;