import React from 'react'
import CommentShowPage from './comment-show-page'
import { fetchCommentsByPostId } from '@/lib/query/comment'

type CommentListProps = {
    postId:string
}

const CommentList: React.FC<CommentListProps> = async({postId}) => {
    const comments = await fetchCommentsByPostId(postId)

    const topLevelComments = comments.filter((comment) => comment.parentId === null)


  return (
    <div>
        <h1 className='fomt-bold text-lg'>All Comments</h1>
        {
            topLevelComments.map((comment) => (
                <CommentShowPage key={comment.id} postId={comment?.postId} commentId={comment?.id}/>
            ))
        }
       
    </div>
  )
}

export default CommentList