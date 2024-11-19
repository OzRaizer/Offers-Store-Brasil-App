import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemDetail({ products }) {
  const { itemId } = useParams(); // Captura o ID do produto da URL
  const navigate = useNavigate(); // Permite navegação programática
  const [addedToCart, setAddedToCart] = useState(false); // Gerencia estado do botão de finalizar compra
  const [quantity, setQuantity] = useState(0); // Armazena quantidade adicionada

  // Encontra o produto pelo ID
  const item = products.find((product) => product.id === parseInt(itemId));

  // Função chamada pelo evento `onAdd` do ItemCount
  const handleAddToCart = (count) => {
    setQuantity(count);
    setAddedToCart(true); // Esconde o ItemCount e mostra o botão de finalizar compra
  };

  // Caso o produto não seja encontrado, exibe mensagem de erro
  if (!item) {
    return <p>Produto não encontrado!</p>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <img src={item.img} alt={item.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{item.name}</h1>
          <p><strong>Preço:</strong> {item.price}</p>
          <p>{item.description || "Descrição não disponível para este produto."}</p>

          {/* Se o produto já foi adicionado ao carrinho, mostra botão de finalizar compra */}
          {addedToCart ? (
            <>
              <p>
                Você adicionou <strong>{quantity}</strong> {quantity > 1 ? "unidades" : "unidade"} ao carrinho.
              </p>
              <button
                className="btn btn-success"
                onClick={() => navigate("/cart")} // Navega para a rota '/cart'
              >
                Finalizar Compra
              </button>
            </>
          ) : (
            // Mostra o ItemCount para adicionar ao carrinho
            <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
