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
          component: '../pages/about/about',
        },
        {
          path: '/weddingdress',
          component: '../pages/weddingdress/weddingdress'
        },
        {
          path: '/photograph',
          component: '../pages/photograph/photograph'
        },
        {
          path: '/weddingdress/weddingdressInfoList',
          component: '../pages/weddingdress/weddingdress_info/weddingdressInfoList'
        },
        {
          path: '/photograph/photographInfoList',
          component: '../pages/photograph/photographInfoList/photographInfoList'
        },
        {
          path: 'query/nanjin/nanjingInfoList',
          component: '../pages/nanjin/nanjingInfoList/nanjingInfoList'
        },
        {
          path: 'query/yichang/yichangInfoList',
          component: '../pages/yichang/yichangInfoList/yichangInfoList'
        },
        {
          path: '/danxiang',
          component: '../pages/siyi/siyi'
        },
        {
          path: '/qingdian',
          component: '../pages/cehua/cehua'
        }
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
