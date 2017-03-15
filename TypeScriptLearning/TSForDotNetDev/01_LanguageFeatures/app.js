var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myString = 'A String';
var myNumber = 1;
var myBoolean = true;
var example = {
    name: 'Example',
    id: 5,
    collection: ['a', 'b', 'c']
};
var unknown;
unknown = 'A string';
var Shapes;
(function (Shapes) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.getDist = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        return Point;
    }());
    Point.origin = new Point(0, 0);
    Shapes.Point = Point;
})(Shapes || (Shapes = {}));
var point = new Shapes.Point(50, 43);
var dist = point.getDist();
console.log(dist);
var Animals;
(function (Animals) {
    var Animal = (function () {
        function Animal(animalName) {
            this.animalName = animalName;
        }
        Animal.prototype.move = function () {
            return this.animalName + ' the animal moves.';
        };
        return Animal;
    }());
    Animals.Animal = Animal;
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(animalName) {
            return _super.call(this, animalName) || this;
        }
        Snake.prototype.move = function () {
            return this.animalName + ' the snake slithers';
        };
        return Snake;
    }(Animal));
    Animals.Snake = Snake;
    var Cat = (function (_super) {
        __extends(Cat, _super);
        function Cat(animalName) {
            return _super.call(this, animalName) || this;
        }
        Cat.prototype.moveBy = function () {
            return this.animalName + ' the cat cannot be bothered to move.';
        };
        return Cat;
    }(Animal));
    Animals.Cat = Cat;
})(Animals || (Animals = {}));
var slippy = new Animals.Snake('Slippy');
console.log(slippy.move());
console.log("------------------------");
var Program;
(function (Program) {
    var Utilities;
    (function (Utilities) {
        var Logging;
        (function (Logging) {
            var Console = (function () {
                function Console() {
                }
                Console.prototype.log = function (message) {
                    if (typeof console !== 'undefined') {
                        console.log(message);
                    }
                };
                return Console;
            }());
            Logging.Console = Console;
        })(Logging = Utilities.Logging || (Utilities.Logging = {}));
    })(Utilities = Program.Utilities || (Program.Utilities = {}));
})(Program || (Program = {}));
var logger = new Program.Utilities.Logging.Console();
logger.log('Test Message');
//# sourceMappingURL=app.js.map