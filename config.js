'use strict';
/*
// RELATIVE PATH
'./test/custom/script-pre.js'

// RELATIVE PATH FROM `source`
'test/custom/script-pre.js'

// ALL FILES IN PATH
'./test/js/*.js'

// ALL FILES IN PATH RECURSIVELY
'./test/js/** /*.js' // WITH NO SPACE

// ABSOLUTE PATH
'/Users/me/Sites/compressor/test/custom/script-post.js'
*/

/* ATAU BISA MENENTUKAN LANGSUNG SEPERTI DI BAWAH */

module.exports = {
	css: [
		"css/css01.css",
		"css/css02.css",
		"css/css03.css",
		"css/css04.css",
		"css/css05.css",
		"css/css06.css",
		"css/css07.css",
		"css/css08.css",
		"css/css09.css",
		"css/css10.css",
		"css/css11.css",
		"css/material.css",
		"css/mobirise-icons.css",
		"css/tether.min.css",
		"css/bootstrap.min.css",
		"css/style03.css",
		"css/style01.css",
		"css/style02.css",
		"css/mbr-additional.css"
	],
	js: [
		"js/jquery.min.js",
		"js/tether.min.js",
		"js/bootstrap.min.js",
		"js/smooth-scroll.js",
		"js/script.min.js",
		"js/jquery.touch-swipe.min.js",
		"js/typed.min.js",
		"js/jquery.countdown.min.js",
		"js/script.js",
		"js/script2.js",
		"js/formoid.min.js"
	],
	source: __dirname + "/",
	dest: {
		path: __dirname + "/",
		css: "all.css",
		js: "all.js"
	},
	jscompress : 2, // 1=uglify, 2=packer
	watch : 1 // 1=recompile when changes, 0=compile only
}