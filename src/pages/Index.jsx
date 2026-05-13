import React from 'react'

import { Link } from 'react-router-dom'

function Index() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/Contact"><button>Contact us</button></Link>
            <Link to="/Products"><button>Products</button></Link>
        </div>
    )
}

export default Index