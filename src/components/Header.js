import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Menu from '../assets/menu.png'
import User from '../assets/user.png'
import {useDispatch} from 'react-redux';
import { setVideos, toggleMenu } from '../utils/appSlice'
import {Link, useNavigate} from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = ()=>{
    navigate(`/search/${searchQuery}`);
  }
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }
  
  return (

    <div className='grid grid-flow-col mx-5'>
        <div className='flex items-center gap-4 col-span-3 content-center'>
            <img onClick={toggleMenuHandler} className='h-8 cursor-pointer' alt='menu' src={Menu}/>
        <Link to={'/'}> <img className='h-9' alt='logo' src={Logo} /></Link>
        </div>
        <div className='flex col-span-8'>
        <div  className='pl-4 w-[42vw] border border-gray-400 rounded-s-full group focus-within:border-blue-700 py-[0.35rem] flex items-center'>
          <span className='pr-3  items-center hidden group-focus-within:flex'><SearchIcon fontSize="small"/></span>
          <input  onChange={(e)=>setSearchQuery(e.target.value)} placeholder={`Search`} value={searchQuery} className='w-[40vw] border-none outline-none' type='text'/>
          <span onClick={() => setSearchQuery("")} className={`px-1 flex items-center rounded-full cursor-pointer hover:bg-gray-100 ${!searchQuery && "hidden"}`}><CloseIcon /></span>
        </div>
            <button onClick={searchHandler} className='flex items-center bg-gray-100 border border-gray-400 px-4 rounded-e-full hover:bg-gray-200'> <SearchIcon className='text-xl'/> </button>
           
        </div>
        <div className='flex justify-end col-span-1 '>
            <img className='h-8'  alt='user' src={User}/>
  
        </div>
    </div>
  )
}

export default Header