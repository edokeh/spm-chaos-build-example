define(function (require) {
    var _ = require('_');
    var $ = require('$');
    var util = require('../base/util');
    var template = require('./user.handlebars');
    var Handlebars = require('example-handlebars');
    require('./user.css');

    var users = [
        {name : 'Chaos', account : 2000500},
        {name : 'Edokeh', account : 15520},
        {name : 'Sea', account : 1000000000}
    ];

    users = _.map(users, function (user) {
        user.account = util.formatNumber(user.account, '$');
        return user;
    });

    $('body').append(template(users));
});