import * as React from 'react'
import Navbar from './navigation'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container bg-light shadow my-sm-3">
        <main>
          {children}
        </main>
      </div >
    </div>
  )
}

export default Layout