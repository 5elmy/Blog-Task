import React from 'react'

export default function Paginate({currentPage , handlePageChange ,totalPages }:{currentPage:number , handlePageChange: (page: number) => void ,totalPages:number }) {
  return (


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
