import React from 'react'
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
       <div className="relative w-64">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      </div>
  )
}

export default Search