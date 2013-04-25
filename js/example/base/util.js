define(function (require, exports) {

    // 81271 -> $ 81,271
    exports.formatNumber = function (number, unit) {
        amount = (number + '').split('').reverse();

        var output = '';
        for (var i = 0; i <= amount.length - 1; i++) {
            output = amount[i] + output;
            if ((i + 1) % 3 == 0 && (amount.length - 1) !== i) {
                output = ',' + output;
            }
        }
        return unit + ' ' + output;
    }

    // form valid rule
    exports.validRule = function (field, ruleName, ruleValue) {
        switch (ruleName) {
            case 'required':
                return field.val().length > 0;
            case 'minlength':
                return field.val().length >= ruleValue;
            case 'maxlength':
                return  field.val().length <= ruleValue;
        }
    }

});