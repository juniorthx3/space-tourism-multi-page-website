import {Link} from 'react-router-dom'

const NavLink = ({route}) => {
  return (
    <>
        <li>
            <Link to="/" className={route === "" ? 'menu-links border-b-2 border-b-solid' : 'menu-links'}>
                <span className='font-bold pr-1'>00</span> Home
            </Link>
        </li>
        <li>
            <Link to="/destination" className={route === "destination" ? 'menu-links border-b-2 border-b-solid' : 'menu-links'}>
                <span className='font-bold pr-1'>01</span> Destination
            </Link>
        </li>
        <li>
            <Link to="/crew" className={route === "crew" ? 'menu-links border-b-2 border-b-solid' : 'menu-links'}>
                <span className='font-bold pr-1'>02</span> Crew
        </Link>
        </li>
        <li>
            <Link to="/technology" className={route === "technology" ? 'menu-links border-b-2 border-b-solid' : 'menu-links'}>
                <span className='font-bold pr-1'>03</span> Technology
            </Link>
        </li>
    </>
  )
}

export default NavLink