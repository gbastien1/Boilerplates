var webpack = require("webpack");

var config = {
	context: __dirname + '/src',
	entry: './js/client.js',
	output: {
		path: __dirname + '/src/',
		filename: 'client.min.js',
	},
	devServer: {
		inline: true, 
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: [
	    new webpack.optimize.UglifyJsPlugin({minimize: true})
	]

}

module.exports = config;