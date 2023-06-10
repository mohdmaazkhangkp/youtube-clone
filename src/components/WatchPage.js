import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import ReactPlayer from 'react-player/youtube';
import { Link, useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import VideoCard from './VideoCard';
import { closeMenu } from '../utils/appSlice';
import Comment from './Comment';
import {  convertDate, convertToKAndM } from '../utils/helper';

const WatchPage = () => {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState();
  const [channelDetail, setChannelDetail] = useState();
  const [comments, setComments] = useState();
  const [suggestedVideos, setSuggestedVideos] = useState();
  useEffect(()=>{
    setShowMore(false);
    dispatch(closeMenu());
    const fetchData = async()=>{
      const data =await fetchFromAPI(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`);
      setVideoDetail(data.items[0]);
    
      
      const { channelId } = data.items[0].snippet;
      const channelData = await fetchFromAPI(`channels?id=${channelId}&part=snippet%2Cstatistics`);
      setChannelDetail(channelData.items[0]);
      
       
      const videos = await fetchFromAPI(`search?part=snippet%2Cid&type=video&relatedToVideoId=${id}`);
      setSuggestedVideos(videos.items);
     const commentsData = await fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`);
      setComments(commentsData.items);
    }
    fetchData();
    
  }, [id])
  if (!videoDetail || !suggestedVideos || !comments || !channelDetail) return null;
  const {snippet, statistics} = videoDetail;
  const {publishedAt} = snippet;
  return (
    <div className='flex gap-5 py-3 ml-10 mr-1 '>
      <div className='flex-[3]'>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" height="65vh"/>
      <h3 className='text-lg font-semibold my-2'>{snippet.title}</h3>
      <div className='flex justify-between '>
        <div className='flex gap-2 items-center'>
            <Link to={"/channel/" + snippet.channelId}><img className='w-10 h-10 rounded-full' alt='' src={channelDetail.snippet.thumbnails.medium.url} /></Link>
          <div className='flex flex-col'>
              <Link to={"/channel/" + snippet.channelId}><h4 className='font-semibold'>{snippet.channelTitle}</h4></Link>
              <h4 className='text-sm opacity-95'>{convertToKAndM(channelDetail.statistics.subscriberCount)} subscribers</h4>
            </div>
          </div>
        <div className='flex gap-3 font-medium'>
            
            <h4>{convertToKAndM(statistics.viewCount)} views</h4>
        <h4>{statistics.likeCount} likes</h4>
            <h4>{convertDate(publishedAt)}</h4>
        </div>
      </div>

      {/* description */}
        <div onClick={()=>!showMore && setShowMore(true)} className={`bg-gray-100 px-3 py-3 rounded-lg my-3 ${!showMore && "cursor-pointer"}`}>
          <p className={`${!showMore ? "line-clamp-3" : "line-clamp-none "}`}>{snippet.description}</p>
          <p className={`font-semibold text-right ${showMore && "hidden"}`}>Show More</p>
        </div>

        {/* comments */}
      <div>
        <h4 className='text-lg'>Comments</h4>
        <div className='px-3 flex flex-col gap-4 mt-3'>
          {comments.map((comment)=><Comment info={comment}/>)}
        </div>
      </div>
      </div>
      <div className='flex-1 flex flex-col gap-3'>
        {suggestedVideos.map((video) => <VideoCard key={video.id.videoId} info={video} fromWatch ="true"/>)}
      </div>
    </div>
  )
}

export default WatchPage