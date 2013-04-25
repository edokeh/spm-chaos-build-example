define(function (require) {
    var Handlebars = require('handlebars');

    Handlebars.registerHelper('stripe', function (index) {
        return index % 2 === 0 ? 'gray' : '';
    });

    return Handlebars;
});