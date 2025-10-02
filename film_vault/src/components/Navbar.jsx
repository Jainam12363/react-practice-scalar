import React from 'react'
import Logo from '../movieLogo.jpg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border border-gray-300/80 space-x-8 items-center pl-3 py-4'>

        <Link to="/"><img className='w-[50px] rounded-full' src={Logo} alt="logo" /></Link>

        <Link to="/" className='text-blue-500 text-3xl font-bold'>Movies</Link>

        <Link to="/watchlist" className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar