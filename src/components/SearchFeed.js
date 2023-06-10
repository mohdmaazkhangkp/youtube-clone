import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import VideoCard from './VideoCard';

const SearchFeed = () => {
    const { searchTerm } = useParams();
    const [videos, setVideos] = useState();
    useEffect(() => {
            const getVideos = async () => {
                const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            console.log(data.items);
            setVideos(data.items);
        }
        getVideos();
    }, [searchTerm]);

    if(!videos) return null;
    return (
        <div className='flex flex-wrap gap-4  py-3 pl-10 pr-1'>
            {videos.map((video) => <VideoCard key={video.id.videoId} info={video} />)}

        </div>
    )
}

export default SearchFeed