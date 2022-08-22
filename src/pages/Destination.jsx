import { useState } from 'react'
import { destinations } from '../data'

const Destination = () => {
  const [records] = useState(destinations)
  const [indexx, setIndexx] = useState(0)
  const {name, images, description, distance, travel}=records[indexx]

  return (
    <section className="destination bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop">
      <div className='grid grid-cols-1 gap-2 px-5 pt-32 md:grid-cols-2 xl:max-w-7xl xl:mx-auto'>
          <div className='text-center md:text-left'>
            <h2 className="uppercase text-xl pb-5 font-barlowCondensed not-italic font-normal tracking-widest md:leading-10 md:text-2xl md:pb-10">
              <span className="mr-4 font-bold opacity-25 mix-blend-normal">01</span>Pick your destination
            </h2>
            <img src={images.png} alt={name} title={name} className="w-1/2 md:w-3/5 mx-auto md:mt-5" />
          </div>
          <div className='text-center pt-5 md:pt-20 md:text-left pb-10'>  
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
              <h2 className="font-bellefair not-italic font-normal text-5xl uppercase leading-4 mb-6 md:text-7xl">{name}</h2>
              <p className= "text-center font-barlow not-italic font-normal text-sm leading-6 text-specialBlue border-b border-gray-500 pb-10 w-4/5 mx-auto md:mx-0 md:w-3/5 md:text-justify">{description}</p>
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-5 md:w-2/3">
                <li className="text-sm font-barlowCondensed uppercase text-specialBlue tracking-wider leading-7">Avg. Distance<span className="font-bellefair text-white tracking-normal text-2xl block">{distance}</span></li>
                <li className="text-sm font-barlowCondensed uppercase text-specialBlue tracking-wider leading-7">Est. travel time<span className="font-bellefair text-white tracking-normal text-2xl block">{travel}</span></li>
              </ul>
          </div>
      </div>
    </section>
  )
}

export default Destination