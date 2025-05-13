'use client'
import React, { useActionState, useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { createComment } from '@/actions/create-comments'
import {  Loader2 } from 'lucide-react'


type NewCommentFormProps = {
    postId:string,
    parentId?:string
    startOpen?:boolean
}
const NewCommentForm : React.FC<NewCommentFormProps> = ({postId, parentId, startOpen}) => {
    const[open, setOpen] = useState(startOpen)
    const [formState, action, isPending] = useActionState(createComment.bind(null, {postId, parentId}), {errors:{}})
  return (
    <div>
        <Button size={'sm'} variant='link' className='text-gray-300 cursor-pointer' onClick={()=>setOpen(!open)}>Reply</Button>
        {
            open && (
<form action={action} className='space-y-2'>
            <Textarea
            name='content'
            className='bg-zinc-800 h-20 border-none rounded-xl'
            placeholder='Write a comment...'
            />
            {formState.errors.content && <p className='text-red-600 text-sm'>{formState.errors.content}</p>}
            {formState.errors.formError && <div className='bg-red-500 rounded-xl p-2 border border-red-600 text-sm'>{formState.errors.formError}</div>}
            <Button className='text-gray-300 cursor-pointer'  disabled={isPending} size={'sm'} variant='link'>
                 {
                isPending ? (<><Loader2/> Please wait</>) : "Save"
            }
            </Button>
           
            
        </form>
            )
        }
        
    </div>
  )
}

export default NewCommentForm