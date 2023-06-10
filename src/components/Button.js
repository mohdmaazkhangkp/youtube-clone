import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  setSelectedCategory } from '../utils/appSlice';

const Button = ({name}) => {
  const dispatch = useDispatch();
  const categoryHandler = (category) => {
    dispatch(setSelectedCategory(category));

  }
  return (
    <button onClick={() => categoryHandler(name)} className={`bg-gray-200 px-3 py-[0.35rem] rounded-lg text-sm focus:bg-black focus:text-white`}>{name}</button>
  )
}

export default Button