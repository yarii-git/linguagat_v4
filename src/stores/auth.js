import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    role: null,
    error: null,
    resStore: null,
    base: 'http://192.168.1.69:5000/usuarios/'
  }),
  getters: {},
  actions: {
    async login(email, password) {
      try {
        const url = `${this.base}login`
        const res = await axios.post(url, { email, password })

        if (res.status !== 200) {
          throw new Error('Failed to login')
        }

        const response = res.data

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
    },
    async createUser(user) {
      try {
        const url = `${this.base}register`
        const res = await axios.post(url, {
          email: user.email,
          password: user.password,
          nombre: user.name,
          apellidos: user.lastname
        })

        const response = res.data

        if (response.message) {
          this.resStore = response.message
          return true
        } else {
          throw new Error('Invalid response')
        }
      } catch (error) {
        console.error('Register request error:', error)
        this.error = 'Register failed'
        return false
      }
    }
  }
})
