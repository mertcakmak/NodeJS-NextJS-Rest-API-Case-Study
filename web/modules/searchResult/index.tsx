import React from 'react'
import { useStore } from '../../lib/store'

const SearchResult = (): JSX.Element => {
  const { searchText } = useStore()
  return <div className=" container mx-auto p-3">SEARCH TEXT: {searchText}</div>
}

export default SearchResult
