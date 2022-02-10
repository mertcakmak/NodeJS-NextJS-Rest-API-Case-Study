import React from 'react'
import { IResultListData } from '@lib/types'
import ResultListItem from './ResultListItem'
import Pagination from './Pagination'

const ResultList = ({ data }: { data: IResultListData }): JSX.Element => {
  if (data?.error !== null) {
    return (
      <div className="flex w-full justify-center p-4 text-sm text-gray-400">
        {data?.error}
      </div>
    )
  }

  if (data.total > 0) {
    return (
      <>
        <Pagination data={data.pagination} total={data.total} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
          {data.data.map((_item, _key) => {
            return <ResultListItem key={_key} item={_item} />
          })}
        </div>
        <Pagination data={data.pagination} total={data.total} />
      </>
    )
  }

  return <div>RESULT LIST</div>
}

export default ResultList
