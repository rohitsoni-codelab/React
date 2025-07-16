import React from "react";
import Button from './Button'

const Card = (props) => {
  return (
    <div>
      <p>Hello jii</p>
      <p>This is a {props.name}</p>
      <Button/>
    </div>
  );
};

export default Card;
