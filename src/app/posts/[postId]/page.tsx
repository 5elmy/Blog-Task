import ButtonNavigate from "@/app/components/ButtonNavigate";
import CommentForPost from "@/app/components/comment.component";
import PostSlice from "@/app/components/postSlice";
import PostDetailsHook from "@/app/hooks/postDetails.hook";
import {  comment, params, post } from "@/app/Interfaces";
import React from "react";

export default async function PostDetails({ params }:params) {
    const{ postId } = await params;
const {post , comments }:{post:post , comments:comment[]} = await PostDetailsHook({postId})
  return (
    <section className=" relative">
            <ButtonNavigate button=" GO TO HOME"/>
         

        {post && comments.length>0 ? <>
        <PostSlice post={post}/>
      <CommentForPost comments={comments} />
        </>  : 
         <div  className='min-h-screen  flex justify-center items-center'>

         <span className="loader"></span>
     </div>
        }
   
    </section>
  );
}

