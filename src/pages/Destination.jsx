import { useState } from 'react'
import { destinations } from '../data'

const Destination = () => {
  const [records] = useState(destinations)
  const [index, setIndex] = useState(0)
  const {name, images, description, distance, travel}=records[index]

  return (
    <section className="destinationBackground destination">
       <div className='position-start-page'>
            <h2 className="h2"><span className="span">01</span>Pick your destination</h2>
            <div className='containerBox md:mt-8 xl:mt-20'>
                <img src={images.png} alt={name} title={name} className="img" />
                <div className='infoBox'>  
                    <ul className="flex items-center justify-center mb-5 lg:justify-start">
                        {records.map((menu, indicator) => (
                          <li key={indicator} className="px-3 md:mr-8 lg:mr-2">
                            <button onClick={() => setIndex(indicator)} 
                                    className={`subMenu ${indicator === index && "border-b-3 border-white"}`}
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