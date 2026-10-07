/**
 * @type {import('eslint').Linter.Config[]}
 * Root Layer 0 ESLint Configuration: Applies to ALL apps and packages.
 */
export const baseConfig = [
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'eqeqeq': ['error', 'always'],
      'prefer-const': 'error',
      'no-var': 'error',
      // Enforce UPPER_CASE for exported constant identifiers
      'id-match': [
        'warn',
        '^[a-zA-Z0-9_$]+$',
        { properties: false, onlyDeclarations: true }
      ]
    }
  }
];

export default baseConfig;
