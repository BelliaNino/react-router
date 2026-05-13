import React from 'react'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h1>Contanct</h1>
        <Link to="/"><button>Home</button></Link>
        <Link to="/Products"><button>Products</button></Link>
    </div>
  )
}

export default Contact