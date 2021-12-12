import {Link} from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'

const MenuStyles = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 40px;
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
  width: 830px;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
  position: relative;
  padding-left: 110px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-family: 'Barlow Condensed', sans-serif;
    letter-spacing: 2.7px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 37px 0;
    border-bottom: 3px solid transparent;
    margin-left: 48px;

    span {
      font-weight: 700;
      margin-right: 5px;
    }

    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255, .5);
    }
  }

  [aria-current="page"] {
    border-bottom: 3px solid rgba(255, 255, 255);

    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255);
    }
  }

  &:before {
    content: '';
    width: 437px;
    height: 1px;
    background-color: rgba(255, 255, 255, .5);
    position: absolute;
    left: -400px;
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
