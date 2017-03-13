//myModules.d.ts

// In a .d.ts file or .ts file that is not a module:
declare module "SomeModule" {
    export function fn(): string;
}

//myOtherModule.ts

/// <reference path="myModules.d.ts" />
import * as m from "SomeModule";

////shapes.ts
//export namespace Shapes {
//    export class Triangle { /* ... */ }
//    export class Square { /* ... */ }
//}

////shapeConsumer.ts

//import * as shapes from "./shapes";
//let t = new shapes.Shapes.Triangle(); // shapes.Shapes?

//revised examples
//shapes.ts
export class Triangle { /* ... */ }
export class Square { /* ... */ }





