import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://192.168.1.2:3000/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})
