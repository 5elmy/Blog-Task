import ButtonNavigate from "@/app/components/ButtonNavigate";
import CommentForPost from "@/app/components/comment.component";
import PostSlice from "@/app/components/postSlice";
import PostDetailsHook from "@/app/hooks/postDetails.hook";
import {  params } from "@/app/Interfaces";
import React from "react";

export default async function PostDetails({ params }:params) {
    let{ postId } = await params;
let {post , comments }:any = await PostDetailsHook({postId})
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

