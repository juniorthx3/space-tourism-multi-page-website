import logo from '../assets/shared/logo.svg'
import {Link, useLocation} from 'react-router-dom'
import iconHamburger from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'
import { useState } from 'react'
import NavLink from './NavLink'

const Header = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation().pathname
    const route = location.split("/")[1]
    
  return (
    <header className='header'>
        <nav className='nav'>
            <Link to="/"><img src={logo} alt="" /></Link>
            <hr className='hr'/>
            <div className='hidden md:flex md:items-center'>
                <ul className='space-x-12 flex uppercase text-base font-thin'>
                   <NavLink route={route} />
                </ul>
            </div>
            <button onClick={()=>setOpen(!open)} className="btn-position">
              {open ? <img src={iconClose} alt="" className='hidden' /> : <img src={iconHamburger} alt="" />}
            </button>
            {
                open && (
                    <div className="menu-mobile">
                        <button onClick={()=>setOpen(!open)} className="btn-position2">
                            {open ? <img src={iconClose} alt="" /> : <img src={iconHamburger} alt="" />}
                        </button> 
                        <ul className='menu-mobile-position'>
                             <NavLink route={route} />
                        </ul>
                    </div>
                )
            }
        </nav>
    </header>
  )
}

export default Header