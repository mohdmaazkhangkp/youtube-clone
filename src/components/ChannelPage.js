import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard';

const ChannelPage = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState();
  const {id} = useParams();
  useEffect(()=>{
    const fetchData =async ()=>{
      const data = await fetchFromAPI(`channels?id=${id}&part=snippet%2Cstatistics`);
      setChannelDetail(data.items[0]);
      const VideosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid`);
      setVideos(VideosData.items)
    }
    fetchData();
    
  }, [])
console.log(channelDetail);
console.log(videos);
if(!videos) return null;

  return (
    <div className='py-3 pl-10 pr-1'>
        <div className='bg-blue-400 h-44 '></div>
        <ChannelCard info={channelDetail} marginTop="true"/>
      <div className='flex flex-wrap gap-4 mt-9'>
        {videos.map((video) => <VideoCard key={video.id.videoId} info={video} />)}

      </div>
    </div>
  )
}

export default ChannelPage