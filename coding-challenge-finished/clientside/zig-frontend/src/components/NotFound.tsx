import React from 'react'
// import PropTypes from 'prop-types'

const NotFound = (props:any) => {
  return (
    <div className='not-found__message'>
    {/* TODO: add css to match netflix not found page */}
    <h1>LOST YOUR WAY?</h1>
    <p>
      Sorry, we can't find that page. You'll find lots to explore on the home
      page.
    </p>
    <button>Home</button>
    
  </div>
  )
}

NotFound.propTypes = {

}

export default NotFound
