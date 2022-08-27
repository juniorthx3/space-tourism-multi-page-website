import {Link} from 'react-router-dom'

const Menu = ({route}) => {
    const links = [
        {name:"Home", pathName:""},
        {name:"Destination", pathName:"destination"},
        {name:"Crew", pathName:"crew"},
        {name:"Technology", pathName:"technology"},
    ]
  return (
    <>
      {
        links.map((link, index)=>{
          return (
            <li key={index}>
            <Link to={`/${link.pathName}`} className={route === link.pathName ? 'menu-links menu-links-hover' : 'menu-links'}>
                <span className='font-bold pr-1'>0{index}</span> {link.name}
            </Link>
          </li>
          )
        })
      }
    </>
  )
}

export default Menu