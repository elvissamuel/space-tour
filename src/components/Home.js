import React, { useContext, useEffect } from 'react'
import data from '../data.json'
import bgMobile from '../assets/home/background-home-desktop.jpg'
import Nav from './Nav'
import { SpaceContext } from './SpaceContext'


const Home = () => {
  const {setHome} = useContext(SpaceContext)

  useEffect(()=>{
    const underline = ()=>{
        setHome(true)
    }
    const cleanup = () => {
        setHome(false);
      };
    
      underline();
    
      return cleanup;
   
}, [])
  return (
    <div className=" bg-bgMobile md:bg-bgTab lg:bg-bgDesktop h-screen bg-cover bg-center bg-no-repeat ">
        <Nav />
        <div className='text-center text-slate-300 px-8 mt-16 md:px-24 lg:flex xl:pl-56 lg:gap-24 lg:items-center lg:mt-44'>
            <div className='lg:basis-1/2 lg:max-w-[490px] lg:text-left'>
              <span className='font-barlow tracking-wide lg:text-lg'>SO, YOU WANT TO TRAVEL TO</span>
              <span className='block font-bellefair text-[5rem] md:text-[6rem] lg:text-[8rem] lg:my-8 py-10 tracking-widest font-extrabold'>SPACE</span>
              <p className='font-barlow text-base lg:text-lg text-slate-400 tracking-wider'>Lets face it: If you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we will give you a truly out of this world experience. </p>
            </div>

            <div className='bg-white h-[170px] w-[170px] md:h-[220px] md:w-[220px] lg:w-[280px] lg:h-[280px] rounded-[50%] mx-auto mt-16 flex justify-center items-center'>
                <p className='text-sky-900 md:text-2xl'>EXPLORE</p>
            </div>
        </div>
       {/* <img src={data.destinations[0].images.png} alt="" /> */}

    </div>
  )
}

export default Home