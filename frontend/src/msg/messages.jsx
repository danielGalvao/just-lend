import React from 'react'
import Reduxtoastr from 'react-redux-toastr'
import 'modules/react-redux-toastr/lib/css/react-redux-toastr'

export default props => (
  <Reduxtoastr
    timeOut={4000}
    newestOnTop={false}
    preventDuplicates={true}
    position='bottom-right'
    transitionIn='fadeIn'
    transitionOut='fadeOut'
    progressBar />
)
