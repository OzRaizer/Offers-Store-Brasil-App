import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.map((item) => (
        <Item key={item.id} name={item.name} price={item.price} image={item.image} />
      ))}
    </div>
  );
};

export default ItemList;