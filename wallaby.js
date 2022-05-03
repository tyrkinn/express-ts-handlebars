module.exports = function () {
  return {
    files: ['src/**/*.ts'],
    tests: ['src/__test__/**/*.test.ts'],
    env: {
      type: 'node',
    },
  };
};
