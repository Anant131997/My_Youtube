import React from 'react'
import Comments from './CommentList'
import commentsData from './utils/commentsData'

const CommentsContainer = () => {
  return (
    <div className='mt-8 ml-20'>
        <div>
            <h1 className='text-xl font-Roboto font-bold my-4'>Comments :</h1>
        </div>
        <div>
            <Comments comments={commentsData}/>
        </div>
    </div>
  )
}

export default CommentsContainer