module.exports = {
  presets: [
    ['@babel/preset-env', {targets: { estmodules: true}}],
    ['@babel/preset-react', { runtime: "automatic" }]
  ],
};