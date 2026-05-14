import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SingleItem } from '../utils/Items';

function SingleProduct() {
  
  const { SingleProductId } = useParams();
  
  
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  
useEffect(() => {
    SingleItem(SingleProductId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore:", err);
        setLoading(false);
      });
}, [SingleProductId]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <p className="text-danger fw-bold">Prodotto non trovato.</p>
        <Link to="/Products" className="btn btn-dark btn-sm">Torna ai prodotti</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row g-5 align-items-center">
        {/* img ptoduct */}
        <div className="col-12 col-md-6 text-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="img-fluid object-fit-contain" 
            style={{ maxHeight: '400px' }}
          />
        </div>
        
        {/* product details */}
        <div className="col-12 col-md-6">
          <span className="badge bg-light text-dark mb-2 text-uppercase">{product.category}</span>
          <h2 className="fw-bold mb-3">{product.title}</h2>
          <h3 className="text-primary fw-bold mb-4">${product.price}</h3>
          <p className="text-secondary lh-lg mb-4">{product.description}</p>
          
          <div className="d-flex gap-3">
            <button className="btn btn-dark px-4 py-2 fw-medium">
              Aggiungi al Carrello
            </button>
            <Link to="/Products" className="btn btn-outline-secondary px-4 py-2 fw-medium">
              Torna al negozio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
