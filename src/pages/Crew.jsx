import { useState } from 'react'
import { crew } from '../data'
import {FaCircle} from 'react-icons/fa'

const Crew = () => {
  const [records] = useState(crew)
  const [indexx, setIndexx] = useState(0)
  const {name, images, role, bio}=records[indexx]

  return (
    <section className="crewBackground crew">
      <div className='mt-28 md:mt-36'>
      <h2 className="h2 mb-3 md:mb-0 md:mx-32"><span className="span">02</span>Meet your crew</h2>
      <div className='containerBox md:mt-24 md:px-32'>
         {/* *************************MOBILE DESIGN************************* */}
         <div className='block md:hidden'>
          {/* Images of Crew in mobile size */}
          <div className='block md:hidden'>   
              <img src={images.png} alt={name} title={name} className="w-1/3 mx-auto" />
              <hr className="text-specialBlue border-b-1 border-gray-500" />
          </div>
          {/* Navigation in mobile size for Crew Team */}
          <div className='nav-mobile'>
                <ul className="list">
                    {records.map((menu, index) => (
                        <li key={index} className="px-2">
                          <button onClick={() => setIndexx(index)} 
                                  className={`${index === indexx && "border-white text-specialBlue"}`}
                          >
                            <FaCircle size={10}/>
                          </button>
                        </li>
                    ))}
                </ul>
          </div>
        </div>
         {/* ***************************MOBILE + PC ****************************/}
        <div className='desk-content'>
            <h3 className='heading-3'>{role}</h3>
            <h2 className="heading-4">{name}</h2>
            <p className='text'>{bio}</p>
            {/* ***************************PC DESIGN*****************************/}
            <div className='hidden md:block md:mt-14'>
                    <ul className="flex items-center justify-center md:justify-start mb-10">
                        {records.map((menu, index) => (
                          <li key={index} className="mr-7 md:mr-5 text-gray-500">
                            <button onClick={() => setIndexx(index)} className={`${index === indexx && "border-white text-white"}`}>
                              <FaCircle size={10}/>
                            </button>
                          </li>
                        ))}
                    </ul>
              </div>
        </div>  
        <img src={images.png} alt={name} title={name} className="img" />
      </div>    
      </div>
    </section>
  )
}

export default Crew