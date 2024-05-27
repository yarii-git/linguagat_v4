import { defineStore } from 'pinia'
import axios from 'axios'

export const useLevelsStore = defineStore('levels', {
  state: () => ({
    base: 'http://192.168.1.99:5000/niveles/',
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
    },
    async createLevel(cod_nivel, nombre) {
      try {
        const url = `${this.base}crear-nivel`
        const res = await axios.post(url, { cod_nivel, nombre })

        if (res.status !== 200) {
          throw new Error('Failed inserting level')
        }

        return true
      } catch (error) {
        console.error('Request error:', error)
        this.error = 'Isert failed'
        return false
      }
    }
  }
})
