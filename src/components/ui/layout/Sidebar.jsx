import React from 'react'
import Header from '../modules/Header'

function Sidebar({children}) {
  return (

    <div>
        <Header/>
        {children}
        </div>
  )
}

export default Sidebar