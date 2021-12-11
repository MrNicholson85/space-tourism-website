import {Link} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const MenuStyles = styled.div`
  display: grid;
  grid-template-columns: 48px 460px;
  justify-content: space-between;
  align-items: center;
`

const LogoStyles = styled.div`
  background: white url(${logo});
  background-repeat: no-repeat;
  height: 48px;
  width: 48px;
  border-radius: 25px;
` 

const LinkStyle = styled.div`
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  height: 96px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2.7;
    font-weight: light;

    span {
      font-weight: bold;
      margin-right: 5
  px;
    }
  }
`

export default function Navbar() {
  return (
    <MenuStyles>
      <LogoStyles class="site_logo"></LogoStyles>
      <LinkStyle>
        <Link to="/"><span>00</span> Home</Link>
        <Link to="/destination/"><span>01</span> Destination</Link>
        <Link to="/meet-crew/"><span>02</span> Crew</Link>
        <Link to="/technology/"><span>03</span> Technology</Link>
      </LinkStyle> 
    </MenuStyles>
  )
}
