import { defineStore } from 'pinia'
import axios from 'axios'

export const useLessonsStore = defineStore('lessons', {
  state: () => ({
    base: 'http://192.168.1.69:5000/lecciones/',
    lessons: []
  }),
  getters: {},
  actions: {
    async obtainLessons(cod_tema) {
      try {
        const url = `${this.base}consultar-lecciones-tema`

        const res = await axios.post(url, { cod_tema })

        if (res.status !== 200) {
          throw new Error('Failed to obtain lessons')
        }

        const response = res.data

        if (Array.isArray(response)) {
          this.lessons = response
          return true
        } else {
          throw new Error('Invalid response')
        }
      } catch (error) {
        console.error('Request error:', error)
        this.error = 'Obtain lessons failed'
        return false
      }
    }
  }
})
