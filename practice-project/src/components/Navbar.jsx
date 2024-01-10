import React from 'react'
import logo from '../assets/logo.svg'
import Menu from './Menu'
import Button from './Button'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center pr-10 lg:px-20 sticky top-0 z-50 bg-white h-24'>

      {/* nav left */}
      <div>
        <a href="/"><img className="w-36 ml" src={logo} alt=""/></a>
      </div>

      {/* nav right */}
      <div className='flex flex-row'>
        <Menu />
        <Button>Get Loom For Free</Button>
        <Button>Contact Sales</Button>
      </div>
    </nav>
  )
}

export default Navbar