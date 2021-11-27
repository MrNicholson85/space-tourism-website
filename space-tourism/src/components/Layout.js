import React from 'react'
import Navbar from './navbar'
import '../styles/global.scss'
import '../styles/typography.scss'
import '../styles/variables.scss'

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <Navbar />
      <div classNmae="content">
        { children }
      </div>
    </div>
  )
}
