module.exports ={
	entry:"./src/index.js",
	output:{
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'josn-loader'
			}
		],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	}
};