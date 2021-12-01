module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",

  pluginOptions: {
    i18n: {
      locale: "en-US",
      fallbackLocale: "en-US",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
};
