import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <section className="homeBackground home">
       <div className="containerHome">
          <div className="hero">
              <div className='mx-auto text-center md:text-left'>
                  <h2 className='heading-2'>
                    So, you want to travel to
                  </h2>
                  <h4 className='heading-1' style={{lineHeight:'172px'}}>Space</h4>
                  <p className='text'>
                      Let's face it; if you want to go to space, you might as well genuinely go to 
                      outer space and not hover kind of on the edge of it. Well sit back, and relax 
                      because we'll give you a truly out of this world experience!
                  </p>
              </div>
              <div className='mt-20 md:mt-32 md:w-1/2'>
                <Link to="/destination"><button className='btn'>Explore</button></Link>
              </div>
          </div>
       </div>
    </section>
  )
}

export default Home