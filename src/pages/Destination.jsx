import { useState } from 'react'
import { destinations } from '../data'

const Destination = () => {
  const [records] = useState(destinations)
  const [index, setIndex] = useState(0)
  const {name, images, description, distance, travel}=records[index]

  return (
    <section className="destinationBackground destination">
       <div className='mt-88 md:mt-36'>
            <h2 className="h2 mb-3 md:mb-0 md:mx-32"><span className="span">01</span>Pick your destination</h2>
            <div className='containerBox md:mt-12 xl:max-w-7xl xl:mx-auto'>
                <img src={images.png} alt={name} title={name} className="img hover:animate-pulse" />
                <div className='infoBox'>  
                    <ul className="flex items-center justify-center mb-5 lg:justify-start">
                        {records.map((menu, indicator) => (
                          <li key={indicator} className="px-3 md:mr-8">
                            <button onClick={() => setIndex(indicator)} 
                                    className={`font-barlowCondensed font-normal text-sm leading-4 tracking-two3 text-specialBlue uppercase pb-2 focus:text-white md:text-md hover:border-b-2 hover:border-solid hover:border-gray-400 ${indicator === index && "border-b-3 border-white"}`}
                            >
                              {menu.name}
                            </button>
                          </li>
                        ))}
                    </ul>
                    <h2 className="title">{name}</h2>
                    <p className= "description">{description}</p>
                    <ul className="stats-container">
                      <li className="stats-design">
                        Avg. Distance
                        <span className="stats-results">{distance}</span>
                      </li>
                      <li className="stats-design">
                        Est. travel time
                        <span className="stats-results">{travel}</span>
                      </li>
                    </ul>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Destination