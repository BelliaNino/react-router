import React from 'react'
import {Link} from 'react-router-dom'

function Products() {
  return (
    <div>
        <h1>Products</h1>
        <Link to="/"><button>Home</button></Link>
        <Link to="/Contact"><button>Contact us</button></Link>
    </div>
  )
}

export default Products