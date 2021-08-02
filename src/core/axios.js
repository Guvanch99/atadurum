import axios from 'axios'

export const DB = axios.create({
  baseURL: 'http://localhost:9696',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  },
  responseEncoding: 'utf8',
  method: 'get',
  timeout: 10000000
})
