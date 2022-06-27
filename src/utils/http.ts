// reference: // https://maruzzing.github.io/study/rnative/axios-interceptors%EB%A1%9C-%ED%86%A0%ED%81%B0-%EB%A6%AC%ED%94%84%EB%A0%88%EC%8B%9C-%ED%95%98%EA%B8%B0/

import axios, { AxiosInstance } from 'axios'

const http: AxiosInstance = axios.create({
  baseURL: 'http://54.180.121.148:8080/',
})

export default http
