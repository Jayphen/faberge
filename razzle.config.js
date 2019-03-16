function rewireFileLoader(config) {
  //Exclude .graphql files from the file-loader
  config.module.rules
    .find(conf => conf.loader && conf.loader.includes("file-loader"))
    .exclude.push(/\.(graphql|gql)/);

  return config;
}

module.exports = {
  plugins: [
    {
      name: "typescript",
      options: {
        useBabel: true,
        useEslint: true,
        forkTsChecker: {
          tsconfig: "./tsconfig.json",
          tslint: undefined,
          watch: "./src",
          typeCheck: true,
        },
      },
    },
  ],
  modify: (defaultConfig, { target, dev }, webpack) => {
    const config = Object.assign({}, defaultConfig);

    const graphqlLoader = {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: ["graphql-tag/loader"],
    };

    config.module.rules = [...config.module.rules, graphqlLoader];

    return rewireFileLoader(config);
  },
};
