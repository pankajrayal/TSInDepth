"use strict";
//Calculator.ts
var Calculator = (function () {
    function Calculator() {
        this.current = 0;
        this.memory = 0;
    }
    Calculator.prototype.processDigit = function (digit, currentValue) {
        if (digit >= "0" && digit <= "9") {
            return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
        }
    };
    Calculator.prototype.processOperator = function (operator) {
        if (["+", "-", "*", "/"].indexOf(operator) >= 0) {
            return operator;
        }
    };
    Calculator.prototype.evaluateOperator = function (operator, left, right) {
        switch (this.operator) {
            case "+": return left + right;
            case "-": return left - right;
            case "*": return left * right;
            case "/": return left / right;
        }
    };
    Calculator.prototype.evaluate = function () {
        if (this.operator) {
            this.memory = this.evaluateOperator(this.operator, this.memory, this.current);
        }
        else {
            this.memory = this.current;
        }
        this.current = 0;
    };
    Calculator.prototype.handelChar = function (char) {
        if (char === "=") {
            this.evaluate();
            return;
        }
        else {
            var value_1 = this.processDigit(char, this.current);
            if (value_1 !== undefined) {
                this.current = value_1;
                return;
            }
            else {
                var value_2 = this.processOperator(char);
                if (value_2 !== undefined) {
                    this.evaluate();
                    this.operator = value_2;
                    return;
                }
            }
        }
        throw new Error("Unsupported input: '" + char + "'");
    };
    Calculator.prototype.getResult = function () {
        return this.memory;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
function test(c, input) {
    for (var i_1 = 0; i_1 < input.length; i_1++) {
        c.handelChar(input[i_1]);
    }
    console.log("result of '" + input + "' is '" + c.getResult() + "'");
}
exports.test = test;
