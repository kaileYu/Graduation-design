// ref: https://umijs.org/config/
let path = require('path');

export default {
  history: 'hash',
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/quary/nanjin',
          component: '../pages/nanjin/nanjin',
        },
        {
          path: '/quary/yichang',
          component: '../pages/yichang/yichang',
        },
        {
          path: '/',
          component: './home',
        },
        {
          path: '/about',
          component: '../pages/components/about',
        },
        {
          path: '/weddingdress',
          component: '../pages/weddingdress/weddingdress'
        },
        {
          path: '/photograph',
          component: '../pages/photograph/photograph'
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true,
        },
        dynamicImport: false,
        title: 'biyeshiji',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
};
