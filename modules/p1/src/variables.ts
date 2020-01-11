/**
 * Variable types in typescript
 */

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

// Function type definition/description
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

export default apples