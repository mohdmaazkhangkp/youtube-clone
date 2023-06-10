import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='py-3 ml-10 mr-1 '>
      <ButtonsList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer