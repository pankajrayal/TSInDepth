//types
//type inference
// var myString = 'A String';
// var myNumber = 1;
// var myBoolean = true;

// var example = {
//     name:'Example',
//     id:5,
//     collection:['a','b','c']
// }

// var unknown;
// unknown = 'A String';

//--------------------------------------

//Type Annotations
var myString: string = 'A String';
var myNumber: number = 1;
var myBoolean: boolean = true;

var example: {
    name: string,
    id: number,
    collection: string[];
} = {
        name: 'Example',
        id: 5,
        collection: ['a', 'b', 'c']
    }

var unknown: any;
unknown = 'A string';

//----------------------------------------
//Modules, Classes and Interfaces
module Shapes{
    export interface IPoint{
        getDist():number;
    }

    export class Point implements IPoint{
        constructor(public x: number, public y:number){

        }
        getDist(){
            return Math.sqrt(this.x * this.x + this.y*this.y);
        }
        static origin = new Point(0,0);
    }
}

var point = new Shapes.Point(50, 43);
var dist = point.getDist();
console.log(dist);

module Animals{
    export class Animal{
        constructor(public animalName){ }
        move(){
            return this.animalName + ' the animal moves.';
        }
    }

    export class Snake extends Animal{
        constructor(animalName){
            super(animalName);
        }

        move(){
            return this.animalName + ' the snake slithers';
        }
    }

    export class Cat extends Animal{
        constructor(animalName){
            super(animalName);
        }

        moveBy(){
            return this.animalName + ' the cat cannot be bothered to move.';
        }
    }
}

var slippy = new Animals.Snake('Slippy');
alert(slippy.move());
