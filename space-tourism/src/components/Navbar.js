import {Link} from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h1>Space Tour</h1>
      <div className="links">
        <Link to="/">00 Home</Link>
        <Link to="/destination/">01 Destination</Link>
        <Link to="/meet-crew/">02 Crew</Link>
        <Link to="/technology/">03 Technology</Link>
      </div> 
    </nav>
  )
}
