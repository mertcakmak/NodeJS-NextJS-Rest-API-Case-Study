import { useQuery, UseQueryResult } from 'react-query'
import API from '@lib/api'
import { useStore } from '@lib/store'

interface IQueryParams {
  keyword?: string
  page?: number
}

export const useSearch = (): UseQueryResult<any, unknown> => {
  const { searchText, page } = useStore()

  const queryParams: IQueryParams = {
    keyword: searchText,
    page,
  }

  const rs = useQuery(
    [`searchResult`, JSON.stringify(queryParams)],
    async () => {
      const response = await API.get(`/api/search`, { params: queryParams })
      return response.data
    },
    {
      enabled: false,
    }
  )
  return rs
}

export const useClearCache = (): UseQueryResult<any, unknown> => {
  const rs = useQuery(
    [`clearSearch`],
    async () => {
      const response = await API.get(`/api/clear`)
      return response.data
    },
    {
      enabled: false,
    }
  )
  return rs
}
