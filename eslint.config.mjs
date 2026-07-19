import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['*.astro'],
    languageOptions: {
      parser: await import('astro-eslint-parser'),
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
];
