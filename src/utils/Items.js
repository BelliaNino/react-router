const API_URL = 'https://fakestoreapi.com/products'

function Items() {
  return (
    fetch('https://fakestoreapi.com/products')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
      return json
    })
  )
}

function SingleItem(SingleProductId) {
    return (
        fetch(`https://fakestoreapi.com/products/${SingleProductId}`)
        .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
      return json
    })
    )
}

export default Items
export { SingleItem };