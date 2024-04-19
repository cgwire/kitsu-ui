/** @type { import('@storybook/vue3').Preview } */
import '../global.css'


import { createI18n } from 'vue-i18n'
import { setup } from "@storybook/vue3"

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      hello: 'Hello'
    }
  }
})

setup(app =>{
  app.use(i18n)
})


const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      stylePreview: true
    },
  },
}

export default preview
