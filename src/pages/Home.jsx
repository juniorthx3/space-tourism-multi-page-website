import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <section className="home">
       <div className="h-full flex flex-col items-center justify-center md:flex-row md:justify-evenly" style={{width:"min(100% - 4rem, 80em)", marginInline:"auto"}}>
          <div className="flex flex-col items-center justify-evenly md:flex-row">
              <div className='space-y-4 mx-auto text-center md:text-left'>
                  <h2 className='text-xl uppercase tracking-widest'>So, you want to travel to</h2>
                  <h1 className='text-8xl  uppercase font-light tracking-widest  md:text-9xl'>Space</h1>
                  <p className='text-sm leading-6 pt-2 tracking-wide md:w-11/12 lg:w-1/2 text-center md:text-justify'>
                      Let's face it; if you want to go to space, you might as well genuinely go to 
                      outer space and not hover kind of on the edge of it. Well sit back, and relax 
                      because we'll give you a truly out of this world experience!
                  </p>
              </div>
              <div className='w-1/2 mt-24'>
                <Link to="/destination"><button className='bg-white text-black tracking-widest text-lg font-medium uppercase rounded-full w-44 h-44'>Explore</button></Link>
              </div>
          </div>
       </div>
    </section>
  )
}

export default Home