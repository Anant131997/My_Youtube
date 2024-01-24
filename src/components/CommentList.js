import React from 'react'
import Comment from './Comment';

const CommentsList = ({comments}) => {
  return comments.map((comment, index) => (
  <div>
    <Comment key={index} data={comment} />
    <div className='ml-6 border border-l-black pl-2'>
      <CommentsList comments={comment.replies} />
    </div>
  </div>
  ))
}

export default CommentsList;