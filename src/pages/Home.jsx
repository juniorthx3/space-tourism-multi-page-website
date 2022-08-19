import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <section className="home">
       <div className="h-full flex flex-col items-center justify-center md:flex-row md:justify-evenly" style={{width:"min(100% - 4rem, 80em)", marginInline:"auto"}}>
          <div className="mt-28 flex flex-col items-center justify-evenly md:flex-row md:mx-20">
              <div className='mx-auto text-center md:text-left'>
                  <h2 className='uppercase font-barlowCondensed not-italic font-normal text-2xl tracking-widest leading-8 text-specialBlue'>
                    So, you want to travel to
                  </h2>
                  <h4 className='font-bellefair not-italic font-normal uppercase  text-9xl tracking-wider' 
                      style={{lineHeight:'172px'}}
                  >
                        Space
                  </h4>
                  <p className='font-barlow not-italic font-normal text-sm text-specialBlue tracking-wider leading-6 text-center md:w-11/12 md:text-justify lg:w-1/2'>
                      Let's face it; if you want to go to space, you might as well genuinely go to 
                      outer space and not hover kind of on the edge of it. Well sit back, and relax 
                      because we'll give you a truly out of this world experience!
                  </p>
              </div>
              <div className='mt-20 md:mt-32 md:w-1/2'>
                <Link to="/destination"><button className='bg-white w-44 h-44 text-bellefair text-black tracking-widest text-lg font-medium uppercase rounded-full  hover:animate-pulse'>Explore</button></Link>
              </div>
          </div>
       </div>
    </section>
  )
}

export default Home