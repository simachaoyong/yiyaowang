const path=require('path');


function resolve(dir){
    return path.join(__dirname,dir);
  }
  

module.exports={
    devServer: {
      host: '0.0.0.0',
        proxy: {
          '/api': {
            target: 'http://gateway.fangkuaiyi.com/',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
              }
          },
          '/db': {
            target: 'http://localhost:3000/',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/db': ''
              }
          }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': []
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: false
      }
    },
    chainWebpack(config){
      config.resolve.alias
      .set('components',resolve('./src/components'))
      .set('com',resolve('./src/components/commons'))
      .set('node',resolve('./node_modules'))
    }
}
