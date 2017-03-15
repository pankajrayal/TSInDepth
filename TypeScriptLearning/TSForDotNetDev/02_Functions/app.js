var System;
(function (System) {
    var String = (function () {
        function String() {
        }
        String.format = function (formatString) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
        };
        return String;
    }());
    System.String = String;
})(System || (System = {}));
System.String.format('My {0}{1} format example', 1, 'st');
//# sourceMappingURL=app.js.map