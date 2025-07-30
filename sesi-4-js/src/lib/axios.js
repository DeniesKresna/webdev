import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = token
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

api.interceptors.response.use((response)=>{
    return response.data
}, (error)=>{
    return Promise.reject(error.response.data)
})
