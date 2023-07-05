import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import data from '../data.json'
import { SpaceContext } from './SpaceContext'
// import moon from '../assets/destination/image-moon.png'

const Destination = () => {
    const [moon, setMoon] = useState(true)
    const [mars, setMars] = useState(false)
    const [europa, setEuropa] = useState(false)
    const [titan, setTitan] = useState(false)
    const {setDestination} = useContext(SpaceContext);

    useEffect(()=>{
        const underline = ()=>{
            setDestination(true)
        }
        const cleanup = () => {
            setDestination(false);
          };
        
          underline();
        
          return cleanup;
       
    }, [])

  return (
    <div className='bg-bgDestMobile md:bg-bgDestTab lg:bg-bgDestDesktop bg-no-repeat bg-cover bg-center h-full lg:h-screen pb-5'>
        <Nav />

        <div className='text-center md:px-12'>
            <div className='text-center my-4 font-barlow md:text-left lg:text-2xl'>
                <span className='mr-4 text-slate-400'>01</span>
                <span>PICK YOUR DESTINATION</span>
            </div>

                <div className='lg:flex lg:justify-center lg:gap-16 lg:items-center'>
                    <div className='mb-4'>
                        <img className='w-[200px] md:w-[270px] lg:w-[350px] animate-spin-slow h-[200px] md:h-[270px] lg:h-[350px] mx-auto' src={moon ? data.destinations[0].images.png : mars ? data.destinations[1].images.png : europa ? data.destinations[2].images.png : titan && data.destinations[3].images.png} alt="" />
                    </div>
                    
                                
                    
                    <div className='lg:basis-1/2 lg:text-left lg:max-w-[490px]'>
                        <div className='font-barlow mb-6'>
                            <ul className='flex justify-center lg:justify-start lg:px-12 gap-6 my-10'>
                                <li className={`cursor-pointer ${moon && 'border-b'}`} onClick={()=>{setMars(false); setMoon(true); setEuropa(false); setTitan(false)}}>MOON</li>
                                <li className= {`cursor-pointer ${mars && 'border-b'}`}  onClick={()=>{setMars(true); setMoon(false); setEuropa(false); setTitan(false)}}>MARS</li>
                                <li className={`cursor-pointer ${europa && 'border-b'}`}  onClick={()=>{setMars(false); setMoon(false); setEuropa(true); setTitan(false)}}>EUROPA</li>
                                <li className={`cursor-pointer ${titan && 'border-b'}`}  onClick={()=>{setMars(false); setMoon(false); setEuropa(false); setTitan(true)}}>TITAN</li>
                            </ul>
                        </div>
                        <h2 className='text-6xl lg:text-[5rem] font-bellefair md:px-12 uppercase my-3'>{moon ? data.destinations[0].name : mars ? data.destinations[1].name : europa ? data.destinations[2].name : titan && data.destinations[3].name }</h2>
                        <span className='block px-4 md:px-12 mb-8  text-lg font-barlow text-slate-300'>{moon ? data.destinations[0].description : mars ? data.destinations[1].description : europa ? data.destinations[2].description : titan && data.destinations[3].description }</span>
                        <div className='w-full h-[1px] lg:mx-12  bg-slate-600'></div>
                        <div className='mt-4 flex flex-col gap-4 font-barlow md:flex-row md:justify-center md:py-6 md:gap-16 lg:justify-start lg:px-12'>
                            <div className=''>
                                <p className='text-slate-400'>AVG. DISTANCE</p>
                                <span className='text-4xl text-slate-200'>{moon ? data.destinations[0].distance : mars ? data.destinations[1].distance : europa ? data.destinations[2].distance : titan && data.destinations[3].distance}</span>
                            </div>
                            <div>
                                <p className='text-slate-400'>EST. TRAVEL TIME</p>
                                <span className='text-4xl text-slate-200'>{moon ? data.destinations[0].travel : mars ? data.destinations[1].travel : europa ? data.destinations[2].travel : titan && data.destinations[3].travel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>

    </div>
  )
}

export default Destination