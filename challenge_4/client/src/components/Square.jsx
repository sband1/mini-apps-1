import React from 'react';

const Square = (props) => {
  return (
    <td className="square">
      {props.rowNumber}
      {props.column}
    </td>
  )
}

export default Square;
