const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: "development",
    // 入口，可以是字符串/数组/对象。
    entry:{
        path:path.resolve(__dirname,'./src/main.js')
    },
    output:{
        // 出口，通常是一个对象，里面至少包含path和filename
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    resolve:{ extensions:['.js','.css','.vue']  },
    module:{
        rules:[
            { test:/\.css$/,loader:'style-loader!css-loader'},
            { test:/\.vue$/,loader:'vue-loader'},
            { test:/\.(jpg|png|jpeg|gif)$/,loader:'url-loader'},
            { test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,loader: 'file-loader'}
        ] 
    },
    plugins: [
        new VueLoaderPlugin()
    ]   
}