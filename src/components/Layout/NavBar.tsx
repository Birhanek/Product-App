import React, { useState } from 'react'

import EdgesensorHighIcon from '@mui/icons-material/EdgesensorHigh';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../DataInterface/productInterface';
import { Badge, IconButton, useTheme } from '@mui/material';

const NavBar = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const theme = useTheme()

  return (
    <div className='container sticky top-0 left-0 flex flex-col mx-auto mt-1 bg-white md:mx-auto'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center md:space-y-2' >
      <Link to='/' className='flex items-center justify-start px-1 space-x-2'>
        <EdgesensorHighIcon className='text-blue-900 md:w-5 md:h-5'/>
        <h1 className='py-1 text-2xl font-bold text-left text-black md:text-4xl'> B-Shops</h1>
      </Link>
      <div className='px-4'>
      <input value={search} onClick={()=>handleSearch(e)} className='h-8 px-4 bg-gray-200 rounded outline-none w-60 md:w-80 '/>
      <SearchIcon className='text-gray-400 -ml-14 '/>
      </div>
      <div className='px-4 '>
        <IconButton><Badge badgeContent={0} color="error"><Link to='/favorite'><FavoriteIcon className='text-purple-700 '/></Link></Badge></IconButton>
        <IconButton><Badge badgeContent = {0} color='error'><Link to='/shoppingCart'><ShoppingCartIcon/></Link></Badge></IconButton>
        <IconButton><Link to='/user'><AccountCircleIcon className='text-blue-700 '/></Link></IconButton>
        <IconButton>
                {theme.palette.mode ==='light'?<LightModeIcon className='text-orange-400 '/>:<Brightness1Icon/>}
              </IconButton> 
      </div>
      </div>
      
      <ul className='flex flex-col px-4 space-y-1 rounded-sm md:flex-row md:bg-gray-900 md:justify-center md:items-center md:space-x-4 md:mt-4'>
          {
            navLinks.map((link) => {
              return <li className=' md:mr-8'><NavLink className='pr-2 text-xl text-gray-500 duration-500 hover:text-gray-700 md:text-lime-50 md:hover:text-lime-200 ' to={link.link}>{link.linkName}</NavLink></li>
            })
          }
      </ul>
    </div>
  )
}

export default NavBar