const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants');

module.exports = (phase) => {
  let isClient = '1';
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_SERVER) {
    isClient = '0'
  }

  /* config options for all phases except development here */
  return {
    target: 'serverless',
    env: {
      isClient,
    }
  }
};
