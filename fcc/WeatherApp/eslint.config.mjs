import reactPlugin from 'eslint-plugin-react';
import reactNativePlugin from 'eslint-plugin-react-native';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules', '.expo'], // Ignorar carpetas innecesarias
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // Soporte para JS y TS
    languageOptions: {
      parser: typescriptParser, // Parser para TypeScript
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-native': reactNativePlugin,
    },
    settings: {
      react: {
        version: 'detect', // Detectar automáticamente la versión de React
      },
    },
    rules: {
      'react-native/no-inline-styles': 'off', // Desactiva regla de estilos en línea
      'react-native/no-color-literals': 'off', // Avisa sobre literales de color
    },
  },
];
