'use client';
import Paginate from '../components/Paginate';
import Post from '../components/Posts.component';
import usePost from '../hooks/post.hook';
export default function Posts() {


let {totalPages , paginatedPosts , handlePageChange  , query  , error ,setQuery , currentPage } = usePost()

  return (
    <section className='p-8'>
        {error && (
          <p className="text-center text-red-500 my-10">
            {error}
          </p>
        )}

        <div className="p-8">
        <input
          type="text"
          placeholder="Search by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {paginatedPosts.length>0? <>
            <Post paginatedPosts={paginatedPosts}/>
             <Paginate
             totalPages={totalPages}
             handlePageChange={handlePageChange}
             currentPage={currentPage}
           />
          </>
     : 
     <div  className='min-h-screen  flex justify-center items-center'>

         <span className="loader"></span>
     </div>
     }
      </div>
      
    </section>
  );
}
