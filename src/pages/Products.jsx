import { useState, useEffect } from 'react';
import Items from '../utils/Items';

function Products() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  Items()
    .then((data) => {
      setItem(data);
      setLoading(false);
    })
    .catch(error => console.log(error));
}, []);


  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center my-5">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center fw-bold">Our Products</h2>
      
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {item.map((i) => (
          <div className="col" key={i.id}>
            <div className="card h-100 shadow-sm border-0 py-3 px-2">
              <div className="d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                <img 
                  src={i.image} 
                  className="card-img-top mh-100 mw-100 object-fit-contain" 
                  alt={i.title} 
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between mt-3">
                <div>
                  <h6 className="card-title text-truncate" title={i.title}>
                    {i.title}
                  </h6>
                  <p className="text-muted small badge bg-light text-dark">
                    {i.category}
                  </p>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fw-bold text-primary fs-5">${i.price}</span>
                  </div>
                  <button className="btn btn-outline-dark w-100 btn-sm fw-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
