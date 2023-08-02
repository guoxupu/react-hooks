module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, //解决taliwind与antd颜色冲突问题
  },
};
