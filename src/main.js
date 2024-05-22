import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import createVuetify from './plugins/vuetify'

const app = createApp(App)

app.use(createVuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
