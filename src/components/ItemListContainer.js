import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams(); // Obtém a categoria da URL (se houver)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Inicia o carregamento
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        // Simula a busca dos produtos, filtrando por categoria, se aplicável
        const allProducts = [
          {
            id: 1,
            name: "Kingston NV3 1TB M.2 2280 NVMe SSD | PCIe 4.0 Gen 4x4 | Up to 6000 MB/s | SNV3S/1000G",
            price: "R$ 449,99",
            img: "https://m.media-amazon.com/images/I/71ZnK38jZzL._AC_SX425_.jpg",
            category: "storage",
            link: "https://amzn.to/3YwSjV8",
          },
          {
            id: 2,
            name: "Processador AMD Ryzen 5 7600X Box (AM5/6 Cores/12 Threads/5.3GHz/38MB Cache/Radeon Graphics)",
            price: "R$ 1549,70",
            img: "https://m.media-amazon.com/images/I/41j61j9aZGL._AC_SX679_.jpg",
            category: "processors",
            link: "https://amzn.to/4ecVY0a",
          },
          {
            id: 3,
            name: "Gabinete Gamer Aquário em Vidro Com 4 Ventoinhas RGB",
            price: "R$ 322,00",
            img: "https://m.media-amazon.com/images/I/71fwOZy2yLL._AC_SX569_.jpg",
            category: "cases",
            link: "https://amzn.to/48tIFY4",
          },
        ];

        // Filtra produtos por categoria, se existir categoryId
        const filteredProducts = categoryId
          ? allProducts.filter((product) => product.category === categoryId)
          : allProducts;

        resolve(filteredProducts);
      }, 2000); // Simula um delay de 2 segundos
    });

    fetchProducts.then((data) => {
      setProducts(data);
      setLoading(false); // Finaliza o carregamento
    });
  }, [categoryId]);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div className="container my-4 p-4 text-center" style={{ border: "1px solid #ddd", borderRadius: "5px" }}>
      <h2>{greeting}</h2>
      <p style={{ fontSize: "14px", color: "#555" }}>
        O maior site de ofertas e promoções do mundo. Crie seu carrinho e seja direcionado para seu produto nas melhores lojas da web.
      </p>
      <div className="row mt-4">
        {products.map((product) => (
          <div className="col-sm-12 col-md-4 d-flex align-items-stretch" key={product.id}>
            <div className="card mb-4 w-100">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ fontSize: "16px", minHeight: "60px" }}>
                  {product.name}
                </h5>
                <p className="card-text">
                  <strong>{product.price}</strong>
                </p>
                <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                  Comprar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
