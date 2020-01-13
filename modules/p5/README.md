# [HOME](../../README.md): Using generic types in functions with Typescript

This module demostrates use of generic types in classes and functions.

## Setup

```bash
# create tsconfig file
npx tsc --init

```

- define custom directories for compiling the typesctipt

```json
/* Redirect output structure to the directory. */
"outDir": "./dist"
/* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
"rootDir": "./src"
```

- add nodemon and

```bash
# install node dev modules
npm i -D nodemon concurrently
````

- extend npm script to compile tsc files and nodemon to reload on changes. To run use `npm run dev` to start develpoing with not-reloading.

- Node type definition file for fs.

```bash
# install node type definitions file
npm i -D @types/node
```

## Lessons

When function should accept different types of parameters we use genetic type. By convention \<T> is used as generic type indication.

### Generic type with functions

```typescript
// genric function to print array of passed type
// by convention <T> is used to
function printArray<T>(arr:T[]){
  arr.forEach(item=>{
    console.log("Print...", item)
  })
}
// call it with type
printArray<string>(['a','b','c'])
// or without for auto type recognition
printArray(['a','b','c'])
```

### Generic constrains

Safeguarding complexer generic types when using functions

```typescript
// Using generic types with more complex objects
// and applying function with generic types
// interface is defined to ensure type guarding
class House {
  constructor(public name:string){}
  print(){
    console.log("I am a house: ", this.name)
  }
}

interface Printable{
  print():void
}

function printObject<T extends Printable>(arr:T[]){
  arr.forEach(item=>{
    item.print()
  })
}

const houses:House[] = []
houses.push(new House("huis 1"))
houses.push(new House("huis 2"))

printObject(houses)
```
