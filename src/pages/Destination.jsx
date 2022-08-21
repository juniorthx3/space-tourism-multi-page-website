import { useState } from 'react'
import data from '../data.json'

const Destination = () => {
  const [records] = useState(data.destinations)
  const [indexx, setIndexx] = useState(0)
  const {name, images, description, distance, travel}=records[indexx]

  return (
    <section className="destination bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop">
    <div className='px-5 pt-32 grid grid-cols-1 gap-2 md:grid-cols-2 xl:max-w-7xl xl:mx-auto'>
        <div className='text-center md:text-left'>
          <h2 className="font-barlowCondensed not-italic font-normal tracking-widest leading-10 text-2xl uppercase pb-10 md:pl-28">01<span className="ml-4 font-bold">Pick your destination</span></h2>
          <img src={images.png} alt={name} title={name} className="block mx-auto" />
        </div>
        <div className='pt-20 text-center md:text-left pb-10'>  
          <ul className="flex items-center justify-center md:justify-start mb-10">
                {records.map((menu, index) => (
                  <li key={index} className="mr-5">
                    <button onClick={() => setIndexx(index)} className={`uppercase font-semibold tracking-wider text-gray-200 pb-2 border-b border-transparent ${index === indexx && "border-b border-white"}`}>
                      {menu.name}
                    </button>
                  </li>
                ))}
            </ul>
            <h2 className="font-bellefair not-italic font-normal text-4xl uppercase leading-4 mb-6 md:text-6xl">{name}</h2>
            <p className= "font-barlow not-italic font-normal text-md leading-7 text-specialBlue border-b border-gray-500 pb-10 md:w-2/3">{description}</p>
            <ul className="flex flex-wrap items-center justify-between pt-5 md:w-2/3">
              <li className="text-md font-barlowCondensed uppercase text-specialBlue tracking-wider leading-8">Avg. Distance<span className="font-bellefair tracking-normal text-xl block">{distance}</span></li>
              <li className="text-md font-barlowCondensed uppercase text-specialBlue tracking-wider leading-8">Est. travel time<span className="font-bellefair tracking-normal text-xl block">{travel}</span></li>
            </ul>
        </div>
    </div>
    </section>
  )
}

export default Destination