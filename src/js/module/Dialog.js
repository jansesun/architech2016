define('module/Dialog', function(require) {
	'use strict';
	var $ = require('jquery'), Dialog;
	/**
	 * @constructor 示例对话框
	 * @param {String|Element} id  对话框id或者DOM对象
	 * @param {Object} config 配置参数
	 * @example
	 * 		requirejs(['module/Dialog'], function(Dialog) {
	 * 			var dialog = new Dialog('id');
	 * 			dialog.show();
	 * 			dialog.hide();
	 * 		});
	 */
	Dialog = function(id, config) {
		var Self = this;
		if($.type(id) === 'string') {
			Self._body = $('#' + id);
		} else {
			Self._body = $(id);
		}
		config = config || {};
		$.extend(Self, config);
		Self.init();
	};
	Dialog.prototype = {
		/**
		 * 初始化
		 */
		init: function() {
			console.log('init');
		},
		/**
		 * 展示对话框
		 * @example
		 * 		requirejs(['module/Dialog'], function(Dialog) {
		 * 			var dialog = new Dialog('id');
		 * 			dialog.show();
		 * 		});
		 */
		show: function() {
			console.log('show');
		},
		/**
		 * 隐藏对话框
		 * @example
		 * 		requirejs(['module/Dialog'], function(Dialog) {
		 * 			var dialog = new Dialog('id');
		 * 			dialog.hide();
		 * 		});
		 */
		hide: function() {
			console.log('hide');
		}
	};
	return Dialog;
});
