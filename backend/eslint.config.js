import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
      },
    },
    rules: {
      // Best practices
      'no-unused-vars': 'warn',
      'no-console': 'off', // Allow console.log in Node.js
      'prefer-const': 'error',
      'no-var': 'error',

      // Code style
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'], // Fixed this rule

      // ES6+
      'no-duplicate-imports': 'error',
    },
  },
  {
    // This replaces .eslintignore
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '*.log',
      '.env',
      'package-lock.json',
      'pnpm-lock.yaml',
    ],
  },
];
