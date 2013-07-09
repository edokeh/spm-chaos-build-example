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