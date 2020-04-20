module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./src/assets",
            routes: "./src/routes",
            pages: "./src/pages",
            components: "./src/components",
            config: "./src/config",
            store: "./src/store",
            services: "./src/services",
            style: "./src/style",
          },
        },
      ],
    ],
  };
};
