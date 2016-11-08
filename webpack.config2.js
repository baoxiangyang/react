module.exports = {
	// 入口：要进行处理的实例（js）
	entry: {//入口文件,webpack会从入口文件出开始查找依赖递归进行打包
		index: './src/pages/index/index.js',
		list: './src/pages/list/index.js',
		common: [
			'./src/base/base.js',
			'./src/base/base.css'
		]
	},
	// 出口：输出配置
	output: {
	    // 输出到哪个目录
	    path: './asset/dev/',
	    // 静态资源的引用路径
	    publicpath: '/asset/dev/',
	    // 实例最终输出的名字
	    filename: '[name].js'
	},
	resolve: {
		alias: { //文件别名
			plugins: __dirname +'/src/plugins',
			myDialog: __dirname+'/src/plugins/dialog/dialog.js'
		},
		//查找module的话从这里开始查找
    //root: '/pomy/github/flux-example/src', //绝对路径
		//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
		extensions: ['', '.js', '.json', '.scss']
	},
	//文件处理方式
	module: {
      loaders: [{
          test: /\.css$/,
          loader: 'style!css'
      }, {
          test: /\.js$/,
          loader: 'babel'
      }]
  },
  plugins: [
  	//css 才用引用的方式
    new ExtractTextPlugin('styles.css')
	],
	//require一些其他的类库或者API，而又不想让这些类库的源码被构建到运行时文件中
	externals: {
    "jquery": "jQuery"
 	}
};