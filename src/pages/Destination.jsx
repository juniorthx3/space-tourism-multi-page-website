import imageMars from '../assets/destination/image-moon.png'

const Destination = () => {
  return (
    <section className="destination bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop">
      <div className="h-full flex flex-col items-center justify-center md:flex-row md:justify-evenly" style={{width:"min(100% - 4rem, 80em)", marginInline:"auto"}}>
          <div className="mt-28 flex flex-col items-center justify-evenly md:flex-row md:mx-20">
              <div className='mt-20 md:mt-32 md:w-1/2'>
                <img src={imageMars} alt="" />
              </div>
              <div className='mx-auto text-center md:text-left'>
                 
                  <p> 
                    
                  </p>
                  <hr />
              </div>
          </div>
       </div>
    </section>
  )
}

export default Destination