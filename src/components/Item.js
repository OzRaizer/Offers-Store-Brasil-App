import React from 'react';

const Item = ({ name, price, image }) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">R$ {price}</p>
        <a href="#" className="btn btn-primary">Comprar</a>
      </div>
    </div>
  );
};

export default Item;