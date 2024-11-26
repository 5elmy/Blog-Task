import Link from 'next/link'
import React from 'react'

export default function ButtonNavigate({button}:{button:string}) {
  return (
    <div>
       <div className="flex justify-end items-center  absolute top-0  md:top-5 right-6">
        <Link href={"/posts"}>
          <button className="bg-blue-950 text-white px-6 p-3 rounded-md">
           {button}
          </button>
        </Link>
      </div>
    </div>
  )
}
