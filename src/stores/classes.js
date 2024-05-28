import { defineStore } from 'pinia'
import axios from 'axios'

export const useClassesStore = defineStore('auth', {
  state: () => ({
    base: 'http://127.0.0.1:5000/clases/',
    classes: []
  }),
  getters: {},
  actions: {
    async obtainClasses() {
      try {
        const url = `${this.base}login`
        const res = await axios.get(url, { email, password })

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
    }
  }
})
