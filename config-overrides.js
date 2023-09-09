module.exports = function override(config, env) {
  const babelLoaderFilter = rule => {
    return rule.loader && rule.loader.includes('babel-loader');
  };

  // get the babel loader
  const babelLoader = config.module.rules.find(babelLoaderFilter);

  if (!babelLoader) {
    // find the array of rules from oneOf property
    const rules = config.module.rules.find(rule => Boolean(rule.oneOf)).oneOf;

    // find the babel loader within these rules
    const babelRule = rules.find(babelLoaderFilter);

    if (babelRule) {
      // Modify it to add the decorators plugin
      babelRule.options.plugins = [
        ...babelRule.options.plugins,
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
      ];
    }
  } else {
    // Modify the top level loader if it exists
    babelLoader.options.plugins = [
      ...babelLoader.options.plugins,
      ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ];
  }

  return config;
};
