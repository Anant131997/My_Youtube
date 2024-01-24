import React from 'react'
import Button from './Button'
import { useSelector } from 'react-redux';


const ButtonContainer = () => {

  const isMenuOpen = useSelector(state => state.app.isMenuOpen);

  const screenSize = {
    maxWidth: isMenuOpen ? '170vh' : '200vh',
    transition: 'max-width 0.3s ease',
    position: 'relative'
  }

  // const buttonStyle = {
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  // }
  
// "World", "Animal", "Anime", "Romantic", "Sad", "Comedy"
  const buttonName = ["All", "News", "Sports", "Songs", "Culture", "Events", "Gaming", "Art", "Spiritual", "Fashion", "Trending", "Politics"];
  return (
    <div className='flex justify-center scrollContainer'>
    <div className='flex m-4 mb-1 relative overflow-x-auto thin-scroller' style={screenSize}>
    
      {buttonName.map((name, index)=>(
          <Button key={index} name={name} />
      ))}
     
    </div>
    {/* <div className='absolute justify-end flex mt-20 mr-5 bg-gray-200 h-8 w-8 cursor-pointer rounded-full' style={buttonStyle}>
      <button>
        <img alt='Next' src='https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png' />
      </button>
    </div> */}
    </div>
  )
}

export default ButtonContainer