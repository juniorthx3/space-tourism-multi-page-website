import { useState } from 'react'
import { technology } from '../data'

const Technology = () => {
  const [records] = useState(technology)
  const [indexx, setIndexx] = useState(0)
  const {name, images, description}=records[indexx]

  return (
    <section className="technologyBackground technology">
      <div className='mt-28 md:mt-36'>
        <h2 className="h2 mb-3 md:mb-0 md:mx-32"><span className="span">03</span>Space Launch 101</h2>
        <div className='containerBox md:mt-28 md:px-32'>
          <div className='desk-content'>
              <h2 className="heading-4">{name}</h2>
              <p className='text'>{description}</p>
              {/* ***************************PC DESIGN*****************************/}
              <div className='hidden md:block md:mt-20'>
                      <ul className="flex items-center justify-center md:justify-start mb-10">
                          {records.map((menu, index) => (
                            <li key={index} className="mr-7 md:mr-5 text-gray-500">
                              <button onClick={() => setIndexx(index)} className={`${index === indexx && "border-white text-white"}`}>
                               x
                              </button>
                            </li>
                          ))}
                      </ul>
                </div>
          </div> 
          <img src={images.landscape} alt={name} title={name} className="img" />
        </div>
      </div>
    </section>
  )
}

export default Technology