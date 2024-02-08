module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:vue/vue3-recommended',
    '@nuxt',
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'vue',
    'nuxt'
  ],
  'rules': {
    semi: 0,
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'no-multi-spaces': 'error',
    'vue/multi-word-component-names': 'off',
  }
}
