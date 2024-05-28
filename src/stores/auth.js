import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    base: 'http://127.0.0.1:5000/usuarios/',
    email: null,
    role: null,
    error: null,
    resStore: null,
    user: []
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
          this.email = response.email
          console.log(this.email)

          // Get user data
          const userData = await this.getUser()
          if (!userData) {
            throw new Error('Failed to get user')
          }
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
        const res = await axios.post(url, { email: email })

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
    },
    async getUser() {
      try {
        const url = `${this.base}datos-usuario`
        const res = await axios.post(url, { email: this.email })

        if (res.status !== 200) {
          throw new Error('Failed to get user')
        }

        this.user = res.data
        return true
      } catch (error) {
        console.error('Get user request error:', error)
        this.error = 'Get user failed'
        return false
      }
    },
    persist: true
  }
})
