// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const withNativewind = require("nativewind/metro")

// module.exports = getDefaultConfig(__dirname);
module.exports = withNativewind(getDefaultConfig(__dirname))