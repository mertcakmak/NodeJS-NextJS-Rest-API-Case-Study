import SearchBar from 'modules/searchBar'
import SearchResult from 'modules/searchResult'
import React from 'react'

const Index = (): JSX.Element => {
  return (
    <>
      <SearchBar />
      <SearchResult />
      {/* <div className=" bg-gray-50 border-b shadow-lg w-full ">
        <div className=" container mx-auto p-3">
          <div className="flex justify-center">
            <input
              type="text"
              className=" border p-3 font-extralight text-sm rounded w-3/5"
              placeholder="Search"
            />
            <button className=" bg-slate-600 hover:bg-slate-800 p-3 text-sm rounded border-slate-700 text-white ml-2">
              Search
            </button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Index
