import { useState } from 'react'
import { crew } from '../data'

const Crew = () => {
  const [records] = useState(crew)
  const [indexx, setIndexx] = useState(0)
  const {name, images, role, bio}=records[indexx]

  return (
    <section className="crewBackground crew ">
       <div className='containerBox'>
          <div className='text-center md:text-left'>
            <h2 className="h2">
              <span className="span">02</span>Meet your crew
            </h2>
            <h2 className="title">{name}</h2>
          </div>
          <div className='infoBox'>   
              <img src={images.png} alt={name} title={name} className="w-3/5" />
          </div>
      </div>
    </section>
  )
}

export default Crew