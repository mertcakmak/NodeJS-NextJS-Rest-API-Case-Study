import { IResultItem } from '@lib/types'
import React from 'react'

const ResultListItem = ({ item }: { item: IResultItem }): JSX.Element => {
  return (
    <div className="rounded overflow-hidden shadow-lg border p-2">
      <img
        className="w-full border rounded"
        src={item.Poster}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{item.Title}</div>
      </div>
      <div className="px-6  pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{item.Type}
        </span>
      </div>
    </div>
  )
}

export default ResultListItem
