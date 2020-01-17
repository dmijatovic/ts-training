# [Home](../../README.md): Typescript project 1

This is simple project. Use api to pull some data from [jsonplaceholder](https://jsonplaceholder.typicode.com/).

The project fetch posts using axios from <https://jsonplaceholder.typicode.com/todos>

## Building an compiling

See the npm scripts for this. In short to build we use tsc and to build and run with node we use ts-node.

`npm start` will build index.ts and run it. `npm build` will build js files from ts files

## Explained concepts

In the `src` folder you will find a ts file per explained concept. To run a file you can use tsc compiler: `npx ts-node <filename>`

- arrays
- classes
- decorators: to enable decorators set `experimentalDecorators` ON in tscconfig file.
- functions
- interfaces
- objects
- tuples
- variables

### Variable types

Type inference system works in most situations and should be used. But if type is any then we need to define it manually.

```javascript

let apples:number = 5
let text:string = 'this is text'
let hasName:boolean = false

//variable with null type
const nullVal: null = null
const nothing:undefined = undefined

let now:Date = new Date()

// array of strings type
let colors:string[] = ['red','green','blue']
// array of numbers
let myNums:number[] = [1,2,3,4]
// array of bools
let myTrues:boolean[] = [true,false,true]

// Class types
class Car{
  color:string
  mileage: number
}
const car:Car = new Car()

// Object types
let oPoint:{x:number;y:number} = {
  x:10,
  y:20
}

// Variable function type definition/description
const logNumber: (i:number) => void = (i:number) => {
  console.log(i)
}

// when to us use type annotation
// 1) function that returns any type

const json = '{"x":1, "y":2}'
const coord:{x:number;y:number} = JSON.parse(json)
console.log(`Coord ${coord.x}`)

// 2) when variables is declared first and value provided later
const words = ['red','green','blue']
let foundWord:boolean;

// 3) when type cannot be inferred by Typescript correctly
let numbers = [-10,-1, 12]
let numAboveZero:boolean | number = false

numbers.forEach(n => {if (n > 0) numAboveZero = n})

```

### Decorators

Decorator can be used on property, getter and method and method parameters. Most useful is applying decorators to method. Decorator is executed ONCE when class is defined (not when new class is created). This is why decorating properties does not have lot of merit (the value of prop is not avaliable at that time).

```javascript

function myDecorator(target:any, key:string){
  console.log("Target is class where decorator is", target)
  console.log("Key is method where decorator is applied", key)
}


```
