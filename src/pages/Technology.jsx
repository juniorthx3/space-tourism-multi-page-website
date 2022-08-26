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
        <div className='techBox'>
          <div className='btnInfo'>
                  <ul className="boxBtn">
                      {records.map((menu, index) => (
                          <li key={index} className="list">
                              <button onClick={() => setIndexx(index)} className={`btnDesign ${index === indexx && "bg-white text-black"}`}>
                                  {index + 1}  
                              </button>
                          </li>
                      ))}
                  </ul>
                  <div>
                      <h3 className='heading-5'>The Terminology...</h3>
                      <h2 className="heading-4">{name}</h2>
                      <p className='text1'>{description}</p>
                  </div>
          </div> 
            <img src={images.landscape} alt={name} title={name} className="md:hidden mx-auto" />
            <img src={images.portrait} alt={name} title={name} className="sm:hidden md:block mx-auto w-1/3" />
        </div>
      </div>
    </section>
  )
}

export default Technology