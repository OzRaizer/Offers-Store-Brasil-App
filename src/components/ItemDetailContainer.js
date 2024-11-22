import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, name: "SSD Kingston", price: 449.99 },
            { id: 2, name: "Ryzen 5 7600X", price: 1549.7 },
          ]);
        }, 2000);
      });
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container my-4">
      <h2>{greeting}</h2>
      <ItemList items={products} />
    </div>
  );
}

export default ItemListContainer;
