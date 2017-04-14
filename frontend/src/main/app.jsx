import React from 'react'
import Nav from '../templates/navigation'
import Footer from '../templates/footer'
import Router from './routes'

import '../commons/templates/dependencies'

export default props => (
  <main>
    <Nav />
    <Router />
    <Footer />
  </main>
)
