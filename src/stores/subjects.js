import { defineStore } from 'pinia'
import axios from 'axios'

export const useSubjectsStore = defineStore('subjects', {
  state: () => ({
    base: 'http://127.0.0.1:5000/temas/',
    subjects: []
  }),
  getters: {},
  actions: {
    async obtainSubjects(cod_nivel) {
      try {
        const url = `${this.base}consultar-temas-nivel`
        console.log()
        const res = await axios.post(url, { cod_nivel })

        if (res.status !== 200) {
          throw new Error('Failed to obtain subjects')
        }

        const response = res.data

        if (Array.isArray(response)) {
          this.subjects = response
          return true
        } else {
          throw new Error('Invalid response')
        }
      } catch (error) {
        console.error('Request error:', error)
        this.error = 'Obtain subjects failed'
        return false
      }
    },
    async createSubject(cod_tema, nombre) {
      try {
        const url = `${this.base}crear-tema`
        const cod_nivel = '1'
        const res = await axios.post(url, { cod_tema, cod_nivel, nombre })

        if (res.status !== 200) {
          throw new Error('Failed inserting subject')
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
