import React from 'react'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Link } from 'react-router-dom';
const Comment = ({info}) => {
    const {snippet} = info.snippet.topLevelComment;
    let {likeCount} = snippet;
  return (
    <div className='flex gap-4'>
      <Link to={"/channel/" +snippet.authorChannelId.value}><img className='w-10 h-10 rounded-full' alt='' src={snippet.authorProfileImageUrl} /></Link> 
        <div>
        <Link to={"/channel/" + snippet.authorChannelId.value}> <h3>{snippet.authorDisplayName}</h3></Link>
              <p>{snippet.textOriginal}</p>
             
              <div className='mt-2'><ThumbUpAltOutlinedIcon fontSize="small"/> {likeCount!=0 && likeCount}</div>
        </div>
    </div>
  )
}

export default Comment