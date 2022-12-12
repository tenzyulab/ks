const commitlintrc = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['chore', 'feat', 'fix']],
  },
}

export const VITE_REACT = {
  '.commitlintrc.json': JSON.stringify(commitlintrc, null, 2),
  '.eslintignore': `
node_modules/
dist/
pnpm-lock.yaml

`,
  '.eslintrc.json': JSON.stringify(
    {
      root: true,
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
        'import/resolver': {
          node: {
            paths: ['src'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
      env: {
        browser: true,
        amd: true,
        node: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended', // Make sure this is always the last element in the array.
      ],
      plugins: ['simple-import-sort', 'prettier'],
      rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/accessible-emoji': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
      },
    },
    null,
    2
  ),
  '.gitignore': `
# Logs
logs
*.log
pnpm-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Plugins
.history
      
`,
  '.prettierignore': `
node_modules/
dist/
pnpm-lock.yaml
     
`,
  '.prettierrc.json': JSON.stringify(
    {
      semi: false,
      singleQuote: true,
      printWidth: 80,
      tabWidth: 2,
    },
    null,
    2
  ),
  'index.html': `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

`,
  'package.json': JSON.stringify(
    {
      name: '',
      version: '0.0.0',
      private: true,
      type: 'module',
      scripts: {
        build: 'rimraf dist && tsc && vite build',
        dev: 'vite',
        preinstall: 'npx only-allow pnpm',
        prepare: 'husky install',
        preview: 'vite preview',
      },
      'lint-staged': {
        '*': 'prettier --write --cache --ignore-unknown',
        '*.{ts,tsx}': 'eslint --fix',
        'package.json': 'sort-package-json',
      },
      dependencies: {
        react: '^18.2.0',
        'react-dom': '^18.2.0',
        'react-router-dom': '^6.4.5',
      },
      devDependencies: {
        '@commitlint/cli': '^17.3.0',
        '@commitlint/config-conventional': '^17.3.0',
        '@tenzyu/tsconfig': '^0.1.4',
        '@types/react': '^18.0.26',
        '@types/react-dom': '^18.0.9',
        '@typescript-eslint/eslint-plugin': '^5.46.0',
        '@typescript-eslint/parser': '^5.46.0',
        '@vitejs/plugin-react': '^3.0.0',
        eslint: '^8.29.0',
        'eslint-config-prettier': '^8.5.0',
        'eslint-plugin-import': '^2.26.0',
        'eslint-plugin-jsx-a11y': '^6.6.1',
        'eslint-plugin-prettier': '^4.2.1',
        'eslint-plugin-react': '^7.31.11',
        'eslint-plugin-simple-import-sort': '^8.0.0',
        husky: '^8.0.2',
        'lint-staged': '^13.1.0',
        prettier: '^2.8.1',
        rimraf: '^3.0.2',
        'sort-package-json': '^2.1.0',
        typescript: '^4.9.4',
        vite: '^4.0.0',
      },
    },
    null,
    2
  ),
  'tsconfig.json': JSON.stringify(
    {
      extends: '@tenzyu/tsconfig/base.json',
      compilerOptions: {
        target: 'esnext',
        useDefineForClassFields: true,
        lib: ['dom', 'dom.iterable', 'esnext'],
        esModuleInterop: false,
        allowSyntheticDefaultImports: true,
        module: 'esnext',
        moduleResolution: 'node',
        resolveJsonModule: true,
        isolatedModules: true,
        noEmit: true,
        jsx: 'react-jsx',
      },
      include: ['src'],
      references: [{ path: './tsconfig.vite.json' }],
    },
    null,
    2
  ),
  'tsconfig.vite.json': JSON.stringify(
    {
      compilerOptions: {
        composite: true,
        module: 'esnext',
        moduleResolution: 'node',
        allowSyntheticDefaultImports: true,
      },
      include: ['vite.config.ts'],
    },
    null,
    2
  ),
  'vite.config.ts': `
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

`,
}
