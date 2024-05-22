import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    role: null,
    error: null,
    base: 'http://192.168.1.69:5000/Usuarios/'
  }),
  getters: {},
  actions: {
    async login(email, password) {
      try {
        const url = `${this.base}login`
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        })

        if (!res.ok) {
          throw new Error('Failed to login')
        }

        const response = await res.json()

        if (response.rol) {
          this.role = response.rol
          return true
        } else {
          throw new Error('Invalid response')
        }
      } catch (error) {
        console.error('Login request error:', error)
        this.error = 'Login failed'
        return false
      }
    },
    logout() {
      this.role = null
    }
  }
})
