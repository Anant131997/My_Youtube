import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    useEffect(()=>{
        dispatch(closeMenu());
    },[dispatch])
  return (
    <div>
      <div className='ml-20 mt-6'>
        <iframe className='rounded-xl'
          width="930" 
          height="520" 
          src={"https://www.youtube.com/embed/"+searchParams.get('v')} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
        </iframe>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  )
}

export default WatchPage