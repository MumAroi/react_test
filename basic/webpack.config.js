var webpack = require("webpack");
var path = require('path');


module.exports = {
    entry: "./src/App.js",
    output: {
        // path: '/Users/admin/Git/react-flux-architecture-es6/dist/',
        filename: "build/bundle.js",
            sourceMapFilename: "build/bundle.map"
        // publicPath: '/'
    },
     devtool:"#source-map",
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};

// module.exports = {
//     entry: {
//         app: ".src/App.js"
//     },
//     output:{
//         filename:"build/bundle.js",
//             sourcMapFilename:"build/bundle.map"
//     },
//          

//     module:{
//         loaders:[
//             {
//                 test:/\.jsx?$/,  
//                 exclude:/(node_modules|bower_components)/,
//                 loader:'babel-loader',
//                 query:{
//                     presets:['react','es2015']
//                 }
//             }
//         ]
//     }
// }