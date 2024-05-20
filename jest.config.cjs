module.exports = {
  preset: "jest-expo",
  setupFiles: ["./jest.setup.ts"],
  testEnvironment: "jsdom",
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-native|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-redux|@sentry/.*)",
  ],
  testPathIgnorePatterns: ["/node_modules", ".history"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
