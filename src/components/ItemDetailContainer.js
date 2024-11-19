import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemById } from "../mocks";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItemById(itemId).then(setItem);
  }, [itemId]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetailContainer;