import antfu from '@antfu/eslint-config'
import reactFunc from 'eslint-plugin-react-func'

export default antfu({
  typescript: true,
  jsx: true,
  formatters: true,
  react: true,

  // Add ignores configuration
  ignores: [
    // Config files
    'next.config.*',
    'tailwind.config.*',
    'postcss.config.*',
    '.prettierrc',
    '.eslintrc.*',
    'prettier.config.*',

    // Lock files
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',

    // Build and runtime files
    'dist',
    '.next',
    'node_modules',
    'public',
    'coverage',

    // Special files
    '*.min.*',
    '*.d.ts',
    '*.md',
    '**/*.md',
    'README.md',
    'docs/**/*.md',
  ],

  rules: {
    'react/prop-types': 'off',
    'max-lines': ['error', { max: 500 }],
    'style/max-len': ['error', {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
  },

  // Add Tailwind CSS specific configuration
  tailwindcss: {
    config: 'tailwind.config.ts',
    callees: ['tv'], // Support for tailwind-variants
    classRegex: '^(?:tw|class|className)$', // class name patterns to check
  },
},
// Add custom plugin config
{
  plugins: {
    'react-func': reactFunc,
  },
  rules: {
    'react-func/max-lines-per-function': [
      'error',
      {
        max: 80,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
  },
})
