import logo from '../assets/shared/logo.svg'
import {Link} from 'react-router-dom'
import iconHamburger from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'
import { useState } from 'react'
import NavLink from './NavLink'

const Header = () => {
    const [open, setOpen] = useState(false)
  return (
    <header className='bg-header relative mt-5 text-white' >
        <nav className='flex items-center justify-between py-3 pl-10 pr-32'>
            <div>
                <Link to="/"><img src={logo} alt="" /></Link>
                <hr className='absolute '/>
            </div>
            <div className='hidden bg-nav md:flex md:items-center '>
                <ul className='space-x-12 flex uppercase text-sm'>
                   <NavLink />
                </ul>
            </div>
            <button onClick={()=>setOpen(!open)} className="absolute right-7 focus:outline-none md:hidden">
              {open ? <img src={iconClose} alt="" className='hidden' /> : <img src={iconHamburger} alt="" />}
            </button> 
            {
                open && (
                    <div className="md:hidden border">
                        <div className='h-screen absolute -top-10 right-0 text-sm  px-5  py-8 mt-5 space-y-6  w-1/2 left-1/2' style={{backgroundColor:"rgba(255, 255, 255, 0.5)", backdropFilter:"blur(81.5485px)"}}>
                        <button onClick={()=>setOpen(!open)} className="absolute right-7 top-12 focus:outline-none md:hidden">
                            {open ? <img src={iconClose} alt="" /> : <img src={iconHamburger} alt="" />}
                        </button> 
                        <ul className='uppercase text-sm absolute top-28 space-y-10'>
                                <NavLink />
                            </ul>
                        </div>
                    </div>
                )
            }
        </nav>
    </header>
  )
}

export default Header