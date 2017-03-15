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
//# sourceMappingURL=app.js.map