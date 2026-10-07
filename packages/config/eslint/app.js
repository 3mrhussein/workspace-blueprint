import { baseConfig } from './base.js';

/**
 * @type {import('eslint').Linter.Config[]}
 * Layer 1 Application ESLint Configuration:
 * Applied to runnable apps (web, admin, mobile).
 */
export const appConfig = [
  ...baseConfig,
  {
    rules: {
      // Application-specific rules
    }
  }
];

export default appConfig;
