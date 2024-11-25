import Link from "next/link";
import React from "react";

export default async function postDetails({ params }) {
  let { postId } = await params;

  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  // const post = await res.json();
  // console.log({post});

  const [postsResponse, commentsResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`),
  ]);
  const [post, comments] = await Promise.all([
    postsResponse.json(),
    commentsResponse.json(),
  ]);

  console.log({ post, comments });

  return (
    <section className=" relative">
      <div className="flex justify-end items-center  absolute top-5 right-6">
        <Link href={"/posts"}>
          <button className="bg-blue-950 text-white px-6 p-3 rounded-md">
            GO TO HOME
          </button>
        </Link>
      </div>

      <div className="p-8 text-center">
        <h1 className="leading-[50px]">POST DETAILS</h1>
        <h2 className="leading-[40px]">{post.title}</h2>
        <p className="leading-[40px]">{post.body}</p>
      </div>
      <p className="text-center"> COMMENTS </p>
      {comments.map((comment) => {
        return (
          <div key={comment.id}  className="flex justify-center items-center ">
            <div className=" grid grid-cols-12  gap-4 w-[80%] mt-3" >

            {/* <div className="flex gap-3 items-center col-span-3 ">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
                alt=""
              />
              <div>
              <small className="">{comment.name}</small>
              <br/>
               <small>{comment.email}</small> 
              </div>
            </div> */}

<div className="flex items-center gap-x-2 col-span-3">
        <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt=""/>
        
        <div>
            <h1 className="text-[14px] font-semibold text-gray-700 capitalize dark:text-white">{comment.name}</h1>

            <p className="text-sm text-gray-500 dark:text-gray-400">{comment.email}</p>
        </div>
    </div>
                <div className="col-span-9 text-sm flex justify-center items-center">

            <p className="text-center ">{post.body}</p>
                </div>

            </div>
          </div>
        );
      })}
    </section>
  );
}


