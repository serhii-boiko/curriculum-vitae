'use strict';

const webpackConfigs = require('./config/webpack');
const defaultConfig = 'development';

module.exports = (configName) => {
  const requestedConfig = configName || defaultConfig;
  if (webpackConfigs[requestedConfig] !== undefined) {
    console.log(`Selected config: ${requestedConfig}`);
    return webpackConfigs[requestedConfig];
  }

  console.warn(
    `Provided environment "${configName}" was not found.
     Please use one of the following ones:
     ${Object.keys(webpackConfigs).join(' ')}`
  );
  return webpackConfigs[defaultConfig];
};

