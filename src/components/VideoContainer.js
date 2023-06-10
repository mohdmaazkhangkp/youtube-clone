import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux"
import { fetchFromAPI } from '../utils/fetchFromAPI';


const VideoContainer = () => {
  const selectedCategory = useSelector((store)=> store.app.selectedCategory);
  const [videos, setVideos] = useState();
  
  useEffect(() => {
    getVideos();
  }, [selectedCategory]);

const getVideos = async()=>{
  const data = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  setVideos(data.items);
}
console.log(videos);
  if(!videos) return null;
  return (
    <div className='flex flex-wrap gap-4 mt-9 '>
      {videos.map((video)=> <VideoCard key={video.id.videoId} info={video}/>)}
     
    </div>
  )
}

export default VideoContainer