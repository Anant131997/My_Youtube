import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
    
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen) return null;

    return (
    <div className='flex flex-col w-56 shadow-lg p-4 overflow-y-auto max-h-[100vh] overflow-x-hidden'>
        <div className='flex pb-2 mb-2 border-b-2'>
            <ul>
                <Link to={'/'}><li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg bg-gray-100'>
                    <img className='w-6' alt='home' src='https://e7.pngegg.com/pngimages/98/702/png-clipart-font-awesome-computer-icons-house-icon-design-house-angle-logo-thumbnail.png' />
                    <span className='font-Roboto'>Home</span>
                </li></Link>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='shorts' src='https://i.pinimg.com/originals/17/d2/18/17d21878c22fe49e7e4752eecaa36541.png' />
                    <span className='font-Roboto'>Shorts</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='subscribe' src='https://static.thenounproject.com/png/4530414-200.png' />
                    <span className='font-Roboto'>Subscriptions</span>
                </li>
            </ul>
        </div>
        <div className='flex pb-2 mb-2 border-b-2'>
            <ul>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <span className='font-Roboto font-semibold'>You</span>
                    <img className='w-4' alt='right' src='https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png' />
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='yourChannel' src='https://w7.pngwing.com/pngs/999/787/png-transparent-tv-illustration-spain-television-channel-android-communication-channel-television-icon-miscellaneous-television-rectangle-thumbnail.png' />
                    <span className='font-Roboto'>Your channel</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='history' src='https://cdn1.iconfinder.com/data/icons/material-core/21/history-512.png' />
                    <span className='font-Roboto'>History</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='yourVideos' src='https://static.thenounproject.com/png/1813969-200.png' />
                    <span className='font-Roboto'>Your Videos</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='watchLater' src='https://cdn.iconscout.com/icon/free/png-256/free-watch-later-1781603-1513853.png?f=webp' />
                    <span className='font-Roboto'>Watch later</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='likedVideos' src='https://cdn-icons-png.flaticon.com/512/1175/1175578.png' />
                    <span className='font-Roboto'>Liked videos</span>
                </li>
            </ul>
        </div>
        <div className='flex pb-2 mb-2 border-b-2'>
            <ul>
                <span className='flex items-center w-48 font-Roboto font-semibold p-2 mb-1'>Explore</span>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='trending' src='https://cdn-icons-png.flaticon.com/512/1946/1946485.png' />
                    <span className='font-Roboto'>Trending</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='shopping' src='https://icons.veryicon.com/png/o/commerce-shopping/merchant-product-icon-library/shopping-32.png' />
                    <span className='font-Roboto'>Shopping</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='music' src='https://p7.hiclipart.com/preview/789/738/406/computer-icons-musical-note-music-download-musical-theatre-musical-note.jpg' />
                    <span className='font-Roboto'>Music</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='movies' src='https://cdn.icon-icons.com/icons2/2632/PNG/512/movies_icon_159164.png' />
                    <span className='font-Roboto'>Movies</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='live' src='https://static-00.iconduck.com/assets.00/live-icon-512x376-swbqg3p5.png' />
                    <span className='font-Roboto'>Live</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='gaming' src='https://dbdzm869oupei.cloudfront.net/img/sticker/preview/15874.png' />
                    <span className='font-Roboto'>Gaming</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='news' src='https://www.iconpacks.net/icons/2/free-news-icon-4301-thumb.png' />
                    <span className='font-Roboto'>News</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='sports' src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-trophy-icon-png-image_5069231.jpg' />
                    <span className='font-Roboto'>Sports</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='learning' src='https://static.thenounproject.com/png/4365546-200.png' />
                    <span className='font-Roboto'>Learning</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='fashionAndBeauty' src='https://cdn-icons-png.flaticon.com/512/1727/1727620.png' />
                    <span className='font-Roboto truncate'>Fashion and beauty</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='podcasts' src='https://cdn.icon-icons.com/icons2/2622/PNG/512/podcast_icon_157488.png' />
                    <span className='font-Roboto'>Podcasts</span>
                </li>
            </ul>
        </div>
        <div className='flex pb-2 mb-2 border-b-2'>
            <ul>
                <span className='flex items-center w-48 font-Roboto font-semibold p-2 mb-1'>More from YouTube</span>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='YouTube Premium' src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' />
                    <span className='font-Roboto'>YouTube Premium</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='YouTube Studio' src='https://downloadr2.apkmirror.com/wp-content/uploads/2021/07/13/60de7b014feee.png' />
                    <span className='font-Roboto'>YouTube Studio</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='YouTube Music' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/2048px-Youtube_Music_icon.svg.png' />
                    <span className='font-Roboto'>YouTube Music</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='YouTube Kids' src='https://play-lh.googleusercontent.com/iMc1P4fc7bMSVvQaztKcoQ5MS1J7OLu0bOkz2kVnXZTYkiJ_k3AluzkvOAntYCthgOXQ=w240-h480-rw' />
                    <span className='font-Roboto'>YouTube Kids</span>
                </li>
            </ul>
        </div>
        <div className='flex pb-2 mb-2 border-b-2'>
            <ul>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-5' alt='Settings' src='https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png' />
                    <span className='font-Roboto'>Settings</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-5' alt='Report history' src='https://images.freeimages.com/fic/images/icons/2770/ios_7_icons/512/flag.png' />
                    <span className='font-Roboto'>Report history</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-6' alt='Help' src='https://static.thenounproject.com/png/568541-200.png' />
                    <span className='font-Roboto'>Help</span>
                </li>
                <li className='flex items-center w-48 gap-4 p-2 cursor-pointer rounded-lg hover:bg-gray-100'>
                    <img className='w-5' alt='Send feedback' src='https://static.thenounproject.com/png/4808951-200.png' />
                    <span className='font-Roboto'>Send feedback</span>
                </li>
            </ul>
        </div>
        <div className='flex flex-col pb-2 mb-2'>
            <span className='font-Roboto font-bold text-gray-800 p-2 cursor-pointer'>About Press Copyright Contact us Creators Advertise Developers</span>
            <span className='font-Roboto font-bold text-gray-800 p-2 cursor-pointer'>Terms Privacy Policy & Safety How YouTube works Test new features</span>
            <span className='font-Roboto font-medium text-gray-800 p-2'>© 2024 Made with 💖 in React by Anant.</span>
        </div>
    </div>
  )
}

export default SideBar