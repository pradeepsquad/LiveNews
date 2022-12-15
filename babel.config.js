module.exports = function (api) {
  api.cache(true);

  return {
    env: {
      production: {
        plugins: [
          'lodash',
          'transform-remove-console',
        ],
      },
    },
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'app': './src/app',
            'components': './src/components',
            'constants': './src/constants',
            'randomizer': './src/features/randomizer',
            'lib': './src/lib',
            'screens': './src/screens'
          },
        },
      ],
    ],
  };
};
