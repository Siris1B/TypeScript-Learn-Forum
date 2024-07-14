import path from 'path';

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,

  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

  moduleDirectories: ['node_modules'],

  modulePaths: ['<rootDir>src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  rootDir: '../../',

  setupFilesAfterEnv: ['<rootDir>config/jest/setupTest.ts'],

  testEnvironment: 'jsdom',

  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],

  moduleNameMapper: {
    '\\.module\\.scss$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
};

export default config;
