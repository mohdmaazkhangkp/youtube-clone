import React from 'react'
import { Link } from 'react-router-dom'
import {  convertDate } from '../utils/helper';

const VideoCard = ({info, fromWatch}) => {
  const {snippet, id} = info;

  //Logic to get number of hours/days/week/month/year ago
  const { publishedAt } = snippet;
  
  
  return (
    //<div className={`${fromWatch ? "w-80" : "w-[22rem]"}  cursor-pointer`}>
    <div className={`cursor-pointer  w-[calc((100%-2rem)/3)] ${fromWatch && "w-full"}`}>
      <Link to={"/video/"+id.videoId}><img className='rounded-lg w-full h-48' alt='thumbnail' src={snippet.thumbnails.medium.url}/></Link>
      <div className='px-2'>
      <Link to={"/video/"+id.videoId}><h3 className='font-semibold mt-1 line-clamp-2'>{snippet.title}</h3></Link>
      <ul>
      <Link to={"/channel/"+snippet.channelId}>
            <li>{snippet.channelTitle}</li></Link>
          <li>{convertDate(publishedAt)}</li>

        {/* <li>{views} views</li> */}
      </ul>
      </div>
    </div>
  )
}

export default VideoCard