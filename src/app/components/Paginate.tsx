import React from 'react'

export default function Paginate({currentPage , handlePageChange ,totalPages }:any) {
  return (
//    <div className='flex justify-center items-center'>
// <div className="w-[90%] flex justify-center items-center mt-6 space-x-2">
 
//   <button
//     className={`${
//       currentPage === 1
//         ? 'text-gray-400 cursor-not-allowed'
//         : 'text-blue-500 hover:text-blue-700'
//     } flex items-center px-3 py-2 border rounded-full`}
//     onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
//     disabled={currentPage === 1}
//   >
//     Previous
//   </button>


//   {currentPage > 2 && (
//     <>
//       <button
//         className="px-4 py-2 rounded-full border text-blue-500 hover:bg-blue-100"
//         onClick={() => handlePageChange(1)}
//       >
//         1
//       </button>
//       {currentPage > 3 && <span className="px-2">...</span>}
//     </>
//   )}

 
//   {Array.from({ length: 3 }, (_, index) => currentPage - 1 + index)
//     .filter((page) => page > 0 && page <= totalPages)
//     .map((page) => (
//       <button
//         key={page}
//         className={`px-4 py-2 rounded-full border ${
//           page === currentPage
//             ? 'bg-blue-500 text-white'
//             : 'text-blue-500 hover:bg-blue-100'
//         }`}
//         onClick={() => handlePageChange(page)}
//       >
//         {page}
//       </button>
//     ))}

 
//   {currentPage < totalPages - 1 && (
//     <>
//       {currentPage < totalPages - 2 && <span className="px-2">...</span>}
//       <button
//         className="px-4 py-2 rounded-full border text-blue-500 hover:bg-blue-100"
//         onClick={() => handlePageChange(totalPages)}
//       >
//         {totalPages}
//       </button>
//     </>
//   )}


//   <button
//     className={`${
//       currentPage === totalPages
//         ? 'text-gray-400 cursor-not-allowed'
//         : 'text-blue-500 hover:text-blue-700'
//     } flex items-center px-3 py-2 border rounded-full`}
//     onClick={() =>
//       currentPage < totalPages && handlePageChange(currentPage + 1)
//     }
//     disabled={currentPage === totalPages}
//   >
//     Next
//   </button>
// </div>

//    </div>

<div className="flex justify-center items-center">
  <div className="w-[90%] flex justify-center items-center mt-6 space-x-2">
    
    <button
      className={`${
        currentPage === 1
          ? 'text-gray-400 cursor-not-allowed'
          : 'text-blue-500 hover:text-blue-700'
      } flex items-center px-3 py-2 border rounded-full`}
      onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>

    {/* Current Page */}
    <button
      className="px-4 py-2 rounded-full border bg-blue-500 text-white"
      disabled
    >
      {currentPage}
    </button>

    <button
      className={`${
        currentPage === totalPages
          ? 'text-gray-400 cursor-not-allowed'
          : 'text-blue-500 hover:text-blue-700'
      } flex items-center px-3 py-2 border rounded-full`}
      onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
</div>

  )
}
