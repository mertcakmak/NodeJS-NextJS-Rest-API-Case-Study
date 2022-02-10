import React, { useRef } from 'react'
import { useStore } from '@lib/store'
import { useClearCache } from '@lib/hooks/useSearch'

const SearchBar = (): JSX.Element => {
  const searchRef: any = useRef()
  const { searchText, setSearchText, setPage } = useStore()
  const clearCache = useClearCache()

  let searchTO = null
  const onChangeHandler = (): void => {
    clearTimeout(searchTO)

    searchTO = setTimeout(() => {
      setSearchText(searchRef.current.value)
      setPage(1)
    }, 300)
  }

  const onClickClearHandler = (): void => {
    clearCache.refetch()
    setSearchText('')
    setPage(1)
    setTimeout(() => {
      searchRef.current.value = ''
    }, 250)
  }
  return (
    <div className=" bg-gray-50 border-b shadow-lg w-full ">
      <div className=" container mx-auto p-3">
        <div className="flex justify-center">
          <input
            type="text"
            onChange={onChangeHandler}
            ref={searchRef}
            className=" border p-3 font-extralight text-sm rounded w-3/5"
            placeholder="Search"
          />
          {searchText && searchText.length >= 3 && (
            <button
              onClick={onClickClearHandler}
              className=" bg-slate-600 hover:bg-slate-800 p-3 text-sm rounded border-slate-700 text-white ml-2"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
