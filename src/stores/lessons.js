import { defineStore } from 'pinia'
import axios from 'axios'

export const useLessonsStore = defineStore('lessons', {
  state: () => ({
    base: 'http://192.168.1.99:5000/lecciones/',
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
    },
    async createLesson(cod_tema, nombre) {
      try {
        const url = `${this.base}crear-leccion`
        const cod_leccion = '1'
        const res = await axios.post(url, { cod_tema, cod_leccion, nombre })

        if (res.status !== 200) {
          throw new Error('Failed inserting lesson')
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
