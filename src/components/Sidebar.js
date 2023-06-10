import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {  Link, useNavigation } from 'react-router-dom';
import {   setSelectedCategory } from '../utils/appSlice';
import { categories } from '../utils/constants';

const Sidebar = () => {
  const selectedCategory = useSelector((store) => store.app.selectedCategory);
  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);
  const dispatch = useDispatch();
   const categoryHandler = (category)=>{
    dispatch(setSelectedCategory(category));
  }
  if(!isMenuOpen) return null;
  return (
    <div className='h-full   '>
      {categories.map((category)=>{
        return(
          <Link key={category.name} onClick={() => categoryHandler(category.name)} to={"/"}><div className={`flex cursor-pointer gap-5 w-44 px-3 py-3 rounded-full hover:bg-gray-200 ${selectedCategory==category.name && "bg-gray-200 font-semibold"}`}>
            {category.icon}
          <h2>{category.name}</h2>
          
          </div></Link>
        );
      })}
    </div>
  )
}

export default Sidebar