/*map start*/
seajs.production = true;
if(seajs.production){
    seajs.config({
        map : [
	[
		"base/handlebars.js",
		"base/handlebars-c876a0d8f3bf3ac4bb5697bfd90eaa80.js"
	],
	[
		"blogs/new.js",
		"blogs/new-279fcebdcda1b4f1bd2d88a90e7dc80c.js"
	],
	[
		"users/index.js",
		"users/index-dba9ddc268d9f63694cb918f835df8bc.js"
	]
]
    });
}
/*map end*/
seajs.config({
    alias : {
        '$' : 'gallery/jquery/1.9.1/jquery',
        '_' : 'gallery/underscore/1.4.4/underscore',
        'handlebars' : 'gallery/handlebars/1.0.2/handlebars',
        'example-handlebars' : '/js/example/base/handlebars'
    },
    preload : [
        seajs.production ? 'seajs/seajs-style/1.0.0/seajs-style' : 'seajs/seajs-text/1.0.0/seajs-text-debug'
    ]
});