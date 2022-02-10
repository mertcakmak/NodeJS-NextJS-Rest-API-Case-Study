import React, { useEffect } from 'react'
import { useStore } from '@lib/store'
import { useSearch } from '@lib/hooks/useSearch'
import ResultList from './ResultList'

const SearchResult = (): JSX.Element => {
  const { searchText, page } = useStore()
  const searchResult = useSearch()

  useEffect(() => {
    if (searchText.length >= 3) {
      searchResult.refetch()
    }
  }, [searchText, page])

  return (
    <div className=" container mx-auto p-3">
      {searchText.length < 3 ? (
        <div className="flex w-full justify-center p-4 text-sm text-gray-800">
          Please type at least 3 chars
        </div>
      ) : searchResult.isFetching ? (
        <div className="flex w-full justify-center p-4 text-sm text-gray-400">
          ...loading
        </div>
      ) : (
        <div>
          <ResultList data={searchResult.data} />
        </div>
      )}
    </div>
  )
}

export default SearchResult
