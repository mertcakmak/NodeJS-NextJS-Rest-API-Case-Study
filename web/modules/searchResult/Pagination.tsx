import { IResultListPagination } from '@lib/types'
import React from 'react'
import { useStore } from '@lib/store'

const Pagination = ({
  data,
  total,
}: {
  data: IResultListPagination
  total?: number
}): JSX.Element => {
  const { setPage } = useStore()
  const onClickHandler = (val: any) => {
    setPage(val)
  }
  return (
    <div className=" my-5 p-3 flex justify-between items-center">
      <button
        onClick={() => {
          onClickHandler(data.prevPage)
        }}
        className={` bg-gray-200 hover:bg-gray-300 text-sm p-2 rounded ${
          data.prevPage === data.currentPage && 'hidden'
        } `}
      >
        Prev({data.prevPage})
      </button>
      <div className=" text-sm opacity-50">
        {total} records - {data.currentPage}/{data.pageCount} pages
      </div>
      <button
        onClick={() => {
          onClickHandler(data.nextPage)
        }}
        className={` bg-gray-200 hover:bg-gray-300 text-sm p-2 rounded ${
          data.nextPage === data.currentPage && 'hidden'
        } `}
      >
        Next({data.nextPage})
      </button>
    </div>
  )
}

export default Pagination
