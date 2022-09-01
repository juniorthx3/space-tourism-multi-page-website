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
        <nav>
             {/* Desktop Menu View */}
            <Link to="/"><img src={logo} alt="Logo" className='img'/></Link>
            <hr className='hr'/>
            <div className='menu-desktop'>
                <ul className='list-desktop'>
                   <Menu route={route} />
                </ul>
            </div>
            {/* Mobile Menu View */}
            <button onClick={()=>setOpen(!open)} className="desktop-btn-position">
              <img src={open ? iconClose : iconHamburger} alt="" />
            </button>
            {
                open && (
                    <div className="menu-mobile">
                        <button onClick={()=>setOpen(!open)} className="mobile-btn-position">
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