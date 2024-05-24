import { defineStore } from 'pinia'
import axios from 'axios'

export const useLevelsStore = defineStore('levels', {
  state: () => ({
    base: 'http://192.168.1.69:5000/niveles/',
    levels: []
  }),
  getters: {},
  actions: {
    async obtainLevels() {
      try {
        const url = `${this.base}consultar-niveles`
        const res = await axios.get(url)

        if (res.status !== 200) {
          throw new Error('Failed to obtain levels')
        }

        const response = res.data

        if (Array.isArray(response)) {
          this.levels = response
          return true
        } else {
          throw new Error('Invalid response')
        }
      } catch (error) {
        console.error('Request error:', error)
        this.error = 'Obtain levels failed'
        return false
      }
    }
  }
})
