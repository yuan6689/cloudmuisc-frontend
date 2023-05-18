module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-pxtorem': {
      rootValue: 100, // 根字体大小
      propList: ['*'], // 所有属性都转换
      selectorBlackList: [], // 不进行转换的选择器
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
