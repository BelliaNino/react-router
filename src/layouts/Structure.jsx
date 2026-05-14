import React from 'react'

import { 
    Outlet
 } from 'react-router-dom'

function Structure() {
  return (
    <>
    <header>
        <h1>
            Header
        </h1>
    </header>

    <Outlet/>

    <footer>
        <h2>
            Footer
        </h2>
    </footer>
    </>
  )
}

export default Structure