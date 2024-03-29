import React from 'react'

function Loader() {
  return (
    <div className="flex justify-center items-center text-indigo-800">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loader