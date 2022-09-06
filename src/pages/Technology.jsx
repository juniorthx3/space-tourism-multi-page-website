import { useState } from 'react'
import { technology } from '../data'

const Technology = () => {
  const [records] = useState(technology)
  const [index, setIndex] = useState(0)
  const {name, images, description}=records[index]

  return (
    <section className="technologyBackground technology">
      <div className='position-start-page'>
        <h2 className="h2"><span className="span">03</span>Space Launch 101</h2>
        <div className='techBox'>
          <div className='btnInfo'>
                  <ul className="boxBtn">
                      {records.map((menu, indicator) => (
                          <li key={indicator} className="list">
                              <button onClick={() => setIndex(indicator)} className={`btnDesign ${indicator === index && "bg-white text-black"}`}>
                                  {indicator + 1}  
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
            <img src={images.landscape} alt={name} title={name} className="mx-auto lg:hidden w-full" />
            <img src={images.portrait} alt={name} title={name} className="hidden lg:block mx-auto w-1/2" />
        </div>
      </div>
    </section>
  )
}

export default Technology