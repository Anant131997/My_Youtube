import React from 'react'

const Comment = ({data}) => {
    console.log(data);
    const {name, image, comment} = data;
  return (
    <div className='flex gap-4 mt-2 bg-gray-200 p-2 rounded-lg cursor-pointer hover:bg-gray-300 shadow-sm'>
        <div>
            <img className='w-12' alt='user' src={image} />
        </div>
        <div>
            <h2 className='font-Roboto font-semibold'>{name}</h2>
            <p>{comment}</p>
        </div>
    </div>
  )
}

export default Comment