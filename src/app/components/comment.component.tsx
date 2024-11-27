import React from 'react'
import { comment } from '../Interfaces';


export default function CommentForPost({comments}:{comments:comment[]}) {
  return (
    <div className=''>
         <p className="text-center"> COMMENTS </p>
      {comments.map((comment:comment) => {
        return (
          <div key={comment.id}  className="flex justify-center items-center ">
            <div className=" grid grid-cols-12  gap-4 md:w-[80%] mt-3 p-3 md:p-0" >

           

<div className="md:flex items-center gap-x-2 col-span-4 md:col-span-3">
        <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt="img"/>
        
        <div>
            <h1 className="text-[10px] md:text-[14px] font-semibold text-gray-700 capitalize dark:text-white">{comment.name.split(' ').slice(0,3).join(' ')}</h1>

            <p className="text-[8px] md:text-sm text-gray-500 dark:text-gray-400">{comment.email}</p>
        </div>
    </div>
                <div className="col-span-8 md:col-span-9  text-sm flex justify-center items-center">

            <p className="text-center ">{comment.body}</p>
                </div>

            </div>
          </div>
        );
      })}
    </div>
  )
}
