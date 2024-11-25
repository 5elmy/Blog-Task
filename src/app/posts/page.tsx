
import Link from 'next/link';
import React from 'react'

export default async function Posts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
// console.log({posts})
  return (
    <section >


<div className="grid grid-cols-12 gap-3 p-8">
  {posts.map((post) => (
    <div
      key={post.id}
      className="bg-blue-950 text-white col-span-12 md:col-span-4 lg:col-span-3 text-center p-4 rounded-md"
    >
     
      <h2 className="text-lg font-bold text-white ">{post.title}</h2>
      <p className="text-sm text-white mt-2 leading-[30px]">{post.body.split(' ').slice(0,20).join(' ')}  <Link href={`/posts/${post.id}`} className='text-blue-500'>ReadMore...</Link></p>
    </div>
  ))}
</div>

    </section>
  )
}
