import React, { useContext, useState } from 'react'
import logo from '../assets/shared/logo.svg'
import menuBar from '../assets/shared/icon-hamburger.svg'
import { SpaceContext } from './SpaceContext'
import { Link } from 'react-router-dom'

const Nav = () => {
    // const [home, setHome] = useState(false)
    // const [destination, setDestination] = useState(false)
    // const [crew, setCrew] = useState(false)
    // const [technology, setTechnology] = useState(false)
    const {openMenu, setOpenMenu, menuVisible, destination, crew, home, technology} = useContext(SpaceContext)
  return (
    <div>
        <div className='flex justify-between items-center p-6 md:p-0 md:pl-6 relative'>
            <Link to='/'>
                <div>
                    <img className='h-[40px] w-[40px] lg:h-[50px] lg:w-[50px]' src={logo} alt="" />
                </div>
            </Link>
            <div onClick={()=>setOpenMenu(true)} className='md:hidden'>
                <img className='w-24px] h-[21px]' src={menuBar} alt="" />
            </div>
            <div className='font-barlow text-zinc-200  bg-gray-900 md:p-8 lg:px-24 lg:mt-6 lg:bg-opacity-70 text-center hidden md:block'>
                <ul className='flex gap-6 lg:gap-12 h-full my-auto items-center'>
                    <Link to='/'>
                        <li  className={`${home ? 'border-b' : ''} pb-2`}>00 HOME</li>
                    </Link>
                    <Link to='/destination'>
                        <li  className={`pb-2 ${destination && 'border-b'}`}>01 DESTINATION</li>
                    </Link>
                    <Link to='/crew'>
                        <li className={`pb-2 ${crew && 'border-b'}`}>02 CREW</li>
                    </Link>
                    <Link to='/technology'>
                        <li className={`pb-2 ${technology && 'border-b'}`}>03 TECHNOLOGY</li>
                    </Link>
                </ul>
            </div>
            {/* <div className='hidden lg:block absolute left-[19%] top-16 h-[2px] bg-slate-700 lg:w-[35%]'></div> */}
            
        </div>
    </div>
  )
}

export default Nav