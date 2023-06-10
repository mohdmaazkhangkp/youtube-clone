import React from 'react'

const ChannelCard = ({ info, marginTop }) => {
  const { snippet, statistics } = info;
  return (
    <div className={`flex flex-col items-center ${marginTop && "mt-[-90px]"} mb-7`}>
      <div >
        <img className='h-44 w-44 rounded-full mb-3' alt='' src={snippet.thumbnails.medium.url} />
        </div>
      <h3>{snippet.title}</h3>
      <h4>{statistics.subscriberCount} Subscribers</h4>
    </div>
  )
}

export default ChannelCard