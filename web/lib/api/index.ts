import axios, { AxiosInstance } from 'axios'
import { RestApiUrl } from '@lib/constants'

const API = axios.create({
  baseURL: RestApiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  },
}) as AxiosInstance

export default API
