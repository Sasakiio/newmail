const path = require('path');

function resolve(dir){
    return path.join(__dirname,dir)  //path.join(__dirname)设置绝对路径
}

module.exports = {

    devServer: {
        // open: true, //自动打开浏览器
        // port: 8080, //热替换，外网访问
        // host: 'localhost',

        //配置跨域代理
        proxy: {
            // 用‘/api’开头，代理所有请求到目标服务器
            '/': {
            target: 'http://152.136.185.210:7878/api/m5', // 接口域名
            //ws: true,
            changeOrigin: false, // 是否启用跨域
            // pathRewrite: {
            //     '^/api': ''
            //   }
            }
        },
    },

    publicPath: './',
    // assetsDir: 'public',
    // outputDir:"dist",
   configureWebpack: {
       resolve: {
           alias: {
            'assets': '@/assets',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views',
            'common': '@/common'

           }
       },
   },
//    chainWebpack: config => {
//        //路径配置
//        config.plugin("html").tap(args => {
//            args[0].minify = false;
//            return args;
//        });
//    },
}