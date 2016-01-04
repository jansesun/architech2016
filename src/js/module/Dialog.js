define(function(require, exports, module) {
	'use strict';
	var $ = require('jquery'), Dialog;
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
		init: function() {
			console.log('init');
		},
		show: function() {
			console.log('show');
		},
		hide: function() {
			console.log('hide');
		}
	};
	return Dialog;
});
