import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from './utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTION_API } from './utils/constants';
import { cacheResults } from './utils/searchSlice';


const Head = () => {

    const [searchInput, setSearchInput] = useState("");
    const [clearButton, setClearButton] = useState(false);
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [suggestionBox, setSuggestionBox] = useState(false);


    const searchCache = useSelector(store => store.search)

    useEffect(()=>{
        const timer = setTimeout(() =>{
            if(searchCache[searchInput]){ // checking if our searchSlice has already the word which we are searching for.
                setSearchSuggestions(searchCache[searchInput]) // if present debouncing/ Api call will not happen for that word again.
            }else{
                getSuggestions() // If not present in searchSlice then Api Call will be done with debouncing property.
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    },[searchInput]);

    const getSuggestions = async() =>{
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchInput);
        const json = await data.json();
        setSearchSuggestions(json[1]);
        console.log(json[1]);

        dispatch(cacheResults({
            [searchInput] : json[1] // once searched keyword will be stored in cache/ searchSlice and API Call will not happen for that word again.

        }))
        setClearButton(searchInput !== '') // Set clearButton to true if there is some input
    }

    const dispatch = useDispatch();

    const toggleMenuHandler = (()=>{
        dispatch(toggleMenu());
    })

    const clearSearchInput = () => {
        setSearchInput("");
        setClearButton(false);
    }
  return (
    <div className='grid grid-flow-col px-6 p-2'>
        <div className='flex items-center gap-6'>
            <img onClick={() => toggleMenuHandler()} className='h-7 cursor-pointer hover:bg-gray-100 rounded-full' alt='Menu' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" />
            <img className='h-5 cursor-pointer' alt='Logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" />
        </div>
        <div className='flex flex-col'>
            <div className='flex'>
                <input 
                className='h-10 w-[520px] px-4 rounded-l-3xl border border-r-0 border-gray-400 outline-none text-lg shadow-sm' 
                type='text' 
                placeholder='Search'
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                onFocus={() => setSuggestionBox(true)}
                onBlur={() => setSuggestionBox(false)}
                />

                {clearButton && (<img 
                    className={`h-10 w-10 p-2 cursor-pointer border border-l-0 border-gray-400 outline-none ${clearButton ? 'opacity-100 transition-opacity' : 'opacity-0 transition-opacity'}`} 
                    alt='clear' 
                    src='https://cdn.iconscout.com/icon/free/png-256/free-cancel-multiplication-multiply-x-37917.png'
                    onClick={clearSearchInput}
                />)
                }

                <button className='h-10 w-16 rounded-r-3xl bg-transparent flex items-center justify-center border border-gray-400 cursor-pointer hover:bg-slate-200'>
                <img className='h-6' alt='Search' src='https://static-00.iconduck.com/assets.00/search-icon-2048x2048-4r9dtbbw.png' />
                </button>
            </div>
            {suggestionBox && (<div className='absolute z-10 mt-10 py-4 w-[560px] bg-white rounded-2xl shadow-lg border border-gray-200'>
                <ul className='overflow-hidden'>
                    {searchSuggestions.map((suggestion, index) => 
                    <li key={index} className='font-Roboto text-lg my-2 px-8 py-1 shadow-sm hover:bg-slate-200 transition-all duration-300' 
                        style={{ opacity: searchInput ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
                        >
                        <span className='flex gap-4 items-center' onClick={()=>{
                            setSearchInput(suggestion)
                            setSuggestionBox(false)
                            }
                        }>
                            <img 
                                alt='searchIcon'
                                className='h-4'
                                src='https://static-00.iconduck.com/assets.00/search-icon-2048x2048-4r9dtbbw.png'
                            /> 
                            {suggestion}
                        </span>
                    </li>
                    )}
                </ul>
            </div>
            )}
        </div>
        <div className='flex items-center gap-6 justify-end'>
            <img className='h-6 cursor-pointer' alt='Record' src='https://cdn-icons-png.flaticon.com/512/4083/4083832.png' />
            <img className='h-6 cursor-pointer' alt='Notification' src='https://cdn-icons-png.flaticon.com/512/3119/3119338.png' />
            <img className='h-7 cursor-pointer' alt='User' src='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg' />
        </div>
    </div>
  )
}

export default Head