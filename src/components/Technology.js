import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import data from '../data.json'
import { SpaceContext } from './SpaceContext'
const Technology = () => {
  const [tech1, setTech1] = useState(true)
  const [tech2, setTech2] = useState(false)
  const [tech3, setTech3] = useState(false)
  const {setTechnology} = useContext(SpaceContext)

  useEffect(()=>{
    const underline = ()=>{
        setTechnology(true)
    }
    const cleanup = () => {
        setTechnology(false);
      };
    
      underline();
    
      return cleanup;
   
}, [])


  return (
    <div className='bg-bgTechMobile md:bg-bgTechTablet lg:bg-bgTechDesktop bg-center bg-cover bg-no-repeat md:pb-16 h-screen lg:h-screen'>
        <Nav />

        <div className='text-center font-barlow'>
          <div className='my-5 md:text-left md:pl-6 lg:pl-[16%] lg:text-2xl'>
            <span className='mr-4 text-slate-400'>03</span>
            <span>SPACE LAUNCH 101</span>
          </div>

          <div className='xl:flex xl:flex-row-reverse xl:gap-10 xl:items-center '>
            <div className='mt-4 mb-2'>
              <img className='h-[195px] md:h-[300px] xl:h-[530px] xl:w-[500px] w-full' src={tech1 ? (window.innerWidth < 1100 ? data.technology[0].images.landscape : data.technology[0].images.portrait) : tech2 ? (window.innerWidth < 1100 ? data.technology[1].images.landscape : data.technology[1].images.portrait)  : tech3 && (window.innerWidth < 1100 ? data.technology[2].images.landscape : data.technology[2].images.portrait)} alt="" />
            </div>
            <div className='xl:basis-1/2 xl:flex xl:gap-10'>
              <div>
                <ul className='flex xl:flex-col justify-center gap-4 xl:gap-8 my-6 xl:mt-0 md:my-10'>
                  <li onClick={()=>{setTech1(true); setTech2(false); setTech3(false)}} className={`w-[50px] xl:w-[65px] h-[50px] xl:h-[65px] rounded-[50%] flex justify-center items-center border ${tech1 ? 'bg-white text-slate-900' : ''}`}>1</li>
                  <li onClick={()=>{setTech1(false); setTech2(true); setTech3(false)}} className={`w-[50px] xl:w-[65px] h-[50px] xl:h-[65px] rounded-[50%] flex justify-center items-center border ${tech2 ? 'bg-white text-slate-900' : ''}`}>2</li>
                  <li onClick={()=>{setTech1(false); setTech2(false); setTech3(true)}} className={`w-[50px] xl:w-[65px] h-[50px] xl:h-[65px] rounded-[50%] flex justify-center items-center border ${tech3 ? 'bg-white text-slate-900' : ''}`}>3</li>
                </ul>
              </div>
              <div className='xl:text-left xl:max-w-[500px]'>
                <h3 className='uppercase lg:text-xl'>The Terminology...</h3>
                <p className='text-4xl xl:text-[4.5rem] xl:my-12 uppercase my-4'>{tech1 ? data.technology[0].name : tech2 ? data.technology[1].name : tech3 && data.technology[2].name}</p>
                <p className='px-4 md:px-14 xl:px-0 xl:text-xl'>{tech1 ? data.technology[0].description : tech2 ? data.technology[1].description : tech3 && data.technology[2].description}</p>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Technology