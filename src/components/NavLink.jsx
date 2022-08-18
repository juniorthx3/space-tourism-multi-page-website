import {Link} from 'react-router-dom'

const NavLink = () => {
  return (
    <>
        <li className='hover:border-b-2 hover:border-b-solid'>
            <Link to="/"><span className='font-bold pr-1'>00</span> Home</Link>
        </li>
        <li className='hover:border-b-2 hover:border-b-solid'>
            <Link to="/destination"><span className='font-bold pr-1'>01</span> Destination</Link>
        </li>
        <li className='hover:border-b-2 hover:border-b-solid'>
            <Link to="/crew"><span className='font-bold pr-1'>02</span> Crew</Link>
        </li>
        <li className='hover:border-b-2 hover:border-b-solid'>
            <Link to="/technology"><span className='font-bold pr-1'>03</span> Technology</Link>
        </li>
    </>
  )
}

export default NavLink