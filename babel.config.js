module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            external: "./src/04_external",
          },
        },
      ],
    ],
  };
};
