import React from 'react';

const VideoCard = ({cardData}) => {

    const cardSize = {
      maxWidth: '100%',
      height: 'auto',
      width: '100%',
      transition: 'max-width 0.3s ease',
      position: 'relative'
    }

    const imgSize = {
        maxWidth: '100%',
        height: 'auto',
        width: '100%',
        transition: 'max-width 0.3s ease',
        position: 'relative'
    }

    const {snippet, statistics} = cardData;
    const {viewCount} = statistics;
    const {thumbnails, channelTitle, title, publishedAt} = snippet;
    
    const publishDate = new Date(publishedAt);
    const currentDate = new Date();
    const timeDifference = currentDate - publishDate;
    const secondsDifference = Math.floor(timeDifference/1000); // Converting milliseconds to seconds
    const minutesDifference = Math.floor(secondsDifference/60); // Converting seconds to minutes
    const hoursDifference = Math.floor(minutesDifference/60); // Converting minutes to hours
    const daysDifference = Math.floor(hoursDifference/24); //
  return (
    
    <div className='m-2 rounded-xl cursor-pointer' style={cardSize}>
        <img className='rounded-xl' style={imgSize} alt='thumbnails' src={thumbnails.medium.url} />
        <h1 className='font-Roboto font-medium my-2'>{title}</h1>
        <h3 className='font-Roboto font-normal text-sm text-gray-700'>{channelTitle}</h3>
        <span className='flex text-sm text-gray-700'>
            <p>{viewCount > 1000000 
                ? (viewCount/1000000).toFixed(2) + 'M Views • ' 
                : (viewCount/1000).toFixed(0) + 'k Views • '} 
            </p>
            <p>{hoursDifference > 24
                ?"   "+ daysDifference + 'days ago'
                :"   "+ hoursDifference + 'hours ago'}
            </p>
        </span>
    </div>
  )
}

export default VideoCard