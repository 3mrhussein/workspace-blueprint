import { baseConfig } from './base.js';

/**
 * @type {import('eslint').Linter.Config[]}
 * Layer 1 Library ESLint Configuration:
 * Applied to all domain libraries and backend packages.
 * Mechanically forbids framework/UI dependencies to enforce pure domain separation.
 */
export const libraryConfig = [
  ...baseConfig,
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['next', 'next/*', 'react', 'react-dom', 'react/*'],
              message: 'Domain libraries must remain pure TypeScript with zero framework/UI dependencies.'
            }
          ]
        }
      ]
    }
  }
];

export default libraryConfig;
