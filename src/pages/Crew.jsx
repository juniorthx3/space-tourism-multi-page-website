import { useState } from 'react'
import { crew } from '../data'
import {FaCircle} from 'react-icons/fa'

const Crew = () => {
  const [records] = useState(crew)
  const [index, setIndex] = useState(0)
  const {name, images, role, bio}=records[index]

  return (
    <section className="crewBackground crew">
      <div className='position-start-page'>
               <h2 className="h2"><span className="span">02</span>Meet your crew</h2>
                <div className='containerBox md:mt-8 lg:mt-12 xl:mt-48 xl:mx-32'>
                    {/* Mobile Design */}
                    <div className='block md:hidden'>
                      {/* Images of Crew in mobile size */}
                      <div>   
                          <img src={images.png} alt={name} title={name} className="w-177 mx-auto" />
                          <hr className="text-specialBlue border-b-1 border-gray-500" />
                      </div>
                      {/* Navigation in mobile size for Crew Team */}
                      <div className='nav-mobile'>
                            <ul className="list">
                                {records.map((menu, indicator) => (
                                      <li key={indicator} className="mr-4 md:mr-5 text-gray-500 cursor-pointer">
                                        <button onClick={() => setIndex(indicator)} className={`${indicator === index && "border-white text-white"}`}>
                                          <FaCircle size={10}/>
                                        </button>
                                      </li>
                                ))} 
                            </ul>
                      </div>
                    </div>
                    {/* Mobile + PC */}
                    <div className='desk-content'>
                        <h3 className='heading-3 pb-3'>{role}</h3>
                        <h2 className="heading-4">{name}</h2>
                        <p className='text'>{bio}</p>
                        {/* PC Design */}
                        <div className='hidden md:block md:mt-10 lg:mt-20'>
                                <ul className="flex items-center justify-center lg:justify-start mb-10">
                                    {records.map((menu, indicator) => (
                                      <li key={indicator} className="mr-7 md:mr-5 text-gray-500 cursor-pointer">
                                        <button onClick={() => setIndex(indicator)} className={`${indicator === index && "border-white text-white"}`}>
                                          <FaCircle size={11}/>
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