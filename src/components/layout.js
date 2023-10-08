import * as React from 'react'
import Navbar from './navigation'
import { Footer } from './footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container bg-light shadow mt-sm-3">
        <main>
          {children}
        </main>
      </div >
      <Footer />
    </div>
  )
}

export default Layout