#architech2016
> 基于requirejs模块管理与gulp构建工具的架构
###文件目录与命名
```
//文件命名规范 文件名语义化刻意用camel命名或者用.分隔
//js  --js脚本目录
	//lib 基础库目录 文件名全部小写用.分隔
		//jquery.min.js jquery库
		//require.js 异步加载模块(开源)
		//require.config.js requirejs配置，基本路径，别名
		//zepto.js zepto库 移动端UI库
	//module 模块目录 文件名首字母大写camel
		//Dialog.js 对话框模块示例
	//page 页面目录 文件名首字母小写camel
	//util 工具目录 文件名首字母小写camel
//page --静态页面目录
	//index.html 示例主页面
	//index.jade 示例主页面jade源文件
//gulpfile.js gulp配置文件
```
###requirejs使用简单介绍
requirejs 基本配置
```
require.config({
	// 基本路径，线上最好配置为cdn绝对路径
	baseUrl: '../js/lib',
	// 模块路径映射
	paths: {
		jquery: 'jquery.min', // 单个文件映射 jquery => js/lib/jquery,min.js
		module: '../module', // 目录映射 module/Dialog => js/module/Dialog.js
		util: '../util',
		page: '../page'
	}
});
```
requirejs 异步依赖模块定义
```
define(function(require, export, module) {
	'use strict';
	// 异步加载依赖
	var $ = require('jquery'), Dialog;
	Dialog = function(id, config) {
		var Self = this;
		config = config || {};
		if($.type(id) === 'string') {
			Self._body = $('#' + id);
		} else {
			Self._body = $(id);
		}
		$.extend(Self, config);
		Self.init();
	};
	Dialog.prototype = {
		init: function() {
			console.log('init');
		}
	};
	// 返回模块接口
	return Dialog;
});
```
requirejs 同步模块定义
```
define(['jquery'], function($) {
	'use strict';
	var Dialog;
	Dialog = function(id, config) {
		var Self = this;
		config = config || {};
		if($.type(id) === 'string') {
			Self._body = $('#' + id);
		} else {
			Self._body = $(id);
		}
		$.extend(Self, config);
		Self.init();
	};
	Dialog.prototype = {
		init: function() {
			console.log('init');
		}
	};
	// 返回模块接口
	return Dialog;
});
```
requirejs调用模块
```
requirejs(['module/Dialog'], function(Dialog) {
	var dialog = new Dialog('id');
});
```
更多requirejs的说明详见[requirejs官方文档](http://requirejs.org)
###gulp的使用与任务配置
gulp的全局安装
```
$ npm install --global gulp
```
gulp本身不提供js压缩合并等功能，需要使用gulp的相关插件。
1. css压缩 gulp-cssnano
2. js压缩  gulp-uglify
3. js合并  gulp-concat
4. 重命名  gulp-rename
gulp插件的安装
```
$ npm install gulp-cssnano gulp-uglify gulp-concat gulp-rename --save-dev
```
gulp的任务配置
在项目根目录中创建gulpfile,js
```
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');
// gulp默认任务 调用gulp执行
gulp.task('default', function() {
	// gulp
});
gulp.task('build-require', function() {
	gulp.src(['js/lib/require.js', 'js/lib/require.config.js'])
	.pipe(concat('require.js'))
	.pipe(uglify())
	.pipe(rename({
		suffix: '_160105'
	}))
	.pipe(gulp.dest('js/lib'));
});
```
启动gulp任务
```
$ gulp build-require
```
更多gulp的详细说明请参看[gulp官方文档](http://www.gulpjs.com.cn/)
