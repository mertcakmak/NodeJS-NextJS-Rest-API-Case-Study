export interface IResultListData {
  total?: number
  pagination?: IResultListPagination
  error?: string | any
  data?: Array<IResultItem>
}

export interface IResultListPagination {
  items?: number
  currentPage?: number | string
  nextPage?: number | string
  prevPage?: number | string
  pageCount?: number
}

export interface IResultItem {
  Title?: string
  Year?: string
  imdbID?: string
  Type?: string
  Poster?: string
}
