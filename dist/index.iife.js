(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}(function () { 'use strict';

	var x = function x() {
	  return "loaded community-js at ".concat(Date.now());
	};

	console.log(x());

}));
