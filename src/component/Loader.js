import React from 'react'
import './Loader.css'
import ReactDOM from 'react-dom'


const Loader = () => {
  return ReactDOM.createPortal(
    <div className='loader-wrapper' >
        <div className='loader'>
        </div>
    
    </div>,
    document.getElementById('loader')
  )
}

export default Loader