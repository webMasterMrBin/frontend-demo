module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  env: {
    development: {
      plugins: ['react-refresh/babel']
    },
  }
}