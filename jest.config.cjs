module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  moduleFileExtensions: ["js", "vue"],
  moduleNameMapper: {
    "^@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
  },
};
