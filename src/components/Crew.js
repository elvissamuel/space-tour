import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import data from '../data.json'
import { SpaceContext } from './SpaceContext'

const Crew = () => {
    const [p1, setP1] = useState(true)
    const [p2, setP2] = useState(false)
    const [p3, setP3] = useState(false)
    const [p4, setP4] = useState(false)
    const {setCrew} = useContext(SpaceContext)

    useEffect(()=>{
        const underline = ()=>{
            setCrew(true)
        }
        const cleanup = () => {
            setCrew(false);
          };
        
          underline();
        
          return cleanup;
       
    }, [])
  return (
    <div className='bg-bgCrewMobile md:bg-bgCrewTablet lg:bg-bgCrewDesktop bg-no-repeat bg-cover bg-center h-screen overflow-hidden pb-5 md:pb-0'>
        <Nav />

        <div className='text-center '>
            <div className='text-center my-4 font-barlow md:mb-0'>
                <div className='md:text-left md:pl-6 lg:text-2xl'>
                    <span className='mr-4 text-slate-400'>02</span>
                    <span>MEET YOUR CREW</span>
                </div>

                <div className='flex flex-col lg:justify-start items-start lg:gap-12 lg:mt-32 lg:relative lg:max-w-[900px] lg:mx-auto xl:max-w-[1000px]'>
                    <div className='my-8  border-b-slate-600 md:order-3 mx-auto lg:absolute lg:-bottom-32 lg:right-4 xl:-right-20 xl:-bottom-52'>
                        <img className='w-[190px] md:w-[275px] lg:w-[400px] xl:w-[550px] h-[238px] md:h-[380px] lg:h-[600px] xl:h-[700px] mx-auto' src={p1 ? data.crew[0].images.png : p2 ? data.crew[1].images.png : p3 ? data.crew[2].images.png : p4 && data.crew[3].images.png} alt="" />
                    </div>
                    <ul className='flex mx-auto lg:mx-10 justify-center gap-6 mb-6 md:order-2 '>
                        <li onClick={()=> {setP1(true); setP2(false); setP3(false); setP4(false)}} className={`w-[13px] h-[13px]  rounded-[50%] cursor-pointer ${!p1 ?'bg-slate-600' : 'bg-white' }`}></li>
                        <li onClick={()=> {setP1(false); setP2(true); setP3(false); setP4(false)}} className={`w-[13px] h-[13px] cursor-pointer ${p2 ? 'bg-white' : 'bg-slate-600'} rounded-[50%]`}></li>
                        <li onClick={()=> {setP1(false); setP2(false); setP3(true); setP4(false)}} className={`w-[13px] h-[13px] cursor-pointer ${p3 ? 'bg-white' : 'bg-slate-600'} rounded-[50%]`}></li>
                        <li onClick={()=> {setP1(false); setP2(false); setP3(false); setP4(true)}} className={`w-[13px] h-[13px] cursor-pointer ${p4 ? 'bg-white' : 'bg-slate-600'} rounded-[50%]`}></li>
                    </ul>
                    <div className='md:order-1 md:px-10 md:mt-4 lg:basis-1/2 lg:text-left lg:max-w-[500px]'>
                        <p className='text-2xl xl:text-3xl text-slate-300'>{p1 ? data.crew[0].role : p2 ? data.crew[1].role : p3 ? data.crew[2].role : p4 && data.crew[3].role}</p>
                        <p className='text-5xl xl:text-[5rem]'>{p1 ? data.crew[0].name : p2 ? data.crew[1].name : p3 ? data.crew[2].name : p4 && data.crew[3].name}</p>
                        <p className='my-8 px-4 md:px-10 lg:px-0 xl:text-lg'>{p1 ? data.crew[0].bio : p2 ? data.crew[1].bio : p3 ? data.crew[2].bio : p4 && data.crew[3].bio}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Crew