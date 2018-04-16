module.exports = {
	entry: [
		// where webpack looks to start building the bundle.
		// below is a shorthand
		"./dist/index.js"
	],	
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			}
		]
	},
	output: {
		// directory for output file(s) 
		path: __dirname + "/dist",
		publicPath: "/",
		// this is the file that will be included in the html <script>
		// with one entry point, this can be a single name.
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./src",
		compress: true, // gzip compression
		// host: "0.0.0.0", // defaults to localhost, this makes outside accessible
		port: 19999 // specify a port on which to listen
	}
};