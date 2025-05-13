import { fetchCommentsByPostId } from '@/lib/query/comment'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import NewCommentForm from './comment-create-form'


type CommentShowPageProps = {
    postId:string,
    commentId:string
}
const CommentShowPage : React.FC<CommentShowPageProps> = async({postId, commentId}) => {
    const comments = await fetchCommentsByPostId(postId)

    const comment = comments.find((comment) => comment.id === commentId)
    if (!comment) return null

    const replies = comments.filter((comment) => comment.parentId === commentId)
  return (
    <div className='m-4 p-4 border'>
        <div className='flex gap-3'>
            <Avatar>
                <AvatarImage src={comment.user.image || ""}/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='flex1 space-y-2'>
                <h1>{comment?.user?.name}</h1>
                <p>{comment?.content}</p>
                <NewCommentForm postId={postId} parentId={comment.id}/>
            </div>
        </div>
        {
            replies.map((comment) => (
                <CommentShowPage key={comment.id} postId={comment?.postId} commentId={comment?.id} />
            ))
        }
    </div>
  )
}

export default CommentShowPage