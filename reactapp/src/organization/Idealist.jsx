import React from 'react'
import { Link } from 'react-router-dom'
function Idealist() {
  return (
    <div className='idea-cont'>
      <div className='idea-elem'>
        <h1>Idealist.org</h1>
      
      <div className='ideaorg-int'>
        <h3>Location</h3>
        <h2>389 5th Ave, 9th FloorNew York, NY 11109 United States</h2>
      </div>
      </div>
      <div className='opp-head'><h1></h1></div>
      <div className='idea-pro'>
      <Link to="/VolReg"><button type='submit' className='idea-reg-btn'>register for volunteer</button></Link>
      </div>
    </div>
  )
}

export default Idealist
