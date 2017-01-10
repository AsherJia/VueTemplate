var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: '#source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:10010', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/main.js'
    ],

    output: {
        path: __dirname+'/build',
        filename: 'bundle.js',
        publicPath: 'http://localhost:10010/',
        pathinfo: true
    },

    module: {
        loaders: [
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test:/\.(vue)$/, loaders: ['vue-loader'], exclude: /node_modules/ },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]' } }
        ]
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            'vue': 'vue/dist/vue.js',
            'vuex': 'vuex/dist/vuex.js',
            'vueRouter$': 'vue-router/dist/vue-router.js',
            'vueResource$': 'vue-resource/dist/vue-resource.js'
        }
    },

    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'sass-loader')
        }
    },


    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          title: 'VueTemplate',
          template: 'template.html',
          inject: true
        })
    ]
}
