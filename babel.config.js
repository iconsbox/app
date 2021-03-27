module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
      },
    ],
    [
      'transform-imports',
      {
        '@iconbox\/?(((\\w*)?\/?)*)': {
          transform: '@iconbox/${1}/${member}/component',
        },
      },
    ],
  ],
};
