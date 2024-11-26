import React from 'react'
import { post } from '../Interfaces'
import Link from 'next/link'

export default function Post({paginatedPosts}:{paginatedPosts:post[] }) {
  return (
    <div>
        <div className="grid grid-cols-12 gap-3">
          {paginatedPosts.map((post:post) => (
            <div
              key={post.id}
              className="bg-blue-950 text-white col-span-12 md:col-span-4 lg:col-span-3 text-center p-4 rounded-md"
            >
              <h2 className="text-lg font-bold text-white">{post.title}</h2>
              <p className="text-sm text-white mt-2 leading-[30px]">
                {post.body.split(' ').slice(0, 20).join(' ')}{' '}
                <Link href={`/posts/${post.id}`} className="text-blue-500">
                  Read More...
                </Link>
              </p>
            </div>
          ))}
        </div>
    </div>
  )
}
