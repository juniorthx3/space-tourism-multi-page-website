import {Link} from 'react-router-dom'

const NavLink = () => {
  return (
    <>
        <li>
            <Link to="/" className='hover:border-b-2 hover:border-b-solid pb-6'>
                <span className='font-bold pr-1'>00</span> Home
            </Link>
        </li>
        <li>
            <Link to="/destination" className='hover:border-b-2 hover:border-b-solid pb-6'>
                <span className='font-bold pr-1'>01</span> Destination
            </Link>
        </li>
        <li>
            <Link to="/crew" className='hover:border-b-2 hover:border-b-solid pb-6'>
                <span className='font-bold pr-1'>02</span> Crew
        </Link>
        </li>
        <li>
            <Link to="/technology" className='hover:border-b-2 hover:border-b-solid pb-6'>
                <span className='font-bold pr-1'>03</span> Technology
            </Link>
        </li>
    </>
  )
}

export default NavLink