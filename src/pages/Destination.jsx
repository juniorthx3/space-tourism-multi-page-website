import { useState } from 'react'
import { destinations } from '../data'

const Destination = () => {
  const [records] = useState(destinations)
  const [indexx, setIndexx] = useState(0)
  const {name, images, description, distance, travel}=records[indexx]

  return (
    <section className="destinationBackground destination">
       <div className='mt-28 md:mt-36'>
            <h2 className="h2 mb-3 md:mb-0 md:mx-32"><span className="span">01</span>Pick your destination</h2>
            <div className='containerBox md:mt-12 xl:max-w-7xl xl:mx-auto'>
                <img src={images.png} alt={name} title={name} className="img" />
                <div className='infoBox'>  
                    <ul className="flex items-center justify-center mb-8 md:justify-start">
                        {records.map((menu, index) => (
                          <li key={index} className="mr-7 md:mr-8">
                            <button onClick={() => setIndexx(index)} 
                                    className={`font-barlowCondensed not-italic font-normal leading-4 text-specialBlue uppercase text-md tracking-widest pb-2 focus:text-white md:text-md ${index === indexx && "border-b-2 border-white"}`}
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