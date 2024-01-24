import React, {useEffect, useState} from 'react'
import { YOUTUBE_API } from './utils/constants';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const isMenuOpen = useSelector(state => state.app.isMenuOpen);

  const screenSize = {
    maxWidth: isMenuOpen ? '83vw' : '100vw',
    maxHeight: '85vh',
    position: 'relative',
  }

  const gridColumns = isMenuOpen ? 'md:grid-cols-3 lg:grid-cols-3 px-2' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10';

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  }, []);

  const getVideos = async () => {
    try{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
    }
    catch (error) {
      console.log("Error is :", error);
    }
  }
  
  return(
    <div className={`grid grid-cols-1 ${gridColumns} gap-4 px-4 pl-2 pr-4 overflow-y-auto hide-scroller`} style={screenSize}>
      {videos.map((video) => (
        <Link to={"/watch?v="+video.id} key={video.id}>
          <VideoCard className="bg-gray-200" cardData={video} /> 
        </Link>  
      ))}
    </div>
  );
};  
  


export default VideoContainer