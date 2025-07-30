'use client'

import {useState} from 'react'
import {api} from '@/lib/axios'

export default function LoginModal({ isShow, onClose, onSuccessLogin }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = async() =>{
    try {
        const loginData = {
            email, password
        }
        const response = await api.post('/users/login', loginData)
        if(response.success){
            const token = response.data
            localStorage.setItem('token', `Bearer ${token}`)
            onSuccessLogin()
        }
        return true
    } catch (error) {
        alert(error.message)
        return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const loginData = { email, password }
    const res = await submitLogin()

    // Reset & close
    setEmail('')
    setPassword('')

    res && onClose()
  }

  if (!isShow) return null

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}