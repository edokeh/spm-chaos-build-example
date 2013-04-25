seajs.config({
    alias : {
        '$' : 'gallery/jquery/1.9.1/jquery',
        '_' : 'gallery/underscore/1.4.4/underscore',
        'handlebars' : 'gallery/handlebars/1.0.1/handlebars',
        'example-handlebars' : '/js/example/base/handlebars'
    },
    plugins : seajs.production ? ['style'] : ['text']
});