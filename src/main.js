import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import createVuetify from './plugins/vuetify'

const pinia = createPinia()

const app = createApp(App)

app.use(createVuetify)
app.use(pinia.use(piniaPluginPersistedstate))
app.use(router)

app.mount('#app')
