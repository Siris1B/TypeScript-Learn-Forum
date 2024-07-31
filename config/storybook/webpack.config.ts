import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import path from 'path';

import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config?.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push('.ts', '.tsx');

  if (config && config.module && Array.isArray(config.module.rules)) {
    config.module.rules = config.module.rules
      .filter(
        (rule): rule is RuleSetRule =>
          rule !== undefined &&
          rule !== false &&
          rule !== '' &&
          rule !== 0 &&
          rule !== '...',
      )
      .map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoaders(true));

    config?.plugins?.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__URL__: JSON.stringify(''),
      }),
    );

    return config;
  }
};
