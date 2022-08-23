import { useState } from 'react'
import { destinations } from '../data'

const Destination = () => {
  const [records] = useState(destinations)
  const [indexx, setIndexx] = useState(0)
  const {name, images, description, distance, travel}=records[indexx]

  return (
    <section className="destinationBackground destination">
      <div className='containerDestination'>
          <div className='text-center md:text-left'>
            <h2 className="h2">
              <span className="span">01</span>Pick your destination
            </h2>
            <img src={images.png} alt={name} title={name} className="img" />
          </div>
          <div className='infoBox'>  
              <ul className="flex items-center justify-center md:justify-start mb-10">
                  {records.map((menu, index) => (
                    <li key={index} className="mr-7 md:mr-5">
                      <button onClick={() => setIndexx(index)} 
                              className={`font-barlowCondensed not-italic font-normal leading-4 text-specialBlue uppercase text-md tracking-widest pb-2 border-b border-transparent focus:text-white md:text-md ${index === indexx && "border-b border-white"}`}
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
    </section>
  )
}

export default Destination