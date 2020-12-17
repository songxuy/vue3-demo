module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/components/*.vue'], //我只做components目录下vue文件测试
};
