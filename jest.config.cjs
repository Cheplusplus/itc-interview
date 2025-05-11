module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
    // Handle .ts and .js files
    "^.+\\.[tj]s$": "ts-jest",
  },
  moduleFileExtensions: ["js", "vue", "ts"],
  moduleNameMapper: {
    "^@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
  },
};
