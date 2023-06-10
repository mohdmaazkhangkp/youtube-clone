import React from 'react'
import { buttons } from '../utils/constants'
import Button from './Button'

const ButtonsList = () => {
 
  return (
    
   
    <div className='flex gap-3 flex-wrap'>
      {buttons.map((button) => <Button key={button} name={button} />)}
    </div>
  )
}

export default ButtonsList