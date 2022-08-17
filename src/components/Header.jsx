import logo from '../assets/shared/logo.svg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='relative mt-5 text-white'>
        <nav className='flex items-center justify-between py-3 pl-10 pr-32'>
            <div>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className='hidden md:flex'>
                <ul className='space-x-10 flex uppercase text-sm'>
                    <li><Link to="/">00 Home</Link></li>
                    <li><Link to="/destination">01 Destination</Link></li>
                    <li><Link to="/crew">02 Crew</Link></li>
                    <li><Link to="/technology">03 Technology</Link></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header