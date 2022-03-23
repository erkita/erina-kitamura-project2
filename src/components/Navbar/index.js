import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Wordle</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/how-to-play" activeStyle>
              How To Play
            </NavLink>
            <NavLink to="/easy" activeStyle>
              Easy
            </NavLink>
            <NavLink to="/medium" activeStyle>
              Medium
            </NavLink>
            <NavLink to="/hard" activeStyle>
              Hard
            </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar;