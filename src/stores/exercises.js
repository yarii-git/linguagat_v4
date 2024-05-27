import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

export const useExercisesStore = defineStore('exercises', {
  state: () => ({
    base: 'http://192.168.1.99:5000/ejercicios/',
    subjects: []
  }),
  getters: {},
  actions: {
    async obtainExercises(cod_nivel) {
      try {
        const url = `${this.base}generar-ejercicios-leccion`
        const res = await axios.post(url, { cod_nivel })

        if (res.status !== 200) {
          throw new Error('Failed to obtain exercises')
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
        this.error = 'Obtain exercises failed'
        return false
      }
    },
    async createExercise(cod_leccion, pregunta, respuesta) {
      try {
        const url = `${this.base}crear-ejercicio`
        const cod_ejercicio = '1'
        // Access the auth store and get the user role
        const authStore = useAuthStore()

        // Ensure the authStore is initialized properly and the role is set
        if (!authStore.role) {
          await authStore.getUser(authStore.email)
        }

        const rol = authStore.role.toString()

        // Verify if the role is retrieved correctly
        if (!rol) {
          throw new Error('User role is not available')
        }
        const res = await axios.post(url, { cod_ejercicio, cod_leccion, pregunta, respuesta, rol })

        if (res.status !== 200) {
          throw new Error('Failed inserting exercise')
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
