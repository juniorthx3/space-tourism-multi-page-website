import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <section className="home">
       <div className="overlay mt-8 mx-36 flex justify-center">
          <div className='w-1/2 px-2 py-3'>
              <h2 className='text-lg uppercase tracking-wider'>So, you want to travel to</h2>
              <h1 className='text-9xl uppercase font-light tracking-wide mt-5'>Space</h1>
              <p className='w-3/4 mt-8 text-sm leading-6 text-center md:text-justify'>
                  Let's face it; if you want to go to space, you might as well genuinely go to 
                  outer space and not hover kind of on the edge of it. Well sit back, and relax 
                  because we'll give you a truly out of this world experience!
              </p>
          </div>
          <div className='w-1/2 ml-10 uppercase flex justify-center items-end'>
              <button className='bg-white text-black tracking-widest text-lg font-medium uppercase rounded-full w-44 h-44 h-' ><Link to="/destination">Explore</Link></button>
          </div>
       </div>
    </section>
  )
}

export default Home