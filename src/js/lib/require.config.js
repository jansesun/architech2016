requirejs.config({
	// 默认从当前路径加载模块
	baseUrl: '../js/lib',
	// 如果模块id前缀为module,util或page，分别从对应的路径加载模块
	paths: {
		jquery: 'jquery.min',
		module: '../module',
		util: '../util',
		page: '../page'
	}
});