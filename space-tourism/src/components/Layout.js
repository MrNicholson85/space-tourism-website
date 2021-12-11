import React from 'react'
import Navbar from './navbar'
import '../styles/main.scss'
import styled from 'styled-components'

const LayoutStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 1440px;
    width: 100%;
  }
`

export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <Navbar />
      <div classNmae="content">
        { children }
      </div>
    </LayoutStyles>
  )
}
