import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetail({ products }) {
  const { itemId } = useParams(); // Captura o ID do produto da URL
  const navigate = useNavigate(); // Permite navegação programática
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);

  // Busca o item pelo ID (parseInt para garantir compatibilidade com strings)
  const item = products.find((product) => product.id === parseInt(itemId));

  const handleAddToCart = (count) => {
    setQuantity(count);
    setAddedToCart(true);
  };

  if (!item) {
    return <p>Produto não encontrado! Verifique o ID do produto.</p>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img src={item.img} alt={item.name} className="img-fluid" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-6">
          <h1>{item.name}</h1>
          <p><strong>Preço:</strong> {item.price}</p>
          <p>{item.description || 'Descrição não disponível.'}</p>

          {addedToCart ? (
            <>
              <p>Você adicionou <strong>{quantity}</strong> {quantity > 1 ? 'unidades' : 'unidade'} ao carrinho.</p>
              <button
                className="btn btn-success"
                onClick={() => navigate('/cart')}
              >
                Finalizar Compra
              </button>
            </>
          ) : (
            <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
