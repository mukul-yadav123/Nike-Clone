import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
  <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
      <a href="/">
        <img src={headerLogo} alt="logo" width={140} height={29}/>
      </a>
      <ul className='flex-1 flex justify-center items-center 
      gap-16 max-lg:hidden'>
      {
        navLinks.map((navLink) => (
          <li key={navLink.label}>
          <a href={navLink.href} className='font-montserrat leading-normal
          text-lg text-slate-gray hover:underline hover:text-black'>{navLink.label}
          </a>
          </li>
        ))
      }
      </ul>
      <div>
        <img src={hamburger} className='max-lg:block hidden cursor-pointer' alt="hamburger" width={25} height={25} />
      </div>
    </nav>
  </header>
  )
}

export default Nav