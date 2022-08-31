import logo from '../assets/shared/logo.svg'
import {Link, useLocation} from 'react-router-dom'
import iconHamburger from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'
import { useState } from 'react'
import Menu from './Menu'

const Header = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation().pathname
    const route = location.split("/")[1]
    
  return (
    <header>
        <nav className='nav'>
             {/* Desktop Menu */}
            <Link to="/"><img src={logo} alt="" className='mt-1'/></Link>
            <hr className='hr'/>
            <div className='hidden md:flex md:items-center h-96 bg-bgHeader backdrop-blur-lg p-14 lg:p-6 lg:w-1/2 absolute right-0'>
                <ul className='ml-3 space-x-12 flex uppercase text-base font-thin'>
                   <Menu route={route} />
                </ul>
            </div>
            {/* Mobile Menu */}
            <button onClick={()=>setOpen(!open)} className="btn-position">
              <img src={open ? iconClose : iconHamburger} alt="" />
            </button>
            {
                open && (
                    <div className="menu-mobile">
                        <button onClick={()=>setOpen(!open)} className="btn-position2">
                            <img src={open ? iconClose : iconHamburger} alt="" />                           
                        </button> 
                        <ul className='menu-mobile-position'>
                             <Menu route={route} />
                        </ul>
                    </div>
                )
            }
        </nav>
    </header>
  )
}

export default Header