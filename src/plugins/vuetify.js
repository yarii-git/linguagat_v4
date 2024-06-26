import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VBtn } from 'vuetify/components/VBtn'
import '@mdi/font/css/materialdesignicons.css'

const lightTheme = {
  dark: false,
  // colors: {
  //   background: '#FFFFFF',
  //   surface: '#FFF8F8',
  //   primary: '#2C3E50',
  //   secondary: '#2ECC71',
  //   secondaryLight: '#F1C40F',
  //   error: '#E74C3C',
  //   info: '#34495E',
  //   success: '#A2D398',
  //   warning: '#E67E22'
  // }
  colors: {
    background: '#FFFFFF',
    surface: '#FFF8F8',
    primary: '#FAB1DA',
    secondary: '#DEBECD',
    secondaryLight: '#FFECF3',
    error: '#93000A',
    info: '#4B2713',
    success: '#A2D398',
    warning: '#fe7314'
  }
  // colors: {
  //   background: '#FFFFFF',
  //   surface: '#FFFFFF',
  //   primary: '#FCD9E9',
  //   secondary: '#F800C0',
  //   secondaryLight: '#FFF8F8',
  //   error: '#B00020',
  //   info: '#341100',
  //   success: '#77bc1f',
  //   warning: '#fe7314'
  // }
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
    VBtnLight: VBtn,
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
      color: 'primary',
      variant: 'flat',
      rounded: 'xl',
      width: '150'
    },
    VBtnDark: {
      color: 'secondary',
      variant: 'flat',
      rounded: 'xl',
      width: '150'
    },
    TextBtn: {
      color: 'info',
      variant: 'outlined'
    }
  }
})

export default vuetify
