import React from 'react'

const VideoCard = ({info}) => {
    //console.log(info);
    const{snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet; 

    return (
    <div className='p-2 m-2 w-64 h-[350px] shadow-lg rounded-lg'>
        <img className="rounded-lg" alt='thumbnails' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{Math.round(statistics.viewCount/1000)}K Views</li>
        </ul>
    </div>
  )
}

export default VideoCard;