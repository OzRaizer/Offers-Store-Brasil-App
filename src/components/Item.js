import React from 'react';
import { Link } from "react-router-dom";

function Item({ id, name, price }) {
  return (
    <div className="item">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <Link to={`/item/${id}`}>View Details</Link>
    </div>
  );
}

export default Item;