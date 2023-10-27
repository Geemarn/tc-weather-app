module.exports = {
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  moduleNameMapper: {
    axios: 'axios/dist/node/axios.cjs',
  },
};
