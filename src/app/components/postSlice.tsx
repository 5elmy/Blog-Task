import React from 'react'
import { post } from '../Interfaces'


export default function PostSlice({post}:{post:post}) {
  return (
    <div>
            <div className="p-8 text-center pt-12 ">
        <h1 className="leading-[50px] font-bold">POST DETAILS</h1>
        <h2 className="leading-[40px]">{post.title}</h2>
        <p className="leading-[40px]">{post.body}</p>
      </div>
    </div>
  )
}
