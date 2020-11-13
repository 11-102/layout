module.exports = {
      // 基本路径
      publicPath: "./",
      // 构建时的输出目录
      outputDir: "dist",
      // 放置生成的静态资源目录
      assetsDir: "static",
      // 指定html输出路径
      indexPath: "index.html",
      // 设置语法检查
      lintOnSave: false,
      // 设置是否需要sourceMap
      productionSourceMap: false,
      css: {
          loaderOptions: {
              css: {    // 这里的选项会传递给 css-loader
                        importLoaders: 1,
                    },
                    less: {   // 这里的选项会传递给 postcss-loader
                        importLoaders: 1,
                    }
                }
            },
      // 配置开发环境下的一些服务器配置
      devServer: {
        open: true,
    //     proxy: {
    //       // 配置代理
    //       '/api': {
    //         target: 'http://localhost:8080',
    //         pathRewrite: {
    //           '^/api': ""
    //         }
    //       }
    //     }
      }
    }