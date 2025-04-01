import js from '@eslint/js'
import pluginVue, { rules } from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    //不再强制要求组件名
    rules:{
      'vue/multi-word-component-name':0,
    }
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
]
