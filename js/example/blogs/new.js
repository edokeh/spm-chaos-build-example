define(function (require) {
    var _ = require('_');
    var $ = require('$');
    var util = require('../base/util.js');
    var validConfig = require('./valid-config');

    $('#form').submit(function () {
        var validResult = !_.any(validConfig, function (rules, name) {
            var field = $('[name="' + name + '"]');
            return _.any(rules, function (ruleValue, ruleName) {
                return !util.validRule(field, ruleName, ruleValue);
            });
        });

        if (!validResult) {
            alert('表单有错误哦！');
            return false;
        }
    });
});