import React, { useState } from 'react'
import { FaBars, FaTimes,} from 'react-icons/fa'

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
          <div>
              {/* <img src={Logo} alt="Dustin Burns Dev Logo" style={{ width: '50px' }} /> */}
          </div>

          {/*  NavBar Menu */}
          <ul className='hidden md:flex'>
              <li>
                  <a href="/">Home</a>
              </li>
              <li>
                  <a href="/login">Login</a>
              </li>
              <li>
                  <a href="/journal">My Journal</a>
              </li>
              <li>
                  <a href="/qoutes">Qoutes</a>
              </li>
              <li>
                  <a href="/contact">Contact</a>
              </li>
          </ul>

          {/* Hamburger */}
          <div onClick={handleClick} className='md:hidden z-10'>
              {!nav ? <FaBars /> : <FaTimes />}
          </div>


          {/* Mobile menu */}
          <ul
              className={
                  !nav
                      ? 'hidden'
                      : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
              }
          >
              <li className='py-6 text-4xl'>
                  <a href="/">Home</a>
              </li>
              <li className='py-6 text-4xl'>
                  <a href="/login">Login</a>
              </li>
              <li className='py-6 text-4xl'>
                  <a href="/journal">Journal</a>
              </li>
              <li className='py-6 text-4xl'>
                  <a href="/qoutes">Qoutes</a>
              </li>
              <li className='py-6 text-4xl'>
                  <a href="/contact">Contact</a>
              </li>
          </ul>
      </div>
  )
}

