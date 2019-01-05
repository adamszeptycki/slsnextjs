const dev = process.env.NODE_ENV !== 'production'

const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
      ? require('next/constants')
      : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {
        assetPrefix: 'production',
    };
  }

  // ✅ Put the require call here.
const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const withImages = require('next-images')

return withCSS(
    withImages(
    withTypescript({
    assetPrefix: dev ? undefined : 'production',
    webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())
        return config
   }
 }))
)
};