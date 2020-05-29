module.exports = {
  "configureWebpack": {
    "devServer": {
      "proxy": "https://localhost:44345"
    },
    "devtool": "source-map",
    "output": {}
  },
  "transpileDependencies": [
    "vuetify"
  ]
}