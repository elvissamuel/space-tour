import React, { useContext } from 'react'
import closeIcon from '../assets/shared/icon-close.svg'
import { SpaceContext } from './SpaceContext'
import { Link } from 'react-router-dom';

const MobileNav = () => {
    const {openMenu, setOpenMenu} = useContext(SpaceContext);
    const closeMenu = ()=>{
      setTimeout(() => {
        setOpenMenu(false)
      }, 200)
    }
  return (
    <div className='absolute z-20 right-0 top-0 bg-gradient-to-bl from-slate-950 via-slate-800 to-slate-600 transition duration-1000 h-full w-[254px] pl-10'>
        <div className='float-right mt-6 mr-6' onClick={()=>setOpenMenu(false)}>
            <img src={closeIcon} className='' alt="" />
        </div>
        <ul className='font-barlow flex flex-col gap-6 mt-24'>
            <Link to='/'>
              <li onClick={closeMenu}>00 HOME</li>
            </Link>
            <Link to='/destination'>
              <li onClick={closeMenu}>01 DESTINATION</li>
            </Link>
            <Link to='/crew'>
              <li onClick={closeMenu}>02 CREW</li>
            </Link>
            <Link to='/technology'>
              <li onClick={closeMenu}>03 TECHNOLOGY</li>
            </Link>
        </ul>
    </div>
  )
}

export default MobileNav