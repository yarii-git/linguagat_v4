import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VBtn } from 'vuetify/components/VBtn'
import '@mdi/font/css/materialdesignicons.css'

const lightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#FCD9E9',
    secondary: '#F800C0',
    secondaryLight: '#eff2f6',
    error: '#B00020',
    info: '#341100',
    success: '#77bc1f',
    warning: '#fe7314'
  }
}

const vuetify = createVuetify({
  blueprint: md3,
  components,
  directives,
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme
    }
  },
  icons: {
    defaultSet: 'mdi'
  },
  aliases: {
    TextBtn: VBtn,
    PrintBtn: VBtn,
    VBtnDark: VBtn,
    VBtnDark: VBtn
  },
  defaults: {
    PrintBtn: {
      color: 'background',
      variant: 'outlined',
      rounded: 'circle',
      height: '130'
    },
    VBtnLight: {
      color: 'secondary',
      variant: 'flat',
      rounded: 'xl'
    },
    VBtnDark: {
      color: 'primary',
      variant: 'flat',
      rounded: 'xl'
    },
    TextBtn: {
      color: 'info',
      variant: 'outlined'
    }
  }
})

export default vuetify
