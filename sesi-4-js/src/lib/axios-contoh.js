import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `${token}`
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// ⬇️ Interceptor: ambil hanya response.data
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Bisa log error, redirect, dsb di sini
    return Promise.reject(error.response?.data || error.message)
  }
)