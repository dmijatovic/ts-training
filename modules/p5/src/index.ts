
console.log("It works!")

// example of generic function type

function printStrings(arr:string[]):void{
  arr.forEach(item=>{
    console.log("Print...", item)
  })
}

function printNumbers(arr:number[]):void{
  arr.forEach(item=>{
    console.log("Print...", item)
  })
}


// genric function to print array of passed type
// by convention <T> is used to
function printArray<T>(arr:T[]){
  arr.forEach(item=>{
    console.log("Print...", item)
  })
}

printArray<string>(['a','b','c'])
printArray<number>([1,2,3])
//using type inference we can omit
printArray([1,2,4,'c'])



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






