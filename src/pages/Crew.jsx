import { useState } from 'react'
import { crew } from '../data'
import {FaCircle} from 'react-icons/fa'

const Crew = () => {
  const [records] = useState(crew)
  const [indexx, setIndexx] = useState(0)
  const {name, images, role, bio}=records[indexx]

  return (
    <section className="crewBackground crew">
       <div className='containerBox'>
          <div className='text-center md:text-left'>
            <h2 className="h2 md:mb-24"><span className="span">02</span>Meet your crew</h2>
            <div className='block md:hidden'>   
              <img src={images.png} alt={name} title={name} className="w-1/2 mx-auto" />
              <hr className="text-specialBlue border-b-1 border-gray-500" />
            </div>
            <div className='pt-5 flex items-center justify-center md:pt-0 md:hidden md:fixed md:bottom-10'>
                <ul className="flex items-center justify-center mb-4 md:justify-start md:mb-10">
                    {records.map((menu, index) => (
                      <li key={index} className="mr-4 md:mr-5">
                        <button onClick={() => setIndexx(index)} 
                                className={`${index === indexx && "border-white text-specialBlue"}`}
                        >
                          <FaCircle size={10}/>
                        </button>
                      </li>
                    ))}
                </ul>
             </div>
            <div className='mr-5 md:mr-0 md:ml-16'>
              <h3 className='font-bellefair not-italic font-normal text-xl leading-9 uppercase text-white mix-blend-normal opacity-50 md:text-3xl'>{role}</h3>
              <h2 className="font-bellefair not-italic font-normal text-2xl uppercase text-white md:mt-4 mb-5 md:text-5xl">{name}</h2>
              <p className='mb-10 w-3/4 mx-auto font-barlow not-italic font-normal text-sm leading-6 text-specialBlue md:mx-0 md:w-3/5 md:mb-0'>{bio}</p>
              <div className='hidden md:block md:mt-20 '>
                <ul className="flex items-center justify-center md:justify-start mb-10">
                    {records.map((menu, index) => (
                      <li key={index} className="mr-7 md:mr-5">
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
          </div>
          <div className='hidden md:flex items-end md:pt-16'>   
              <img src={images.png} alt={name} title={name} className="w-1/2 md:w-3/5 mx-auto md:mt-5;" />
          </div>
      </div>
    </section>
  )
}

export default Crew